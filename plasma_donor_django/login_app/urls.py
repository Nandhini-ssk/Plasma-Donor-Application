from django.contrib import admin
from django.urls import include, path
from . import views
urlpatterns = [
   
    path('',views.home,name="home"),
    path('signup',views.djanosignin),
    path('login',views.login),
    path('DonorsCount',views.countDonor),
]