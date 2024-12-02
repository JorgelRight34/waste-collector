from django.urls import path

from . import views

urlpatterns = [
    path("bins/", views.bin, name="bins"),
    path("bins/<int:id>", views.bin, name="bins_id"),
     path("routes/", views.route, name="routes"),
    path("routes/<int:id>", views.route, name="routes_id"),
    path("get-route-bins/", views.get_route_bins, name="get_route_bins"),
]