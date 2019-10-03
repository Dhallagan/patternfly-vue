<template>
<div class="pf-c-page">
  <!-- SkipToContent -->
  <slot name="header" />
  <slot name="sidebar" />

  <main role="main" class="pf-c-page__main" tabindex="-1">
    <!-- <section class="pf-c-page__main-section pf-m-dark-100">
    </section>
    <section class="pf-c-page__main-section pf-m-dark-200">
    </section>
    <section class="pf-c-page__main-section pf-m-light">
    </section>
    <section class="pf-c-page__main-section">
    </section> -->
    
  </main>
</div>
</template>

<script>
export default {
  name: 'Page',
  props: {
    msg: String
  }
}
</script>


