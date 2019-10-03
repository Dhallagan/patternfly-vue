<template>
  <div id="app">
    <Page>
      <template slot="header">
<PageHeader/>
      </template>
    </Page>
  </div>
</template>

<script>
import Page from './components/Page/Page.vue'
import PageHeader from './components/Page/PageHeader.vue'
export default {
  name: 'app',
  components: {
    Page,
    PageHeader
  }
}
</script>
