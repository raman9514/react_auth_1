from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics, permissions
from .models import Note
from .serializers import NoteSerializer
from rest_framework import status, permissions
from rest_framework.response import Response

# Create your views here.

class NoteListView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def get(self,request):
        notes = Note.objects.all()
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self,request):
        pass