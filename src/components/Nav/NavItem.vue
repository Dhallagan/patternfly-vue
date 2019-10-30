<template>
  <li class="pf-c-nav__item">
    <a href="#" class="pf-c-nav__link" :class="{isActive: 'pf-m-current'}" aria-current="page">
      <slot />
    </a>
  </li>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    isActive: Boolean,
    itemId: [String, Number]
  }
};
</script>
