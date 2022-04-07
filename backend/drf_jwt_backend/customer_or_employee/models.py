
from django.db import models

# Create your models here.

user_choices = (
    ('Employee', 'EMPLOYEE'),
    ('Customer', 'CUSTOMER'),
    )

class UserType(models.Model):

    user_type = models.CharField(max_length=20, choices=user_choices, default='Customer')

    def __str__(self):
        return self.user_type
