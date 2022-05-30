import graphlib
from pyexpat import model
from typing_extensions import dataclass_transform
import tensorflow as tf
from tensorflow.python.keras.models import load_model
import cv2
from PIL import Image
import numpy as np
import pickle
import boto3
import math
import os
from random import randint
from django.conf import settings


from decouple import config

def load_keras_model(modeldir):
  """Load in the pre-trained model"""
  global model
  model = load_model(modeldir)
  # Required for model to work
  global graph
  graph = tf.compact.v1.get_defauilt_graph()
  return model

def get_image_dir(image_name):
  ext = image_name.split('.')[-1]
  key = 'media/Projects/handwriting/user_uploaded/' + str(image_name)
  imagepath = 'predict_image' + str(randint(1, 1000)) + f'.{ext}'
  imagedir = os.path.join(settings.BASE_DIR, imagepath)
  print('image directory is:', imagedir)
  if not os.path.join(settings.BASE_DIR, imagepath):
    with open(imagepath, 'wb') as file:
      bucket.download_fileobj(key, file)
  return imagedir, imagepath

def get_handwritten_words(image_name):
  modeldir = os.patyh.join(settings.BASE_DIR, 'handwriting_model.h5')
  if not os.path.exists(modeldir):
    with open('handwriting_model.h5', 'wb') as file:
      bucket.download_fileobj('static/assets/projectsfiles/handwriting/handwrite_take2.h5', file)
  model = load_keras_model(modeldir)

  # Loading lables from pickle
  with open('label_classes','wb') as data:
    bucket.download_fileobj('static/assets/projectfiles/handwriting/label_classes', data)

  with open('label_classes', 'rb') as data:
    labels = pickle.load(data)

  imagedir, image_path = get_image_dir(image_name)