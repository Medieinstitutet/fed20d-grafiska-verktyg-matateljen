<template>
  <div>
    <svg id="menu_icon_iPhone" xmlns="http://www.w3.org/2000/svg" width="39" height="26.897" viewBox="0 0 39 26.897">
      <g id="Layer_2" data-name="Layer 2">
        <g id="menu_icon">
          <path
            id="spoon"
            d="M51.594,3.421H29.363C28.6,1.445,26.122,0,23.183,0,19.635,0,16.75,
        2.1,16.75,4.7s2.885,4.7,6.433,4.7c2.939,0,5.417-1.447,6.18-3.421H51.594a1.283,1.283,0,1,0,0-2.565Z"
            transform="translate(-13.987)"
            fill="#ac6622"
          />
          <path
            id="knife"
            d="M37.643,79.962H0c0,2.834,2.3,3.812,5.131,3.812H21.625V82.521H37.639a1.283,1.283,0,1,0,0-2.565Z"
            transform="translate(0 -66.767)"
            fill="#ac6622"
          />
          <!-- eslint-disable -->
          <path id="fork" d="M51.725,133.285H29.644A1.862,1.862,0,0,0,27.8,132.01H24.048l-7.053.165a.165.165,0,0,0-.165.165v.015c0,.176,1.788.33,1.964.33l5.088.15c.365,0,.66.13.66.495v.165c0,.365-.3.495-.66.495l-6.316.328c-.135,0-.737.112-.737.247v.012c0,.134.6.244.737.247l6.316.33c.365,0,.66.13.66.495v.165c0,.365-.3.495-.66.495l-5.074.15c-.185.008-1.979.165-1.979.345a.165.165,0,0,0,.165.165l7.053.165H27.8a1.864,1.864,0,0,0,1.847-1.273H51.725a1.283,1.283,0,1,0,0-2.565Z" transform="translate(-14.054 -110.236)" fill="#ac6622"/>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  name: 'MenuIcon',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleKnifeFork() {
      if (this.open) {
        gsap.to('#knife', { rotate: 45, transformOrigin: 'center' });
        gsap.to('#fork', { rotate: 135, transformOrigin: '20px -3px' });
        gsap.to('#spoon', { opacity: 0, duration: 0.2 });
      } else {
        gsap.to('#knife', { rotate: 0, transformOrigin: 'center' });
        gsap.to('#fork', { rotate: 0, transformOrigin: '20px -3px' });
        gsap.to('#spoon', { opacity: 1, duration: 0.2 });
      }
    },
  },
  mounted() {
    this.$watch(
      () => this.$props.open,
      () => {
        this.toggleKnifeFork();
      }
    );
  },
};
</script>
