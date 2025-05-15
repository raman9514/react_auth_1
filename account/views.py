from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import permissions, status
from .serializations import UserSerializer, RegisterSerializer
from rest_framework.response import Response
# Create your views here.



class UsersView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self,request):
        serializar = UserSerializer(request.user)
        return Response(serializar.data,status=status.HTTP_200_OK)

class RegisterView(APIView):
    permission_classes=[]
    def post(self,request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"message":"User Registered Successfully"},status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
        