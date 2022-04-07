from django.urls import path
from appointments import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_appointments),
    path('video_id', views.user_appointments_by_electrician_id),
    path('<int:pk>/', views.user_specific_appointments),
    path('all/', views.get_all_appointments),
]
