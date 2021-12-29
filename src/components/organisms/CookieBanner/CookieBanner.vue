<template>
  <section class="cookie-banner" v-if="!bannerDismissed">
    <div class="disclaimer-text">
      <h5>Cookies</h5>
      <p>
        Vi använder cookies på den här sidan för att ge dig en bättre upplevelse. Vissa behövs för att sidan ska fungera
        korrekt men andra kan du välja att godkänna.
      </p>
    </div>
    <div class="buttons">
      <Button button-text="Acceptera alla" button-style="contrast" @click="hideBanner" @keydown.enter="hideBanner" />
      <Button
        button-text="Acceptera endast nödvändiga"
        button-style="secondary"
        @click="hideBanner"
        @keydown.enter="hideBanner"
      />
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
import Button from '@/components/atoms/Button/Button.vue';

export default {
  data() {
    return {
      bannerDismissed: false,
    };
  },
  components: { Button },
  methods: {
    hideBanner() {
      this.bannerDismissed = true;
    },
  },
};
</script>
