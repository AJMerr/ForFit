from rest_framework import serializers
from .models import Workout, Routine, Goal

class GoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goal
        fields = ('id', 'name', 'start_weight', 'current_weight', 'end_weight')


class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        fields = ('id', 'name', 'day', 'description', 'sets', 'reps')


class RoutineSerializer(serializers.ModelSerializer):
    workouts = WorkoutSerializer(many = True, read_only = True)
    class Meta:
        model = Routine
        fields = ('id', 'name', 'week')