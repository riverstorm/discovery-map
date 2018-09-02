from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('locations', views.locations, name='locations'),
    path('detail/<int:id>', views.detail, name='detail')
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
