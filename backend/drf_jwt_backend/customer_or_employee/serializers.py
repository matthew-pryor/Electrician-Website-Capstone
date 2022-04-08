from rest_framework import serializers
from .models import UserType

class UserTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserType
        fields = ['id', 'user_type', 'user_id']
        depth = 1