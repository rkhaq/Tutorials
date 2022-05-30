from django.shortcuts import render
from rest_framework import generics

from . import models as storeModels
from . import serializers as storeSerializer


class ProductListView(generics.ListAPIView):
  queryset = storeModels.Product.objects.all()
  serializer_class = storeSerializer.ProductSerializer

class Product(generics.RetrieveAPIView):
  lookup_field = 'slug'
  queryset = storeModels.Product.objects.all()
  serializer_class = storeSerializer.ProductSerializer

class CategoryItemView(generics.ListAPIView):
  serializer_class = storeSerializer.ProductSerializer

  def get_queryset(self):
      return storeModels.Product.objects.filter(
        category__in=storeModels.Category.objects.get(slug=self.kwargs['slug']).get_descendants(include_self=True)
      )

class CategoryListView(generics.ListAPIView):
  queryset = storeModels.Category.objects.filter(level=1)
  serializer_class = storeSerializer.CategorySerializer
