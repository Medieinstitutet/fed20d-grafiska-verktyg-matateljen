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
@import '_cookie_banner.scss';
</style>

<script>
import Button from '@/components/Button/Button';

export default {
  components: { Button },
};
</script>
