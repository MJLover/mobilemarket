# Generated by Django 3.1.3 on 2021-01-18 01:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('market', '0013_mobile_colors'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='comment',
            name='title',
        ),
    ]
