from django.shortcuts import render

def app_view(request):
    return render(request, 'app.html')

def app1_view(request):
    return render(request, 'app1.html')

def app2_view(request):
    return render(request, 'app2.html')

def faq_view(request):
    return render(request, 'FAQ.html')

def help_view(request):
    return render(request, 'help.html')

def login_view(request):
    return render(request, 'login.html')

def main_view(request):
    return render(request, 'main.html')

def request_view(request):
    return render(request, 'request.html')

def signup_view(request):
    return render(request, 'signup.html')

def aboutus_view(request):
    return render(request, 'aboutus.html')
