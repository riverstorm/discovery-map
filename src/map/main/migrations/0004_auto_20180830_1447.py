# Generated by Django 2.0.7 on 2018-08-30 14:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_auto_20180830_1339'),
    ]

    operations = [
        migrations.AlterField(
            model_name='location',
            name='position_lat',
            field=models.DecimalField(decimal_places=10, max_digits=19),
        ),
        migrations.AlterField(
            model_name='location',
            name='position_lng',
            field=models.DecimalField(decimal_places=10, max_digits=19),
        ),
    ]
