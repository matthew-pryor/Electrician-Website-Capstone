# Generated by Django 3.2.8 on 2022-04-13 18:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appointments', '0003_auto_20220413_0023'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='end',
            field=models.DateTimeField(default='2022.04.13 13:42:48'),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='start',
            field=models.DateTimeField(default='2022.04.13 13:42:48'),
        ),
    ]
