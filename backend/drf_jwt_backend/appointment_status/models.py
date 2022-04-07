from django.db import models

# Create your models here.

status_choices = (
    ('Complete', 'COMPLETE'),
    ('Scheduled', 'SCHEDULED'),
    ('Processing', 'PROCESSING'),
    ('Cancelled', 'CANCELLED')
    )

class AppointmentStatus(models.Model):

    status_type = models.CharField(max_length=20, choices=status_choices, default='Processing')

    def __str__(self):
        return self.status_type
