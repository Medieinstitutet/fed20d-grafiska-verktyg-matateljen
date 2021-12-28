<template>
  <header>
    <div class="left">
      <img src="~@/assets/icons/matateljen-symbol.svg" alt="Illustration på vitt klassicism-hus" />
      <span>Matateljen</span>
    </div>
    <div class="right">
      <button aria-haspopup="true">
        <img src="~@/assets/icons/menu-symbol.svg" alt="Gaffel, kniv och sked horisontellt" />
      </button>
      <!-- todo:
      - Add ref to opened menu: aria-controls="IDREF"
      - Add this attr. when menu is open to the button: aria-expanded="true"
      -->
    </div>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
};
</script>

<style lang="scss">
@import 'header';
</style>
