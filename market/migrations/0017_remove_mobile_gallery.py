# Generated by Django 3.1.3 on 2021-01-19 14:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('market', '0016_auto_20210118_1329'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='mobile',
            name='gallery',
        ),
    ]
