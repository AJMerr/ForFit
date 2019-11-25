from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()


router = routers.DefaultRouter()
router.register('routine', views.RoutineView)
router.register('workout', views.WorkoutView)
router.register('goal', views.GoalView)


urlpatterns = [
    path('', include(router.urls))
]
