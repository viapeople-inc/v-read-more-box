<template>
  <div>
    <h1>Defaults:</h1>
    <h2>One Line</h2>
    <v-read-more-box-one-line/>
    <h2>Small, updates to large</h2>
    <v-read-more-box-defaults-small-large/>
    <h2>Small</h2>
    <v-read-more-box-defaults-small/>
    <h2>Large</h2>
    <v-read-more-box-defaults/>
    <h1>Custom Options:</h1>
    <v-read-more-box-custom/>
  </div>
</template>

<script>
import vReadMoreBoxOneLine from "./readMore.oneLine.vue";
import vReadMoreBoxDefaultsSmall from "./readMore.defaults.small.vue";
import vReadMoreBoxDefaultsSmallLarge from "./readMore.defaults.small2large.vue";
import vReadMoreBoxDefaults from "./readMore.defaults.vue";
import vReadMoreBoxCustom from "./readMore.custom.vue";

/* eslint-disable */
export default {
  components: {
    vReadMoreBoxDefaults,
    vReadMoreBoxCustom,
    vReadMoreBoxDefaultsSmall,
    vReadMoreBoxDefaultsSmallLarge,
    vReadMoreBoxOneLine
  }
};
</script>

<style>
</style>
