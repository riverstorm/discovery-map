import json, requests
from django.shortcuts import render
from django.core import serializers
from main.models import Category, Location
from django.http import HttpResponse, Http404, JsonResponse
from django.http import HttpResponsePermanentRedirect, HttpResponseRedirect
from django.conf import settings


# Renders the index.html file and hands over the Google Maps Key
def index(request):

    # Return all locations as querysets
    return render(request, 'main/index.html', {'maps_key':settings.MAPS_KEY})


# Returns all locations from the database as JSON to be used as API
def locations(request):

    # Get all locations from the local database and serialize as JSON
    locations = serializers.serialize('json', Location.objects.all())

    # Return the JSON
    return HttpResponse(locations, content_type='application/json')


# Returns location details from the Foursquare API as JSON to be used as API
def detail(request, id):

    # Get requested location by id from the local database
    item = Location.objects.filter(id=id).get()

    # Define payload for GET request to foursquare API
    payload = {
        'client_id': settings.FSQ_ID,
        'client_secret': settings.FSQ_SECRET,
        'v': '20180827'
    }
    # Execute GET request
    r = requests.get('https://api.foursquare.com/v2/venues/' + 
        item.foursquare_id + '?locale=en', params=payload)
    # Catch JSON from request
    response = r.json()

    # Return response in JSON format
    return JsonResponse(response, safe=False)