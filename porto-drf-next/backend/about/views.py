from rest_framework.generics import ListAPIView
from rest_framework import permissions
from . import models
from . import serializers
# Create your views here.
class AboutListView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = models.About.objects.all()
    serializer_class = serializers.AboutSerializer
    pagination_class = None
