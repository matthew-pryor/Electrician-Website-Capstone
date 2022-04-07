from . import views
from django.urls import path

urlpatterns = [
    path('', views.user_type_list),
    path('<int:pk>/', views.user_type_list_detail),
]