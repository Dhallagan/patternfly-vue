<template>
  <div id="app">
    <Page>
      <template slot="header">
        <PageHeader/>
      </template>

      <template slot="sidebar">
        <PageSidebar :theme="'dark'">
          <Nav>
            <NavList>
              <NavItem />
              <NavItem />
              <NavItem />
            </NavList>
          </Nav>
        </PageSidebar>
      </template>

    </Page>
  </div>
</template>

<script>
import Page from './components/Page/Page.vue'
import PageHeader from './components/Page/PageHeader.vue'
import PageSidebar from './components/Page/PageSidebar.vue'
import Nav from './components/Nav/Nav.vue'
import NavList from './components/Nav/NavList'
import NavItem from './components/Nav/NavItem'

export default {
  name: 'app',
  components: {
    Page,
    PageHeader,
    PageSidebar,
    Nav,
    NavList,
    NavItem
  }
}
</script>
