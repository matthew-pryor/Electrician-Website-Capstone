from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .serializers import StatusSerializer
from .models import Status

# Create your views here.

@api_view(['GET', 'POST'])
def status_type_list(request):

    if request.method == 'GET':

        status_type = Status.objects
        serializer = Status(status_type, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = StatusSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def status_type_list_detail(request, pk):

    status_type = get_object_or_404(Status, pk=pk)

    if request.method == 'GET':

        serializer = StatusSerializer(status_type)
        return Response(serializer.data)

    elif request.method == 'PUT':

        serializer = StatusSerializer(status_type, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

    elif request.method == 'DELETE':

        status_type.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Create your views here.
