from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from  rest_framework.response import Response
import json
from django.contrib.auth.hashers import check_password
from .models import * 
num=5000
userDic=[]
def home(request):
    return HttpResponse("Hello")
@api_view(['POST'])
def djanosignin(request):
    try:
        x=str(request.body, "utf-8")
        userDic.append(x)
        data = json.loads(x)
        print(data)
        Users.objects.create(username=data["userName"],age=data["age"],city=data["city"],bloodGrp=data["bloodgroup"],email=data["email"],password=data["password"])
        return Response({"msg":"user created successfully"})
    except:
        return Response({"msg":"Error hain"})

    
@api_view(['POST'])
def login(request):
    x=str(request.body, "utf-8")
    userDic.append(x)
    data = json.loads(x)
    print(data)
    u=Users.objects.filter(username=data["username"])
    if not u:
        return Response({"message":0})
    if check_password(data["password"], u[0].password):
        return Response({"message":1})
    return Response({"message":0})



@api_view(['POST'])
def countDonor(request):
    x=str(request.body, "utf-8")
    data = json.loads(x)
    print(data)
    l=len(Users.objects.filter())
    return Response({"message":l})







