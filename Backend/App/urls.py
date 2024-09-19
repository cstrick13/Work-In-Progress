from django.urls import path, re_path
from App import views

urlpatterns = [
    path('tests/', views.testApi),
]