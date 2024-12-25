from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def design(request):
    return render(request, 'design.html')

def materials(request):
    return render(request, 'materials.html')
 
def gallery(request):
    return render(request, 'gallery.html')

def contact(request):
    return render(request, 'contact.html')


