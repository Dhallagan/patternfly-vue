<template>
  <div id="app">
    <Page>
      <PageHeader
        slot="header"
        logo="Logo"
        toolbar="Toolbar"
        avatar=" | Avatar"
        :showNavToggle="true"
        :isNavOpen="isNavOpen"
        @onNavToggle="onNavToggle(isNavOpen)"
      />

      <PageSidebar slot="sidebar" :theme="'dark'" :isNavOpen="isNavOpen">
        <!-- <Nav>
        <NavList>
          <NavItem />
          <NavItem />
          <NavItem />
        </NavList>
        </Nav>-->
      </PageSidebar>
      <PageSection :variant="'darker'">Section with darker background</PageSection>
      <PageSection :variant="'dark'">Section with dark background</PageSection>
      <PageSection :variant="'light'">Section with light background</PageSection>
      <PageSection>Section with default background</PageSection>
    </Page>
  </div>
</template>

<script>
import Page from "./components/Page/Page.vue";
import PageHeader from "./components/Page/PageHeader";
import PageSidebar from "./components/Page/PageSidebar.vue";
import PageSection from "./components/Page/PageSection.vue";

export default {
  name: "app",
  components: {
    Page,
    PageHeader,
    PageSidebar,
    PageSection
  },
  data() {
    return {
      isNavOpen: true
    };
  },
  methods: {
    onNavToggle(val) {
      this.isNavOpen = !val;
    }
  }
};
</script>
