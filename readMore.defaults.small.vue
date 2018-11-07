<template>
    <div class="wrapper">
         <v-read-more-box>
            <h1>HTML Ipsum Presents</h1>
              <h2>Header Level 2</h2>

            <ol>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                <li>Aliquam tincidunt mauris eu risus.</li>
            </ol>
        </v-read-more-box>
    </div>
</template>

<script>
import vReadMoreBox from "./src/v-read-more-box.vue";

export default {
  // eslint-disable-next-line
  components: { vReadMoreBox }
};
</script>

<style scoped>
.wrapper {
  border: 1px dotted #ccc;
}
</style>
