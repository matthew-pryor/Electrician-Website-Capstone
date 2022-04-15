# Generated by Django 3.2.8 on 2022-04-15 16:43

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='UserType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_type', models.CharField(choices=[('Employee', 'EMPLOYEE'), ('Customer', 'CUSTOMER')], default='Employee', max_length=20)),
                ('image', models.CharField(max_length=999)),
                ('name', models.CharField(max_length=999)),
                ('city', models.CharField(max_length=255)),
                ('state', models.CharField(max_length=20)),
                ('zip_code', models.CharField(max_length=255)),
                ('phone_number', models.CharField(max_length=255)),
                ('email_address', models.CharField(max_length=255)),
                ('linkedin', models.CharField(max_length=999)),
                ('about_me', models.CharField(max_length=1000)),
                ('services', models.CharField(max_length=1000)),
                ('rates', models.CharField(max_length=1000)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
