# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-31 22:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_auto_20170131_2244'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(blank=True, upload_to='static/blog/images/', verbose_name='Image'),
        ),
    ]