<template>
  <section class="pf-c-page__main-section" :class="classes">
    <slot />
  </section>
</template>

<script>
export default {
  name: "PageSection",
  props: {
    variant: String
  },
  computed: {
    classes() {
      var classes = [];

      switch (this.variant) {
        case "darker":
          classes.push("pf-m-dark-100");
          break;
        case "dark":
          classes.push("pf-m-dark-200");
          break;
        case "light":
          classes.push("pf-m-light");
          break;
      }
      return classes;
    }
  }
};
</script>
