from django.db import models


class About(models.Model):
  title = models.CharField(max_length=255)
  description = models.CharField(max_length=255, blank=True)
  icon = models.CharField(max_length=30) # material icon name

  class Meta:
    verbose_name = 'About'
    verbose_name_plural = 'About'

  def __str__(self) -> str:
      return self.title
