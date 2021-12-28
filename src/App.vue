<template>
  <header>logga + meny</header>
  <main>
    <router-view />
  </main>
  <Footer />
  <CookieBanner />
  <!--  <nav>-->
  <!--    <router-link to="/">Home</router-link> |-->
  <!--    <router-link to="/about">About</router-link>-->
  <!--  </nav>-->
  <!--  <router-view />-->
</template>

<script>
import CookieBanner from '@/components/organisms/CookieBanner/CookieBanner.vue';
import Footer from '@/components/organisms/Footer/Footer';

export default {
  components: { Footer, CookieBanner },
};
</script>
