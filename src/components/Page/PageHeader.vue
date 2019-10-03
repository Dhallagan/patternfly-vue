<template>
  <header role="banner" class="pf-c-page__header">
    <div class="pf-c-page__header-brand">
      <div class="pf-c-page__header-brand-toggle" v-if="showNavToggle">
        {toggle}
      </div>
      <a class="pf-c-page__header-brand-link">
        {{logo}}
      </a>
    </div>
    <div class="pf-c-page__header-tools">
      <div>{Toolbar}</div>
      <div>{Avatar}</div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    showNavToggle: {
      type: Boolean,
      default: true
    },
    isManagedSidebar: {
      type: Boolean,
      default: true
    },
    logo: {
      type: String
    },
    toolbar:{
      type: Boolean
    }
  },
  data () {
    return {
      isNavOpen: true
    }
  }
}
</script>
