# v-read-more-box
Vue component - content is clipped at specified height, with an automatic "read more"/"read less" controls, as well as, a fade-out.

## To install:

```npm install v-read-more-box --save```

## Usage:
Code Sand Box - [Demo](https://codesandbox.io/s/r4qpzy5z24)

You can wrap your content in ```<v-read-more-box>``` tag. The content will get clipped at ```max-height``` content. The user can click anywhere on the box to show the whole content, and click the "Read Less" control to collapse back.

## Options:
You can pass options via directives.

Example:

```<v-read-more-box max-height="215" bg-color="#000" read-more="Show More!" read-more="Show Less!">```

Possible options:
* max-height (int) - max height in pixels, (default 200). Note: actual height of the wrapper box will be slighly larger (+20px)
* bg-color (hex color value) -  the color of the fadeout gradient on the bottom. Default is white, but if your background is something else you can sid it using this directive. Acceptable values can optionally start with #, and can be the shorthand form (e.g. #CCCCCC, CDCDC, #000, 777).
* read-more (String) text of the "Read More" control (default "Read More..."). Text only, no HTML, but unicode works.
* read-less (String)  text of the "Read More" control (default "Read Less..."). Text only, no HTML, but unicode works.

## Slots:
You also have 2 [named slots](https://vuejs.org/v2/guide/components-slots.html#Named-Slots) avaliable for the read more/less controls if you wnat to have more options (e.g. passing in buttons or some other controls, custom HTML, etc.)

Slot syntax:
```
<button slot="readMore">Custom Show More Button!</button>

<template slot="readLess">
    <div>&hellip; Show Less</div>
</template>
```

## Events:

The contract/expand controls emit 2 events each. The payload of each event is the event type and the state of the component (e.g. ```{event: "contract", expanded: false}```)

* Expand sends ```v-read-more-box-expand``` & ```v-read-more-box-change```
* Contract sends ```v-read-more-box-contract``` & ```v-read-more-box-change```



```
<v-read-more-box @v-read-more-box-change="logEvent($event)" @v-read-more-box-expand="logEvent($event)" @v-read-more-box-contract="logEvent($event)">
```

## Examples:

Using Defaults:
```html
 <v-read-more-box>
    <h1>HTML Ipsum Presents</h1>
    <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em>	Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
 </v-read-more-box>
```
![Default Options Sample](https://i.imgur.com/aikb093.jpg)


All options:
```html
<div style="background-color: black; color: white;">
    <v-read-more-box  max-height="150" bg-color="#000" read-more="Show More!" read-less="Show Less!" @v-read-more-box-change="logEvent($event)" @v-read-more-box-expand="logEvent($event)" @v-read-more-box-contract="logEvent($event)">
        <button slot="readMore">Custom read more slot!</button>
        <template slot="readLess">
            <div>&hellip; Show Less</div>
        </template>
        <h1>HTML Ipsum Presents</h1>
        <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em>	Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
    </v-read-more-box>
 </div>

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
```

![All Options Sample](https://i.imgur.com/6eHjGu2.jpg)
