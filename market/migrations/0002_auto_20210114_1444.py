# Generated by Django 3.1.3 on 2021-01-14 11:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('market', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mobile',
            name='slug',
            field=models.SlugField(max_length=100, unique=True, verbose_name='شناسه'),
        ),
    ]
