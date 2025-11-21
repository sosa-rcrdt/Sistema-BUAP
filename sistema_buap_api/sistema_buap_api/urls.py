from django.contrib import admin
from django.urls import path
from sistema_buap_api.views import bootstrap
from sistema_buap_api.views import users
from sistema_buap_api.views import alumnos
from sistema_buap_api.views import maestros
from sistema_buap_api.views import auth

urlpatterns = [
    #Version
        path('bootstrap/version', bootstrap.VersionView.as_view()),
    #Create Admin
        path('admin/', users.AdminView.as_view()),
    #Create Alumno
        path('alumnos/', alumnos.AlumnosView.as_view()),
    #Create Maestro
        path('maestros/', maestros.MaestrosView.as_view()),
    #Login
        path('token/', auth.CustomAuthToken.as_view()),
    #Logout
        path('logout/', auth.Logout.as_view())

]
