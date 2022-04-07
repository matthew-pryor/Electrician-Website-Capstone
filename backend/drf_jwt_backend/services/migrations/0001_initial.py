# Generated by Django 3.2.8 on 2022-04-07 20:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('service_type', models.CharField(choices=[('Emergency', 'EMERGENCY'), ('Maintenance', 'MAINTENANCE'), ('Wiring', 'WIRING'), ('Installation', 'INSTALLATION'), ('Inspection', 'INSPECTION'), ('Quote', 'QUOTE')], default='Quote', max_length=20)),
            ],
        ),
    ]