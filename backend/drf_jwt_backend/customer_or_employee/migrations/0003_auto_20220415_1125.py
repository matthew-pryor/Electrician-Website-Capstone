# Generated by Django 3.2.8 on 2022-04-15 16:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customer_or_employee', '0002_usertype_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='usertype',
            name='about_me',
            field=models.CharField(default='I am an electrician! Please hire me for all of your ceiling fan installation needs!', max_length=5000),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='usertype',
            name='city',
            field=models.CharField(default='St. Louis', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='usertype',
            name='email_address',
            field=models.CharField(default='pryor.matthew.a@gmail.com', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='usertype',
            name='image',
            field=models.CharField(default='https://image.shutterstock.com/image-photo/smiling-handsome-electrician-repairing-electrical-260nw-1192486423.jpg', max_length=999),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='usertype',
            name='linkedin',
            field=models.CharField(default='https://www.linkedin.com/in/matthew-pryor-565a651a1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BOhLb%2F%2FP5SqCZy6pE1c7sbA%3D%3D', max_length=999),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='usertype',
            name='name',
            field=models.CharField(default='Jacob Bautista', max_length=999),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='usertype',
            name='phone_number',
            field=models.CharField(default='123-456-7899', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='usertype',
            name='rates',
            field=models.CharField(default='Ceiling Fan Installation: $100', max_length=5000),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='usertype',
            name='services',
            field=models.CharField(default='Ceiling Fan Installation', max_length=5000),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='usertype',
            name='state',
            field=models.CharField(default='MO', max_length=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='usertype',
            name='zip_code',
            field=models.CharField(default='63118', max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='usertype',
            name='user_type',
            field=models.CharField(choices=[('Employee', 'EMPLOYEE'), ('Customer', 'CUSTOMER')], default='Employee', max_length=20),
        ),
    ]
