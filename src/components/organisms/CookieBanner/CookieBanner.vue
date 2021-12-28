<template>
  <section class="cookie-banner">
    <div class="disclaimer-text">
      <h5>Cookies</h5>
      <p>
        Vi använder cookies på den här sidan för att ge dig en bättre upplevelse. Vissa behövs för att sidan ska fungera
        korrekt men andra kan du välja att godkänna.
      </p>
    </div>
    <div class="buttons">
      <Button button-text="Acceptera alla" button-style="contrast" />
      <Button button-text="Acceptera endast nödvändiga" button-style="secondary" />
    </div>

    <div class="settings">
      <p>Cookies-inställningar</p>
    </div>
  </section>
</template>

<style lang="scss">
@import 'cookie_banner';
</style>

<script>
// TODO: Interactivity
import Button from '@/components/atoms/Button/Button.vue';

export default {
  components: { Button },
};
</script>
