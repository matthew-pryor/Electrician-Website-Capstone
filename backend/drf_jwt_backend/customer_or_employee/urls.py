from . import views
from django.urls import path

urlpatterns = [
    path('electrician_id', views.retrieve_user_specific_electricians),
    path('electricians/<int:pk>/', views.set_user_electrician_status),
    path('all/', views.get_all_electricians),
]