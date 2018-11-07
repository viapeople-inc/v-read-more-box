<template>
    <div  class="wrapper">
        <v-read-more-box max-height="215" bg-color="#000" read-more="Show More!" read-less="Show Less!" @v-read-more-box-change="logEvent($event)" @v-read-more-box-expand="logEvent($event)" @v-read-more-box-contract="logEvent($event)">
            <button slot="readMore">Custom read more slot!</button>
            <template slot="readLess">
                <div>&hellip; Show Less</div>
            </template>
            <h1>HTML Ipsum Presents</h1>

            <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum
                tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em>		Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,
                <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum
                orci, sagittis tempus lacus enim ac dui.
                <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.Aenean fermentum, elit eget tincidunt condimentum, eros ipsum
                rutrum orci, sagittis tempus lacus enim ac dui.
                <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.Aenean fermentum, elit eget tincidunt condimentum, eros ipsum
                rutrum orci, sagittis tempus lacus enim ac dui.
                <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.Aenean fermentum, elit eget tincidunt condimentum, eros ipsum
                rutrum orci, sagittis tempus lacus enim ac dui.
                <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

            <h2>Header Level 2</h2>

            <ol>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                <li>Aliquam tincidunt mauris eu risus.</li>
            </ol>

            <blockquote>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget
                    ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus
                    turpis elit sit amet quam. Vivamus pretium ornare est.</p>
            </blockquote>

            <h3>Header Level 3</h3>

            <ul>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
        </v-read-more-box>
    </div>
</template>

<script>
import vReadMoreBox from "./src/v-read-more-box.vue";

export default {
  // eslint-disable-next-line
  components: { vReadMoreBox },
  methods: {
    logEvent(evt) {
      // eslint-disable-next-line
      console.log(evt);
    },
    logEventOuter(evt) {
      // eslint-disable-next-line
      console.log(evt);
    }
  }
};
</script>

<style scoped>
.wrapper {
  background-color: black;
  color: white;
}
</style>
