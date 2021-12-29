<template>
  <Header />
  <main ref="main">
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
import Header from '@/components/organisms/Header/Header';

export default {
  components: { Header, Footer, CookieBanner },
  mounted() {
    this.$refs.main.addEventListener('click', () => {
      this.$store.commit('closePrimaryMenu');
    });
  },
};
</script>
