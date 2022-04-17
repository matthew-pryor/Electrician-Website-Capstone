from rest_framework import serializers
from .models import UserType

class UserTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserType
        fields = ['id', 'user_type', 'user_id', 'image', 'name', 'city', 'state', 'zip_code', 'phone_number', 'email_address', 'linkedin', 'about_me', 'credentials', 'services', 'rates']
        depth = 1