# Generated by Django 5.1.3 on 2024-12-02 21:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bins', '0009_route_instructions'),
    ]

    operations = [
        migrations.AddField(
            model_name='route',
            name='distance',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]