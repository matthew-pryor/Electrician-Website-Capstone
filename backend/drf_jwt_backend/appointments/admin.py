from django.apps import AppConfig
from django.contrib import admin
from customer_or_employee.models import UserType
from appointment_status.models import AppointmentStatus
from services.models import Service
from .models import Appointment, Event

# Register your models here.


admin.site.register(Appointment)
admin.site.register(Event)
admin.site.register(Service)
admin.site.register(UserType)
admin.site.register(AppointmentStatus)