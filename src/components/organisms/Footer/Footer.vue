<template>
  <footer>
    <section>
      <h6>Öppettider</h6>
      tis-fre: kl 11.30 - 22.00<br />
      lör: 13.00 - 22.00
    </section>

    <section>
      <h6>Hitta hit</h6>
      Stora Gungans Väg 7<br />
      122 31 Enskede, Stockholm
    </section>

    <section class="contact">
      <h6>Kontakt</h6>
      <a href="tel:+46840919810">08-40 91 98 10</a><br />
      <a href="mailto:kontakt@matateljen.se">kontakt@matateljen.se</a>
    </section>

    <section class="some-icons">
      <div>
        <img src="~@/assets/icons/icon-some-facebook.svg" alt="Facebooks logotyp" width="45" height="45" />
        <img src="~@/assets/icons/icon-some-instagram.svg" alt="Instagrams logotyp" width="45" height="45" />
      </div>
    </section>
  </footer>
</template>

<style lang="scss">
@import 'footer';
</style>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer',
};
</script>
