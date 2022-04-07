from django.apps import AppConfig
from django.contrib import admin

from services.models import Service
from .models import Appointment

# Register your models here.


admin.site.register(Appointment)
admin.site.register(Service)