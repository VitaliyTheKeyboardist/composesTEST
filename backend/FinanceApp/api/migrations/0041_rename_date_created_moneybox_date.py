# Generated by Django 4.1.3 on 2023-05-18 12:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0040_remove_moneybox_is_hidden'),
    ]

    operations = [
        migrations.RenameField(
            model_name='moneybox',
            old_name='date_created',
            new_name='date',
        ),
    ]
