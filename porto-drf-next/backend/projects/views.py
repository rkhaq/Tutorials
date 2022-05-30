from rest_framework.generics import ListAPIView
from rest_framework import permissions
from . import models
from . import serializers
# Create your views here.
class ProjectListView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = models.Project.objects.all()
    serializer_class = serializers.ProjectSerializer
    pagination_class = None
