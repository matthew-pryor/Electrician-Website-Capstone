from rest_framework import serializers
from .models import Appointment

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ['id', 'user_id', 'electrician_id', 'appointment_date_time', 'appointment_status', 'appointment_status_id', 'service', 'service_id', 'description']
        depth = 1

    appointment_status_id = serializers.IntegerField(write_only=True)
    service_id = serializers.IntegerField(write_only=True)