from turtle import title
from django.db import models
from django.contrib.auth.models import User
from appointment_status.models import AppointmentStatus
from services.models import Service
from drf_jwt_backend.settings import DATE_INPUT_FORMATS
from datetime import datetime

# Create your models here.

class Appointment(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    address = models.CharField(max_length=999)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=20)
    zip_code = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)
    email_address = models.CharField(max_length=255)
    title = models.CharField(max_length=20)
    start = models.DateTimeField(blank=False, default=datetime.now().strftime(("%Y-%m-%d %H:%M:%S")))
    end = models.DateTimeField(blank=False, default=datetime.now().strftime(("%Y-%m-%d %H:%M:%S")))
    appointment_status = models.ForeignKey(AppointmentStatus, on_delete=models.CASCADE)
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    description = models.CharField(max_length=1000)
    electrician_id = models.IntegerField()

class Event(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    start = models.DateTimeField()
    end = models.DateTimeField()

    # "2022-04-27"


