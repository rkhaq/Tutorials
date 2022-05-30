from django.contrib import admin
from mptt.admin import MPTTModelAdmin

from . import models as storeModels

admin.site.register(storeModels.Category, MPTTModelAdmin)

class ProductSpecificationInline(admin.TabularInline):
  model = storeModels.ProductSpecification

@admin.register(storeModels.ProductType)
class ProductTypeAdmin(admin.ModelAdmin):
  inlines = [ProductSpecificationInline,]

class ProductImageInline(admin.TabularInline):
  model = storeModels.ProductImage

class ProductSpecificationValueInline(admin.TabularInline):
  model = storeModels.ProductSpecificationValue

@admin.register(storeModels.Product)
class ProductAdmin(admin.ModelAdmin):
  inlines = [ProductImageInline, ProductSpecificationValueInline,]
