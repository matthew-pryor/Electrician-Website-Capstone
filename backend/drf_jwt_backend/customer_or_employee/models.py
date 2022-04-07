
from django.db import models

# Create your models here.

user_choices = (
    ('Employee', 'EMPLOYEE'),
    ('Customer', 'CUSTOMER'),
    )

class Service(models.Model):

    service_type = models.CharField(max_length=20, choices=user_choices, default='Quote')

    def __str__(self):
        return self.service_type
