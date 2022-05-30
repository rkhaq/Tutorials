from rest_framework.generics import ListAPIView
from rest_framework import permissions
from . import models
from . import serializers
# Create your views here.
class TechnologyListView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = models.Technology.objects.all()
    serializer_class = serializers.TechnologySerializer
    pagination_class = None
