<template>
  <section class="hero">
    <img
      src="~@/assets/decor/matateljen_hero.jpg"
      srcset="
        ~@/assets/decor/matateljen_hero_mobile.jpg  320w,
        ~@/assets/decor/matateljen_hero.jpg         800w,
        ~@/assets/decor/matateljen_hero.jpg        1200w
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
        <!-- todo: popup -->
        <Button button-text="Boka bord" />
        <Button button-text="Catering" button-style="secondary" />
      </div>
    </div>
  </section>
</template>

<script>
import Button from '@/components/atoms/Button/Button';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Hero',
  components: { Button },
};
</script>

<style lang="scss">
@import 'hero';
</style>
