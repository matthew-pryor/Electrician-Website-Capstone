
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .serializers import UserTypeSerializer
from .models import UserType
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes

# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_electricians(request):
    electricians = UserType.objects.all()
    serializer = UserTypeSerializer(electricians, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def set_user_electrician_status(request, pk):

    electrician_id = pk
    request.data['electrician_id'] = electrician_id

    if request.method == 'POST':

        serializer = UserTypeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([AllowAny])
def retrieve_user_specific_electricians(request):

    electricians_param = request.query_params.get('electrician')
    sort_param = request.query_params.get('sort')
    electricians = UserType.objects.all()

    if electricians_param:
        electricians = electricians.filter(electrician_id=electricians_param)
    
    if sort_param:
        electricians = electricians.order_by(sort_param)

    serializer = UserTypeSerializer(electricians, many=True)
    return Response(serializer.data)