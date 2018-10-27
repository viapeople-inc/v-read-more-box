<template>
  <div class="text-left output" :style="getStyle" @click.stop="expand">
    <div class='content'>
      <slot></slot>
    </div>
    <div class='expandControl readControlWrapper' v-if="isOverFlow" v-show="!expanded"  :style="getExpanderStyle">
      <slot name="readMore">
        <span class='readMore readControl'>{{readMore}}</span>
      </slot>
    </div>
    <div class='contractControl readControlWrapper' v-if="isOverFlow" v-show="expanded" @click.stop="contract">
      <slot name="readLess">
        <span class='readLess readControl'>{{readLess}}</span>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    maxHeight: { type: [Number, String], default: 200 },
    bgColor: { type: String, default: "#FFF" },
    readMore: { type: String, default: "Read More\u2026" },
    readLess: { type: String, default: "Read Less\u2026" }
  },
  data() {
    return {
      checkForOverflow: false,
      expanded: false
    };
  },
  computed: {
    getStyle() {
      let styleObject = {
        "max-height": parseInt(this.maxHeight) + 20 + "px",
        "overflow-y": "hidden",
        cursor: this.isOverFlow ? "pointer" : "auto",
        position: "relative"
      };

      return this.expanded ? {} : styleObject;
    },
    getCleanHex() {
      let hex = this.bgColor;
      if (this.bgColor.startsWith("#"))
        //strip any starting #
        hex = hex.substring(1);
      if (hex.length === 3)
        //if using the shorthand method, duplicate
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      return hex;
    },
    getExpanderStyle() {
      let rgb = this.hexToRGB(this.getCleanHex);
      return {
        top: parseInt(this.maxHeight, 10) - 20 + "px",
        background:
          "linear-gradient(to bottom, rgba(" +
          rgb +
          ",0) 0%,rgba(" +
          rgb +
          ",1) 25%,rgba(" +
          rgb +
          ",1) 50%)"
      };
    },
    isOverFlow() {
      if (!this.checkForOverflow) return false;
      return this.$el.scrollHeight > this.$el.clientHeight;
    }
  },
  methods: {
    expand() {
      if (!this.expanded) this.expanded = true;
    },
    contract() {
      if (this.expanded) this.expanded = false;
    },
    hexToRGB(hex) {
      let r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);

      return r + ", " + g + ", " + b;
    }
  },
  mounted() {
    this.checkForOverflow = true;
  }
};
</script>

<style scoped>
.readControlWrapper {
  text-align: center;
}

.readControl {
  display: inline-block;
  padding: 0.25em 0.5em;
  border-radius: 0.25rem;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  background-color: #ddd;
  color: black;
  z-index: 10;
}

.readMore {
  margin-top: 14px;
}

.contractControl,
.expandControl {
  width: 100%;
  height: 40px;
  cursor: pointer;
}

.expandControl {
  position: absolute;
}
</style>
