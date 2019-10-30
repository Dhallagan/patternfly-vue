<template>
  <div
    class="pf-c-page__sidebar pf-m-dark"
    :class="[ isNavOpen ? 'pf-m-expanded' : 'pf-m-collapsed']"
  >
    <div class="pf-c-page__sidebar-body">
      <slot name="nav" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    theme: {
      type: String,
      required: true,
      validator(prop) {
        return ["dark", "light"].includes(prop);
      }
    },
    isNavOpen: {
      type: Boolean,
      default: true
    },
    className: String
  }
};
</script>
