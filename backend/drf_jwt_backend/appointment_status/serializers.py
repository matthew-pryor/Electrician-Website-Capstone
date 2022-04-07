
from .models import AppointmentStatus
from rest_framework import serializers

class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppointmentStatus
        fields = ['id', 'status_type']