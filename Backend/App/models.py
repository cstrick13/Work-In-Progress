from django.db import models

class Test(models.Model):
    name =  models.CharField(max_length=255,null=True)
# Create your models here.
