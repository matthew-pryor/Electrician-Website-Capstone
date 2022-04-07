
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .serializers import ServiceSerializer
from .models import Service

@api_view(['GET', 'POST'])
def services_list(request):

    if request.method == 'GET':

        services = Service.objects
        serializer = ServiceSerializer(services, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ServiceSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def services_list_detail(request, pk):

    services = get_object_or_404(Service, pk=pk)

    if request.method == 'GET':

        serializer = ServiceSerializer(services)
        return Response(serializer.data)

    elif request.method == 'PUT':

        serializer = ServiceSerializer(services, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

    elif request.method == 'DELETE':

        services.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)