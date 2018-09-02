from django.db import models


class Category(models.Model):
    """
    Represents the categories to separate locations
    """
    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name


class Location(models.Model):
    """
    Represents the locations
    """
    name = models.CharField(max_length=250)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    foursquare_id = models.CharField(max_length=250)
    position_lat = models.DecimalField(max_digits=19, decimal_places=10)
    position_lng = models.DecimalField(max_digits=19, decimal_places=10)

    def __str__(self):
        return self.name
