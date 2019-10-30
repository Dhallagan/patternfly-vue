<template>
  <div>
    <h2 class="pf-c-nav__section-title">{{title}}</h2>
    <ul class="pf-c-nav__simple-list">
      <slot />
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavGroup",
  props: {
    title: String
  }
};
</script>
