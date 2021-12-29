<template>
  <header>
    <div class="left">
      <img src="~@/assets/icons/matateljen-symbol.svg" alt="Illustration på vitt klassicism-hus" />
      <span>Matateljen</span>
    </div>
    <div class="right">
      <button
        aria-haspopup="true"
        @click="toggleMenu"
        @keydown.enter="toggleMenu"
        :aria-expanded="menuOpen"
        aria-controls="primary-menu"
        aria-label="Öppna och stäng menyn"
      >
        <MenuIcon :open="menuOpen" />
      </button>
    </div>
    <transition name="fade">
      <!-- todo: keep menu for SEO, hide with CSS instead of if -->
      <nav v-if="menuOpen" class="primary-menu" :class="{ open: menuOpen }" id="primary-menu">
        <ul>
          <li>Menu</li>
          <li>Catering</li>
          <li>Deli</li>
          <li>Hitta hit</li>
          <li>Öppettider</li>
          <li>Kontakt</li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script>
import MenuIcon from '@/components/atoms/MenuIcon/MenuIcon';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  components: { MenuIcon },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      // TODO: Also close menu when clicking outside menu block
      this.menuOpen = !this.menuOpen;

      if (this.menuOpen) {
        this.$store.commit('disableBodyScroll');
      } else {
        this.$store.commit('enableBodyScroll');
      }
    },
  },
};
</script>

<style lang="scss">
@import 'header';
</style>
