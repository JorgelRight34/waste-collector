from django.shortcuts import render
from django.db.models import Count
from django.db.models.functions import TruncDate
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

from bins.models import Bin, Route

# Create your views here.
@api_view(('GET',))
@permission_classes([AllowAny])
def routes(request):
    stat = request.GET.get('stat', 'day')
    if stat == "day":
        days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
        data = {f"{days[i]}": len(Route.objects.filter(day_of_the_week=i)) for i in range(7)}

        return Response(data)
    

@api_view(('GET',))
@permission_classes([AllowAny])
def bins(request):
    days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
    
    # Calcular el nivel de llenado total por día
    data = {}
    for i in range(7):
        fill_level = 0
        # Obtener las rutas correspondientes al día de la semana
        routes = Route.objects.filter(day_of_the_week=i)
        for route in routes:
            # Sumar el nivel de llenado de los contenedores en cada ruta
            for bin in route.bins.all():
                fill_level += bin.fill_level
        data[days[i]] = fill_level

    return Response(data)



