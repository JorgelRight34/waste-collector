from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, JsonResponse
from django.db import IntegrityError
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

import json

from .models import User

# Create your views here.
@api_view(('POST',))
@permission_classes([AllowAny])
def register(request):
    data = json.loads(request.body)
    username = data.get("username")
    password = data.get("password")

    try:
        user = User.objects.create_user(username=username, password=password)
        user.save()
    except IntegrityError:
        return HttpResponse("Integrity error", status=401)
    
    refresh_token = RefreshToken.for_user(user)

    return Response({
        "access_token": str(refresh_token.access_token),
        "refresh_token": str(refresh_token)
    })


@api_view(('POST',))
@permission_classes([AllowAny])
def login_view(request):
    data = json.loads(request.body)
    username = data.get("username")
    password = data.get("password")

    user = authenticate(request, username=username, password=password)

    if user is not None:
        refresh_token = RefreshToken.for_user(user)

        return Response({
            "access_token": str(refresh_token.access_token),
            "refresh_token": str(refresh_token),
            "user": {
                "username": username,
            }
        })
    else:
        return HttpResponse(status=401)


@api_view(('GET',))
@permission_classes([IsAuthenticated])
def user_info(request):
    user = request.user
    return Response({
        'username': user.username,
    })