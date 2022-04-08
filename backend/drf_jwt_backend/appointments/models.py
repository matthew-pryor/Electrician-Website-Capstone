from django.db import models
from django.contrib.auth.models import User
from appointment_status.models import AppointmentStatus
from services.models import Service

# Create your models here.

class Appointment(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    appointment_date_time = models.CharField(max_length=255)
    appointment_status = models.ForeignKey(AppointmentStatus, on_delete=models.CASCADE)
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    description = models.CharField(max_length=3000)
    electrician_id = models.IntegerField()


