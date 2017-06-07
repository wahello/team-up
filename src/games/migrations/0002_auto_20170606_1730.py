# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-06 17:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('games', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='leagueoflegendsaccount',
            name='division',
            field=models.PositiveIntegerField(choices=[(1, 'I'), (2, 'II'), (3, 'III'), (4, 'IV'), (5, 'V')], verbose_name="User's division"),
        ),
        migrations.AlterField(
            model_name='leagueoflegendsaccount',
            name='league',
            field=models.PositiveIntegerField(choices=[(1, 'Bronze'), (2, 'Silver'), (3, 'Gold'), (4, 'Platinum'), (5, 'Diamond'), (6, 'Master'), (7, 'Challenger')], verbose_name="User's league"),
        ),
    ]
