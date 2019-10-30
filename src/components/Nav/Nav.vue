<template>
  <nav
    :class="['pf-c-nav',
    theme === 'dark' ? 'pf-m-dark' : 'pf-m-light'
    ]"
    aria-label="Global"
  >
    <section class="pf-c-nav__section">
      <slot />
    </section>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: {
    theme: {
      type: String,
      required: true,
      validator(value) {
        return ["dark", "light"].includes(value);
      }
    }
  }
};
</script>
