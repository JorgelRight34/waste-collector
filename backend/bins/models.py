from django.db import models

# Create your models here.
class Bin(models.Model):
    fill_level = models.FloatField(default=0)
    location = models.JSONField()
    street = models.ForeignKey('Street', related_name='bins', on_delete=models.CASCADE)

    def __str__(self):
        return f"Bin #{self.id} | ${self.fill_level * 100}% full"


    @classmethod
    def create_bin(self, location, street):
        street = Street.objects.get_or_create(street=street)
        bin = Bin(location=location, street=street)
        bin.save()
        return bin

    def serialize(self):
        return {
            'id': self.id,
            'location': self.location,
            'street': self.street.street,
            'fillLevel': self.fill_level
        }


class Street(models.Model):
    street = models.CharField(max_length=255)


class Route(models.Model):
    bins = models.JSONField()
    starting_point = models.JSONField()
    duration = models.IntegerField()
    date = models.DateTimeField(auto_now=True)


    def __str__(self):
        return f"Route #{self.id} at {self.date}" 


    @classmethod
    def create_route(self, bins, starting_point):
        route = Route(bins=bins, starting_point=starting_point)
        route.save()
        return route


    def serialize(self):
        return {
            'id': self.id,
            'bins': self.bins,
            'starting_point': self.starting_point
        }