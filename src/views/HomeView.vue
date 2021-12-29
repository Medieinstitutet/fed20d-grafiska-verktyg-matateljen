<template>
  <section class="view-home">
    <Hero />
    <section class="food-menu">
      <div class="wave">
        <img src="~@/assets/decor/wave.svg" width="436" height="58" alt="" />
      </div>
      <div class="food-menu-content">
        <h2>Vår meny</h2>
        <div class="inner">
          <section>
            <h3>Smårätter</h3>
            <ul>
              <li>
                <h4>I säsong</h4>
                <p>
                  <span>Brysselkål, dragon&shy;pistou & pecorino</span>
                  <span class="price">115 kr</span>
                </p>
              </li>
              <li>
                <h4>Ost</h4>
                <p>
                  <span>Burrata, fermenterad rädisa & frömix</span>
                  <span class="price">135 kr</span>
                </p>
              </li>
              <li>
                <h4>Fisk</h4>
                <p>
                  <span>Regnbågsrom & lagerblads&shy;emulsion</span>
                  <span class="price">155 kr</span>
                </p>
              </li>
            </ul>
          </section>
          <section>
            <h3>Dessert</h3>
            <ul>
              <li>
                <h4>Mousse</h4>
                <p>
                  <span>Vispad saffransmousse, rostad vit choklad & granité på lingon</span>
                  <span class="price">125 kr</span>
                </p>
              </li>
              <li>
                <h4>Mormors klassiker</h4>
                <p>
                  <span>Varma hjortron, fikonblads&shy;färskost, kokos & mandel</span>
                  <span class="price">135 kr</span>
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  </section>
</template>

<style lang="scss">
@import '~@/styles/views/home_view.scss';
</style>
<script>
import Hero from '@/components/organisms/Hero/Hero';

export default {
  components: { Hero },
};
</script>
