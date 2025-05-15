from django.contrib import admin
from django.urls import path,include
from .views import *

urlpatterns = [
    path('',NoteListView.as_view())
]