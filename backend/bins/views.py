from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

import json

from .models import Bin, Route, Street

# Create your views here.
@api_view(('GET', 'POST', 'PUT', 'DELETE'))
@permission_classes([AllowAny])
def bin(request, id=None):
    if request.method == "POST":
        data = json.loads(request.body)
        bin = Bin.create_bin(location=data["location"], street=data["street"])
        return Response(bin.serialize())
    
    if request.method == "PUT":
        data = json.loads(request.body)
        bin = Bin.objects.get(id=data["id"])

        for key in data.keys():
            if key == "street":
                print(data["street"])
                street = Street.objects.get_or_create(street=data["street"])
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

        if id:
            try:
                bin = Bin.objects.get(id=id)
                return Response(bin.serialize())
            except Bin.DoesNotExist:
                return HttpResponse("Bin does not exist", status=401)
            
        if page:
            per_page = request.GET.get('limit', 10)
            bins = Paginator(Bin.objects.all(), per_page=per_page)

            try:
                bins = bins.page(page)
            except EmptyPage:
                # If the page is out of range, deliver the last page of results
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

        if id:
            try:
                route = Route.objects.get(id=id)
                return Response(route.serialize())
            except Bin.DoesNotExist:
                return HttpResponse("Route does not exist", status=401)
        if page:
            per_page = request.GET.get('limit', 10)
            routes = Paginator(Route.objects.all(), per_page=per_page)

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
    bins = Bin.objects.filter(fill_level__gte=0.5)

    page = request.GET.get('page', 1)
    per_page = request.GET.get('limit', 10)
    bins = Paginator(bins, per_page=per_page)

    try:
        bins = bins.page(page)
    except EmptyPage:
        bins = []
    except PageNotAnInteger:
        bins = bins.page(1)

    return Response([bin.serialize() for bin in bins])
