from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model

User = get_user_model()

@receiver(pre_save, sender=User)
def validate_email(sender, instance, **kwargs):
    if instance.pk:  # Only check for existing users
        try:
            orig_user = User.objects.get(pk=instance.pk)
            if orig_user.email != instance.email:
                raise ValueError("Email cannot be changed after registration")
        except User.DoesNotExist:
            pass