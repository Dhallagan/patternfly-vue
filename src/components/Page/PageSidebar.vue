<template>
  <div class="pf-c-page__sidebar pf-m-dark">
    <div class="pf-c-page__sidebar-body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    theme: {
      type: String,
      required: true,
      validator (value) {
        return ['dark', 'light'].includes(value)
      }
    },
    navOpen:{
      type: Boolean,
      default: true
    },
    className: String
  }
}
</script>
