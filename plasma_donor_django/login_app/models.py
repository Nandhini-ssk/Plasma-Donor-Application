from django.db import models
from django.contrib.auth.hashers import make_password

# Create your models here.
class Users(models.Model):
    username=models.CharField(max_length=20,unique=True)
    age=models.IntegerField()
    city=models.CharField(max_length=200)
    bloodGrp=models.CharField(max_length=10)
    email=models.CharField(max_length=255)
    password=models.CharField(max_length=128,)
    def save(self, *args, **kwargs):
        if not self.password.startswith('pbkdf2_sha256'):
            self.password = make_password(self.password)
        super().save(*args, **kwargs)