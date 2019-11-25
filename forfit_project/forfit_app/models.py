from django.db import models

# Create your models here.
from django.db import models


#Model for Routine
class Routine(models.Model):
    name = models.CharField(max_length=100, default="My Routine")
    week = models.CharField(max_length=50, default="N/A")

    def __str__(self):
        return self.name


#Model for Workout, extends Routine
class Workout(models.Model):
    name = models.CharField(max_length=255, default="N/A")
    day = models.CharField(max_length=50, default="N/A")
    description = models.TextField(default="N/A")
    sets = models.IntegerField(default=0)
    reps = models.IntegerField(default=0)
    routine = models.ForeignKey(Routine, on_delete=models.CASCADE, related_name="workouts")

    def __str__(self):
        return self.name


#Model for Goals
class Goal(models.Model):
    name = models.CharField(max_length=100, default="N/A") 
    start_weight = models.IntegerField(default=0)
    current_weight = models.IntegerField(default=0)
    end_weight = models.IntegerField(default=0)

    def __str__(self):
        return self.name