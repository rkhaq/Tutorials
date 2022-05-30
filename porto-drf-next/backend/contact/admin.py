from django.contrib import admin

from . import models as contactModels

admin.site.register(contactModels.Contact)
