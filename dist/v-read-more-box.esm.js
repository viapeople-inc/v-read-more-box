(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .readControlWrapper[data-v-7d5a1206] { text-align: center; } .readControl[data-v-7d5a1206] { display: inline-block; padding: 0.25em 0.5em; border-radius: 0.25rem; line-height: 1; text-align: center; white-space: nowrap; vertical-align: baseline; background-color: #ddd; color: black; z-index: 10; } .readMore[data-v-7d5a1206] { margin-top: 14px; } .contractControl[data-v-7d5a1206], .expandControl[data-v-7d5a1206] { height: 40px; cursor: pointer; } .expandControl[data-v-7d5a1206] { position: absolute; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();




























var component = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-left output",style:(_vm.getStyle),on:{"click":function($event){$event.stopPropagation();return _vm.expand($event)}}},[_c('div',{staticClass:"content"},[_vm._t("default")],2),_vm._v(" "),(_vm.isOverFlow)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.expanded),expression:"!expanded"}],staticClass:"expandControl readControlWrapper",style:(_vm.getExpanderStyle)},[_vm._t("readMore",[_c('span',{staticClass:"readMore readControl"},[_vm._v(_vm._s(_vm.readMore))])])],2):_vm._e(),_vm._v(" "),(_vm.isOverFlow)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.expanded),expression:"expanded"}],staticClass:"contractControl readControlWrapper",on:{"click":function($event){$event.stopPropagation();return _vm.contract($event)}}},[_vm._t("readLess",[_c('span',{staticClass:"readLess readControl"},[_vm._v(_vm._s(_vm.readLess))])])],2):_vm._e()])},staticRenderFns: [],_scopeId: 'data-v-7d5a1206',
  props: {
    maxHeight: { type: [Number, String], default: 200 },
    bgColor: { type: String, default: "#FFF" },
    readMore: { type: String, default: "Read More\u2026" },
    readLess: { type: String, default: "Read Less\u2026" },
    horizontal: { type: Boolean, default: false }
  },
  data: function data() {
    return {
      checkForOverflow: false,
      expanded: false,
      update: 0
    };
  },
  updated: function updated() {
    //handle slot content changes
    //console.log("updated");
    if (this.update == 1) { this.update++; }
  },
  computed: {
    getStyle: function getStyle() {
      var maxHeight = parseInt(this.maxHeight);
      if (!this.horizontal) { maxHeight += 20; }

      var styleObject = {
        //height: maxHeight + "px",
        //transition: "height 1s",
        "max-height": maxHeight + "px",
        "overflow-y": "hidden",
        cursor: this.isOverFlow ? "pointer" : "auto",
        position: "relative",
        update: this.update
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
    getCleanHex: function getCleanHex() {
      var hex = this.bgColor;
      if (this.bgColor.startsWith("#"))
        //strip any starting #
        { hex = hex.substring(1); }
      if (hex.length === 3)
        //if using the shorthand method, duplicate
        { hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]; }
      return hex;
    },
    getExpanderStyle: function getExpanderStyle() {
      return this.horizontal
        ? this.getExpanderStyle_horizontal
        : this.getExpanderStyle_vertical;
    },
    getExpanderStyle_horizontal: function getExpanderStyle_horizontal() {
      var rgb = this.hexToRGB(this.getCleanHex);
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
    getExpanderStyle_vertical: function getExpanderStyle_vertical() {
      var rgb = this.hexToRGB(this.getCleanHex);
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
    isOverFlow: function isOverFlow() {
      if (!this.checkForOverflow) { return false; }
      return this.$el.scrollHeight > this.$el.clientHeight;
    }
  },
  methods: {
    expand: function expand() {
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
    contract: function contract() {
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
    hexToRGB: function hexToRGB(hex) {
      var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);

      return r + ", " + g + ", " + b;
    }
  },
  mounted: function mounted() {
    this.checkForOverflow = true;
    this.update = 1;
  }
};

// Import vue component

// install function executed by Vue.use()
function install(Vue) {
	if (install.installed) { return; }
	install.installed = true;
	Vue.component('VReadMoreBox', component);
}

// Create module definition for Vue.use()
var plugin = {
	install: install,
};

// To auto-install when vue is found
var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default component;
export { install };
