from django.db import models

# Create your models here.
class Bin(models.Model):
    fill_level = models.FloatField(default=0)
    location = models.JSONField()
    street = models.ForeignKey('Street', related_name='bins', on_delete=models.CASCADE)

    def __str__(self):
        return f"Bin #{self.id} | ${self.fill_level * 100}% full"


    @classmethod
    def create_bin(self, location, street, zone):
        zone = Zone.objects.get_or_create(zone=zone)[0]
        zone.save()
        street = Street.objects.get_or_create(street=street, zone=zone)[0]
        bin = Bin(location=location, street=street)
        bin.save()
        return bin

    def serialize(self):
        return {
            'id': self.id,
            'location': self.location,
            'street': self.street.street,
            'fillLevel': self.fill_level,
            'zone': self.street.zone.serialize() if self.street.zone else None,
        }


class Zone(models.Model):
    zone = models.CharField(max_length=255)

    
    def serialize(self):
        return {
            'zone': self.zone
        }

class Street(models.Model):
    street = models.CharField(max_length=255)
    zone = models.ForeignKey(
        Zone, related_name='streets', 
        on_delete=models.CASCADE, 
        blank=True, 
        null=True
    )


class Route(models.Model):
    bins = models.ManyToManyField(Bin, related_name='routes', symmetrical=False)
    starting_point = models.JSONField()
    instructions = models.JSONField()
    duration = models.IntegerField()
    distance = models.IntegerField()
    date = models.DateTimeField(auto_now=True)
    day_of_the_week = models.IntegerField()


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
            'bins': [bin.serialize() for bin in self.bins.all()],
            'startingPoint': self.starting_point,
            'instructions': self.instructions,
            'duration': self.duration,
            'distance': self.distance,
            'date': self.date.strftime("%d/%m/%Y"),
        }