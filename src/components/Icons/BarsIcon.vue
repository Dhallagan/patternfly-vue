<template>
  <i class="fa fa-bars fa-2x"></i>
</template>

<script>
/* 
  This is basically useless.  Currently running off the CSS imported in the index
*/
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";

export default {
  name: "BarsIcon",
  props: {
    color: String,
    size: {
      type: String,
      default: "md",
      validator(prop) {
        return ["sm", "md", "lg", "xl"].includes(prop);
      }
    },
    title: String
  }
};
</script>