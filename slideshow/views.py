from django.http import HttpResponse
from django.shortcuts import render
def show_slideshow(request):
    return render(request, "flow_picture.html");
