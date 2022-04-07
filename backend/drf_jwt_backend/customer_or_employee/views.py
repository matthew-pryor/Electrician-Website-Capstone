
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .serializers import UserTypeSerializer
from .models import UserType

# Create your views here.

@api_view(['GET', 'POST'])
def user_type_list(request):

    if request.method == 'GET':

        user_type = UserType.objects
        serializer = UserType(user_type, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UserTypeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def user_type_list_detail(request, pk):

    user_type = get_object_or_404(UserType, pk=pk)

    if request.method == 'GET':

        serializer = UserTypeSerializer(user_type)
        return Response(serializer.data)

    elif request.method == 'PUT':

        serializer = UserTypeSerializer(user_type, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

    elif request.method == 'DELETE':

        user_type.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)