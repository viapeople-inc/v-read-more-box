<template>
  <div class="text-left output" :style="getStyle" @click.stop="expand">
    <div class="content">
      <slot></slot>
    </div>
    <div
      class="expandControl readControlWrapper"
      v-if="isOverFlow"
      v-show="!expanded"
      :style="getExpanderStyle"
    >
      <slot name="readMore">
        <span class="readMore readControl">{{readMore}}</span>
      </slot>
    </div>
    <div
      class="contractControl readControlWrapper"
      v-if="isOverFlow"
      v-show="expanded"
      @click.stop="contract"
    >
      <slot name="readLess">
        <span class="readLess readControl">{{readLess}}</span>
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
    readLess: { type: String, default: "Read Less\u2026" },
    horizontal: { type: Boolean, default: false }
  },
  data() {
    return {
      checkForOverflow: false,
      expanded: false
    };
  },
  updated() {
    //handle slot content changes
    this.checkForOverflow = true;
  },
  computed: {
    getStyle() {
      var maxHeight = parseInt(this.maxHeight);
      if (!this.horizontal) maxHeight += 20;

      let styleObject = {
        //height: maxHeight + "px",
        //transition: "height 1s",
        "max-height": maxHeight + "px",
        "overflow-y": "hidden",
        cursor: this.isOverFlow ? "pointer" : "auto",
        position: "relative"
      };

      return this.expanded ? {} : styleObject;
      /*//start of transition code
      return this.expanded
        ? {
            height: this.$el.scrollHeight + 20 + "px",
            transition: "height 1s"
          }
        : styleObject;
      */
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
      return this.horizontal
        ? this.getExpanderStyle_horizontal
        : this.getExpanderStyle_vertical;
    },
    getExpanderStyle_horizontal() {
      let rgb = this.hexToRGB(this.getCleanHex);
      return {
        bottom: "0px",
        right: "3px",
        "text-align": "right",
        "padding-left": "30px",
        display: "inline-block",
        background:
          "linear-gradient(to right, rgba(" +
          rgb +
          ",0) 0,rgba(" +
          rgb +
          ",1) 15px,rgba(" +
          rgb +
          ",1) 30px)"
      };
    },
    getExpanderStyle_vertical() {
      let rgb = this.hexToRGB(this.getCleanHex);
      return {
        top: parseInt(this.maxHeight, 10) - 20 + "px",
        width: "100%",
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
      if (!this.expanded) {
        this.expanded = true;
        this.$emit("v-read-more-box-expand", {
          event: "expand",
          expanded: true
        });
        this.$emit("v-read-more-box-change", {
          event: "change",
          expanded: true
        });
      }
    },
    contract() {
      if (this.expanded) {
        this.expanded = false;
        this.$emit("v-read-more-box-contract", {
          event: "contract",
          expanded: false
        });
        this.$emit("v-read-more-box-change", {
          event: "change",
          expanded: false
        });
      }
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
  height: 40px;
  cursor: pointer;
}

.expandControl {
  position: absolute;
}
</style>
