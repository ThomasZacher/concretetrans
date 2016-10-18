from django.core.mail import send_mail
from django.template import RequestContext
from django.shortcuts import redirect, render, render_to_response

def index(request):
    context = RequestContext(request)
    return render_to_response('website/index.html', context)

def about(request):
    context = RequestContext(request)
    return render_to_response('website/about.html', context)

def contact(request):
    if request.method == 'POST':
        send_mail(
            'concretetrans Email',
            request.POST['message'],
            request.POST['email'],
            ['mailUser@host.com'],
            fail_silently=False)
        return redirect('index')
    return render(request, 'website/contact.html')