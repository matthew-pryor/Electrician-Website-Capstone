from . import views
from django.urls import path

urlpatterns = [
    path('', views.status_type_list),
    path('<int:pk>/', views.status_type_list_detail),
]