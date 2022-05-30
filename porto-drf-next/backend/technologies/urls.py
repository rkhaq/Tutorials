from django.urls import path
from . import views

urlpatterns = [
    path('', views.TechnologyListView.as_view()),
]