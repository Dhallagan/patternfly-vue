<template>
  <nav :class="['pf-c-nav',
    theme === 'dark' ? 'pf-m-dark' : 'pf-m-light'
    ]" aria-label="Global">
    <slot />
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    theme: {
      type: String,
      required: true,
      validator (value) {
        return ['dark', 'light'].includes(value)
      }
    }
  }
}
</script>
