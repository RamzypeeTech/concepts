from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('design/', views.design, name='design'),
    path('materials/', views.materials, name='materials'),
    path('gallery/', views.gallery, name='gallery'),
    path('contact/', views.contact, name='contact'),
]
