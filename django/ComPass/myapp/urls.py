from django.urls import path
from . import views

urlpatterns = [
    path('app/', views.app_view, name='app'),
    path('app1/', views.app1_view, name='app1'),
    path('app2/', views.app2_view, name='app2'),
    path('faq/', views.faq_view, name='faq'),
    path('help/', views.help_view, name='help'),
    path('login/', views.login_view, name='login'),
    path('', views.main_view, name='main'),
    path('request/', views.request_view, name='request'),
    path('signup/', views.signup_view, name='signup'),
    path('aboutus/', views.aboutus_view, name='aboutus'),
]
