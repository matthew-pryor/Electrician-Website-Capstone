from django.db import models

# Create your models here.

service_choices = (
    ('Emergency', 'EMERGENCY'),
    ('Maintenance', 'MAINTENANCE'),
    ('Wiring', 'WIRING'),
    ('Installation', 'INSTALLATION')
    ('Inspection', 'INSPECTION'),
    ('Quote', 'QUOTE')
    )

class Service(models.Model):

    service_type = models.CharField(max_length=20, choices=service_choices, default='Quote')
    service_description = models.CharField(max_length=3000)

    def __str__(self):
        return self.type
