# Discovery Map

<b>This Django application shows a simple website with a map and discovery points of a location. The default location is Cologne.</b><br>
### Features
* A map with location markers by the Google Maps Javascript API
* Location details retrieved by the Foursquare API
* Simple creation of locations over the Django ORM in the admin panel
* User friendly MVVM concept with Knockout.js

### An Udacity Project
The project is part of my Udacity course.

## Installation
### Requirements
* A Windows, Mac or Linux machine with Python 3. A vagrant file is included.
* [Flask-SQLAlchemy](http://flask-sqlalchemy.pocoo.org) and [Django](https://www.djangoproject.com/)(Built with 2.0.7).
* A Google Maps API Key - [How To](https://developers.google.com/maps/documentation/javascript/get-api-key)
* A Foursquare API ID and Secret - [Sign up here](https://developer.foursquare.com/)

### Instruction to start the application in development mode by using the provided virtual machine
1. Start and enter the virtual machine by running `vagrant up` in the folder containing the vagrant file. Then `vagrant ssh` and `cd /vagrant`.
1. Run `sudo apt-get update` and install pip3 with `sudo apt-get install python3-pip`
1. Run `pip3 install -r requirements.txt` to install the libraries.
1. Open the settings.py file (/src/map/map) and include your API Key, ID and Secret
1. Navigate to the folder including the manage.py file (cd src/map)
1. Run the command `python3 manage.py runserver 0.0.0.0:8000`
1. Visit the app at [localhost:8080](http://localhost:8080) in your browser.

## Additional informations
### Admin panel default access
* Path: /admin
* Username: admin
* Password: Testtest123!
### Database
* SQLite is used as database and includes default data.

### Usage of this application in production
For production usage a few setting changes are required. Get some help in the official [Django documentation](https://docs.djangoproject.com/en/2.1/howto/deployment/checklist/).
