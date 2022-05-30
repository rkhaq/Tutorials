from django.db import models

class Tag(models.Model):
  name = models.CharField(max_length=255)

  def __str__(self) -> str:
      return self.name


class Project(models.Model):
  name = models.CharField(max_length=255)
  description = models.CharField(max_length=255, blank=True)
  link = models.CharField(max_length=250)
  image = models.ImageField(upload_to='images')
  tags = models.ManyToManyField(Tag)

  def __str__(self) -> str:
      return self.name