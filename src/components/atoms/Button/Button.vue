<template>
  <button :class="buttonCSSClass">
    {{ buttonText }}
  </button>
</template>

<style lang="scss">
@import 'button';
</style>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Button',
  computed: {
    buttonCSSClass() {
      return `btn-${this.buttonStyle}`;
    },
  },
  props: {
    buttonText: {
      type: String,
      default: '',
    },
    buttonStyle: {
      type: String,
      default: 'primary', // TODO - Not working
      validator(value) {
        return ['primary', 'secondary', 'contrast', 'disabled'].includes(value);
      },
    },
  },
};
</script>
