from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .serializers import AppointmentSerializer, EventSerializer
from rest_framework.views import APIView
from .models import Appointment, Event
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes

# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_appointments(request):
    appointments = Appointment.objects.all()
    serializer = AppointmentSerializer(appointments, many=True)
    return Response(serializer.data)

@permission_classes([AllowAny])
class Events(APIView):

    def get(self, request):
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([AllowAny])
def user_appointments_by_electrician_id(request):

    appointments_param = request.query_params.get('electrician_id')
    sort_param = request.query_params.get('sort')

    appointments = Appointment.objects.all()

    if appointments_param:
        appointments = appointments.filter(electrician_id=appointments_param)

    if sort_param:
        appointments = appointments.order_by(sort_param)

    serializer = AppointmentSerializer(appointments, many=True)
    return Response(serializer.data, status=status.HTTP_202_ACCEPTED)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_appointments(request):

    print('User ', f"{request.user.id} {request.user.email} {request.user.username}")

    if request.method == 'POST':
        serializer = AppointmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':
        appointments = Appointment.objects.filter(user_id=request.user.id)
        serializer = AppointmentSerializer(appointments, many=True)
        return Response(serializer.data)

@api_view(['PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def user_specific_appointments(request, pk):

    appointments = get_object_or_404(Appointment, pk=pk)

    if request.method == 'PUT':
        serializer = AppointmentSerializer(appointments, data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        appointments.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)