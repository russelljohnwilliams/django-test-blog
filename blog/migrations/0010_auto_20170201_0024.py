# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-01 00:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0009_auto_20170201_0020'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(blank=True, upload_to='static/blog/images/'),
        ),
    ]
