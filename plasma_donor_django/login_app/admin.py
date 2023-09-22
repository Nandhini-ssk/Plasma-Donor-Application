from django.contrib import admin
from .models import*
# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display=('username','age','bloodGrp','city','email')
    search_fields=('username','bloodGrp')
    list_filter=('bloodGrp',)
admin.site.register(Users,UserAdmin)