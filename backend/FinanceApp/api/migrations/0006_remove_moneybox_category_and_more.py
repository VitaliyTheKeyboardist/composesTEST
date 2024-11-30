# Generated by Django 4.1.3 on 2023-05-04 05:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_categories_category_type'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='moneybox',
            name='category',
        ),
        migrations.AlterField(
            model_name='categories',
            name='category_type',
            field=models.CharField(choices=[('constant', 'Постоянные'), ('once', 'Разовые')], default='constant', max_length=10),
        ),
    ]
