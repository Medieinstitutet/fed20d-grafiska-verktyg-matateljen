<template>
  <section class="hero">
    <img
      src="~@/assets/decor/matateljen_hero.webp"
      srcset="
        ~@/assets/decor/matateljen_hero_mobile.jpg  320w,
        ~@/assets/decor/matateljen_hero.webp        800w,
        ~@/assets/decor/matateljen_hero.webp       1200w
      "
      sizes="(min-width: 60rem) 80vw, (min-width: 40rem) 90vw, 100vw"
      alt="Charkbricka med två kaffemuggar"
    />
    <div class="gradient"></div>

    <div class="centered-content">
      <blockquote>
        <div class="blur-bg"></div>
        <h1>Hos oss får du närodlad mat i hjärtat av Gamla Enskede!</h1>
        <cite>Henrik Sauer, grundare</cite>
      </blockquote>

      <div class="buttons">
        <Button button-text="Boka bord" @click="openBookingForm" @keydown.enter="openBookingForm" />
        <Button button-text="Catering" button-style="secondary" />
      </div>
    </div>

    <transition name="fade-only">
      <!-- todo: could scale up -->
      <div class="booking-form" v-if="bookingFormOpen">
        <button class="close-booking-form" @click="closeBookingForm" @keydown.enter="closeBookingForm">
          <img src="~@/assets/icons/icon-close.svg" alt="Stäng" />
        </button>
        <div class="inner">
          <h3 class="font-moret">Boka bord</h3>
          <form>
            <fieldset>
              <label for="name">Ditt namn</label>
              <input type="text" id="name" placeholder="Hanna Sjö" />
            </fieldset>

            <fieldset>
              <label for="email">Mail</label>
              <input type="email" id="email" placeholder="hanna@example.com" />
            </fieldset>

            <fieldset>
              <label for="phone">Telefonnummer</label>
              <input type="tel" id="phone" placeholder="0707 22 95 41" />
            </fieldset>

            <input type="submit" value="Boka" />
          </form>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import Button from '@/components/atoms/Button/Button';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Hero',
  data() {
    return {
      bookingFormOpen: false,
    };
  },
  components: { Button },
  methods: {
    openBookingForm() {
      this.bookingFormOpen = !this.bookingFormOpen;

      if (this.bookingFormOpen) {
        this.$store.commit('disableBodyScroll');
      } else {
        this.$store.commit('enableBodyScroll');
      }
    },
    closeBookingForm() {
      this.bookingFormOpen = false;
      this.$store.commit('enableBodyScroll');
    },
  },
};
</script>

<style lang="scss">
@import 'hero';
</style>
