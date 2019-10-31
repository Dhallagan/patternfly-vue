<template>
  <div id="app" class="pf-m-redhat-font" style="height: 100vh;">
    <Page>
      <PageHeader
        slot="header"
        logo="Logo"
        toolbar="Toolbar |"
        avatar="| Avatar"
        :showNavToggle="true"
        :isNavOpen="isNavOpen"
        @onNavToggle="onNavToggle(isNavOpen)"
      />

      <PageSidebar slot="sidebar" :theme="'dark'" :isNavOpen="isNavOpen">
        <Nav slot="nav" :theme="'dark'">
          <NavList>
            <NavItem>System Panel</NavItem>
            <NavItem>Policy</NavItem>

            <NavItem>Authentication</NavItem>
          </NavList>
        </Nav>
        <Nav slot="nav" :theme="'dark'">
          <NavGroup :title="'Section1'">
            <NavItem>System Panel</NavItem>
            <NavItem>Policy</NavItem>
            <NavItemSeperator />
            <NavItem>Authentication</NavItem>
          </NavGroup>
        </Nav>

        <Nav slot="nav" :theme="'dark'">
          <NavExpandable :title="'Section2'">
            <NavList>
              <NavItem>System Panel</NavItem>
              <NavItem>Policy</NavItem>
              <NavItem>Authentication</NavItem>
            </NavList>
          </NavExpandable>
        </Nav>
      </PageSidebar>

      <PageSection :variant="'light'">
        <div class="pf-c-content">
          <h1 data-pf-content="true" class>Main Title</h1>
          <p data-pf-content="true" class>
            Body text should be Overpass Regular at 16px. It should have leading of 24px because
            <br />of it’s relative line height of 1.5.
          </p>
        </div>
      </PageSection>
      <PageSection>Section with default background</PageSection>
    </Page>
  </div>
</template>

<script>
import Page from "./components/Page/Page.vue";
import PageHeader from "./components/Page/PageHeader";
import PageSidebar from "./components/Page/PageSidebar.vue";
import PageSection from "./components/Page/PageSection.vue";
import Nav from "./components/Nav/Nav.vue";
import NavList from "./components/Nav/NavList";
import NavItem from "./components/Nav/NavItem";
import NavItemSeperator from "./components/Nav/NavItemSeperator";
import NavGroup from "./components/Nav/NavGroup";
import NavExpandable from "./components/Nav/NavExpandable";

export default {
  name: "app",
  components: {
    Page,
    PageHeader,
    PageSidebar,
    PageSection,
    Nav,
    NavList,
    NavItem,
    NavItemSeperator,
    NavGroup,
    NavExpandable
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
