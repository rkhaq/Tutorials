from rest_framework import serializers

from . import models as storeModels


class ImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = storeModels.ProductImage
    fields = ['id','image', 'alt_text']


class ProductSerializer(serializers.ModelSerializer):
  product_image = ImageSerializer(many=True, read_only=True)

  class Meta:
    model = storeModels.Product
    fields = ['id', 'category', 'title', 'description', 'slug', 'regular_price', 'product_image']

class CategorySerializer(serializers.ModelSerializer):
  class Meta:
    model = storeModels.Category
    fields = ['name', 'slug']
