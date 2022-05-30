from rest_framework.generics import ListAPIView
from rest_framework import permissions
from . import models
from . import serializers
# Create your views here.
class ContactListView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = models.Contact.objects.all()
    serializer_class = serializers.ContactSerializer
    pagination_class = None


# Create your views here.
