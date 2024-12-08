from django.urls import path

from . import views

urlpatterns = [
    path('routes/', views.routes, name='routes'),
    path('bins/', views.bins, name='bins'),
    path('zones/', views.zones, name='zones')
]