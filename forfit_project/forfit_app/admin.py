from django.contrib import admin

from django.contrib import admin
from .models import Routine, Workout, Goal

admin.site.register([Routine, Workout, Goal])