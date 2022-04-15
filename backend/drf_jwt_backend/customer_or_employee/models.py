
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

user_choices = (
    ('Employee', 'EMPLOYEE'),
    ('Customer', 'CUSTOMER'),
    )

class UserType(models.Model):

    user_type = models.CharField(max_length=20, choices=user_choices, default='Employee')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.CharField(max_length=999)
    name = models.CharField(max_length=999)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=20)
    zip_code = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)
    email_address = models.CharField(max_length=255)
    linkedin = models.CharField(max_length=999)
    about_me = models.CharField(max_length=1000)
    services = models.CharField(max_length=1000)
    rates = models.CharField(max_length=1000)

    def __str__(self):
        return self.user_type
