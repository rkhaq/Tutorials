from django.contrib import admin

from . import models as projectModels

admin.site.register(projectModels.Project)
admin.site.register(projectModels.Tag)