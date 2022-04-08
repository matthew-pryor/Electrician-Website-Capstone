
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

user_choices = (
    ('Employee', 'EMPLOYEE'),
    ('Customer', 'CUSTOMER'),
    )

class UserType(models.Model):

    user_type = models.CharField(max_length=20, choices=user_choices, default='Customer')
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user_type
