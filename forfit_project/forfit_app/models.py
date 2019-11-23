from django.db import models


#Model for Routine
class Routine(models.Model):
    name = models.CharField(max_length=100, default="My Routine")
    week = models.CharField(max_length=50, default="N/A")

    def __str__(self):
        return self.name


#Model for Workout, extends Routine
class Workout(models.Model):
    name = models.CharField(max_length=255)
    day = models.CharField(max_length=50)
    description = models.TextField
    sets = models.IntegerField
    reps = models.IntegerField

    def __str__(self):
        return self.name


#Model for Goals
class Goal(models.Model):
    name = models.CharField(max_length=100) 
    start_weight = models.IntegerField
    current_weight = models.IntegerField
    end_weight = models.IntegerField

    def __str__(self):
        return self.name