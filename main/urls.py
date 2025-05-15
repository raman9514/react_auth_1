from django.contrib import admin
from django.urls import path,include
from .views import *

urlpatterns = [
    path('notes/',include('notes.urls')),
    path('account/',include('account.urls'))
]