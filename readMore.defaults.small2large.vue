<template>
  <div class="wrapper">
    <v-read-more-box>
      <div v-html="additionalHtml"></div>
    </v-read-more-box>
  </div>
</template>

<script>
import vReadMoreBox from "./src/v-read-more-box.vue";

export default {
  // eslint-disable-next-line
  components: { vReadMoreBox },
  data() {
    return {
      extraRows: 1
    };
  },
  computed: {
    additionalHtml() {
      let str = "<ol>";
      for (let i = 0; i < this.extraRows; i++)
        str += "<li>Item #" + (i + 1) + "</li>";
      str += "</ol>";
      return str;
    }
  },
  methods: {
    increaseList() {
      if (this.extraRows == 15) this.extraRows = 1;
      else this.extraRows++;
    }
  },
  mounted() {
    setInterval(() => {
      this.increaseList();
    }, 500);
  }
};
</script>

<style scoped>
.wrapper {
  border: 1px dotted #ccc;
}
</style>
