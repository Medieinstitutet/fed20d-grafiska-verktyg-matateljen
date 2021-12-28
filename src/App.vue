<template>
  <header>logga + meny</header>
  <main>
    <router-view />
  </main>
  <footer>footer-elementet</footer>
  <CookieBanner />
  <!--  <nav>-->
  <!--    <router-link to="/">Home</router-link> |-->
  <!--    <router-link to="/about">About</router-link>-->
  <!--  </nav>-->
  <!--  <router-view />-->
</template>

<script>
import CookieBanner from '@/components/CookieBanner/CookieBanner.vue';

export default {
  components: { CookieBanner },
};
</script>
