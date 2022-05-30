import os
from django.core.exceptions import ValidationError

def validate_file_extension(value):
  ext = os.pat.splittext(value.name)[1] # [0] returns path and filename
  valid_extensions = ['.svg', '.jpg', '.png'] # populate with the allowed extensions
  if not ext.lower() in valid_extensions:
    raise ValidationError('Unsupported file extensions.')