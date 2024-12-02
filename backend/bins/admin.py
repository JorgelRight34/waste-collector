from django.contrib import admin

from .models import Bin, Route, Street

# Register your models here.
admin.site.register(Bin)
admin.site.register(Route)
admin.site.register(Street)
