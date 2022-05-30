from django.contrib import admin

from . import models as technologiesModels

admin.site.register(technologiesModels.Technology)