from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.http import HttpResponse, JsonResponse
from django.db import IntegrityError
from django.db.models import Q
import re
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from datetime import datetime, timedelta

import json

from .models import Bin, Route, Street, Zone

# Create your views here.
@api_view(('GET', 'POST', 'PUT', 'DELETE'))
@permission_classes([AllowAny])
def bin(request, id=None):
    if request.method == "POST":
        data = json.loads(request.body)
        try:
            bin = Bin.create_bin(location=data["location"], street=data["street"], zone=data["zone"])
            return Response(bin.serialize())
        except IntegrityError as err:
            return HttpResponse(str(err), status=409)
    
    if request.method == "PUT":
        data = json.loads(request.body)
        bin = Bin.objects.get(id=data["id"])
        for key in data.keys():
            if key == "street":
                zone = Zone.objects.get_or_create(zone=data["zone"])[0]
                zone.save()
                street = Street.objects.get_or_create(street=data["street"], zone=zone)
                setattr(bin, key, street[0])
                continue
            setattr(bin, key, data[key])
        bin.save()

        return Response(bin.serialize())
    
    if request.method == "DELETE":
        if not id:
            return HttpResponse("Id is missing", status=401)
        try:
            bin = Bin.objects.get(id=id)
            bin.delete()
            return HttpResponse("Bin deleted", status=201)
        except Bin.DoesNotExist:
            return HttpResponse("Bin doesn't exist", status=401)
    
    if request.method == "GET":
        page = request.GET.get('page', 1)
        q = request.GET.get('q', '')

        if id:
            try:
                bin = Bin.objects.get(id=id)
                return Response(bin.serialize())
            except Bin.DoesNotExist:
                return HttpResponse("Bin does not exist", status=401)  
        
        per_page = request.GET.get('limit', 10)

        if q:
            # Check if query is referring to the fill level of the bin
            if match := re.search(r"(\d{2}|\d{1}|\d{3})\%", q):
                # Convert it to a number from 0 to 1 to be able to query it
                q = float(match.group(1)) / 100

            fields = ["street__zone__zone", "fill_level"]
            
            query = Q()
            for field in fields:
                query |= Q(**{f"{field}__icontains": q})

        bins = Bin.objects.filter(query) if q else Bin.objects.all()
        bins = Paginator(bins.order_by('id'), per_page=per_page)

        try:
            bins = bins.page(page)
        except EmptyPage:
            # If the page is out of range, deliver an empty result
            bins = []
        except PageNotAnInteger:
            # If the page is not an integer, deliver the first page of results
            bins = bins.page(1)

        return Response([bin.serialize() for bin in bins])


@api_view(('GET', 'POST'))
@permission_classes([AllowAny])
def route(request, id=None):
    if request.method == "POST":
        data = json.loads(request.body)
        try:
            bins = [Bin.objects.get(id=bin["id"]) for bin in data["bins"]]
            route = Route.objects.create( 
                instructions=data["instructions"], 
                starting_point=data["startingPoint"],
                duration=data["duration"],
                distance=data["distance"],
                day_of_the_week=data["dayOfTheWeek"]
            )
            route.bins.set(bins)
            route.save()
            return Response(route.serialize())
        except ValueError:
            return HttpResponse("An error happened", status=401)

    if request.method == "DELETE":
        if not id:
            return HttpResponse("Id is missing", status=401)
        try:
            route = route.objects.get(id=id)
            route.delete()
            return HttpResponse("Route deleted", status=201)
        except Bin.DoesNotExist:
            return HttpResponse("Route doesn't exist", status=401)
        
    if request.method == "GET":
        page = request.GET.get('page', 1)
        date = request.GET.get('date', '')

        if id:
            try:
                route = Route.objects.get(id=id)
                return Response(route.serialize())
            except Route.DoesNotExist:
                return HttpResponse("Route does not exist", status=401)
        
        if date:
            try:
                # Convert the string to a datetime object
                date = datetime.strptime(date, '%Y-%m-%d').date()
            except ValueError:
                print(date)
                return HttpResponse(f"time {date} does not match format '%Y-%m-%d'", status=400)

            # Get the start and end of the day to query the entire day (ignoring time)
            start_of_day = datetime.combine(date, datetime.min.time())  # midnight
            end_of_day = start_of_day + timedelta(days=1)  # one second after midnight


        per_page = request.GET.get('limit', 10)
        routes = Route.objects.filter(date__gte=start_of_day, date__lte=end_of_day) if date else Route.objects.all()
        routes = Paginator(routes.order_by('date'), per_page=per_page)


        try:
            routes = routes.page(page)
        except EmptyPage:
            routes = []
        except PageNotAnInteger:
            routes = routes.page(1)

        return Response([route.serialize() for route in routes])
        

@api_view(('GET',))
@permission_classes([AllowAny])
def get_route_bins(request):
    fill_level = request.GET.get('fill', 0.5)

    try:
        fill_level = float(fill_level)
    except ValueError:
        fill_level = 0.5
    bins = Bin.objects.filter(fill_level__gte=fill_level).order_by('id')

    page = request.GET.get('page', 1)
    per_page = request.GET.get('per_page', 100)
    if per_page == 0:
        return Response([])

    print("per_page", per_page)
    bins = Paginator(bins, per_page=per_page)

    try:
        bins = bins.page(page)
    except EmptyPage:
        bins = bins.page(1)
    except PageNotAnInteger:
        bins = bins.page(1)
    
    print("length", len(bins))

    return Response([bin.serialize() for bin in bins])
