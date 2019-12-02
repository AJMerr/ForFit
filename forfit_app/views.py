from rest_framework import viewsets
from .serializers import RoutineSerializer, WorkoutSerializer, GoalSerializer
from .models import Routine, Workout, Goal


class RoutineView(viewsets.ModelViewSet):
    queryset = Routine.objects.all()
    serializer_class = RoutineSerializer


class WorkoutView(viewsets.ModelViewSet):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer


class GoalView(viewsets.ModelViewSet):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer