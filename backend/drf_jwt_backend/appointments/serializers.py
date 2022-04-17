
from rest_framework import serializers
from .models import Appointment, Event

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ['id', 'user_id', 'first_name', 'last_name', 'address', 'city', 'state', 'zip_code', 'phone_number', 'email_address', 'electrician_id', 'title', 'start', 'end', 'appointment_status', 'appointment_status_id', 'description']
        depth = 1

    appointment_status_id = serializers.IntegerField(write_only=True)

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'title', 'start', 'end']