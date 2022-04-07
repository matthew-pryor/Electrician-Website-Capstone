from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Appointment(models.model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    appointment_date_time = models.CharField()

