from . import views
from django.urls import path

urlpatterns = [
    path('', views.services_list),
    path('<int:pk>/', views.services_list_detail),
]