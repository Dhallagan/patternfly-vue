<template>
  <div class="pf-c-page">
    <!-- SkipToContent -->
    <PageHeader :showNavToggle="true" />
    <PageSidebar :theme="'dark'">
      <!-- <Nav>
        <NavList>
          <NavItem />
          <NavItem />
          <NavItem />
        </NavList>
      </Nav>-->
    </PageSidebar>

    <main
      role="main"
      :class="['pf-c-page__main',theme === 'dark' ? 'pf-m-dark' : 'pf-m-light']"
      tabindex="-1"
    >
      <!-- <section class="pf-c-page__main-section pf-m-dark-100">
    </section>
    <section class="pf-c-page__main-section pf-m-dark-200">
    </section>
    <section class="pf-c-page__main-section pf-m-light">
    </section>
    <section class="pf-c-page__main-section">
      </section>-->
    </main>
  </div>
</template>

<script>
import PageHeader from "./PageHeader";
import PageSidebar from "./PageSidebar.vue";

// import Nav from "./components/Nav/Nav.vue";
// import NavList from "./components/Nav/NavList";
// import NavItem from "./components/Nav/NavItem";

export default {
  name: "Page",
  components: { PageHeader, PageSidebar },
  mounted() {
    window.addEventListener("resize", this.resize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.resize);
  },

  props: {
    isManagedSidebar: {
      type: Boolean,
      default: false
    },
    defaultManagedSidebarIsOpen: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      pageWidth: 1200,
      // desktopIsNavOpen: false;
      mobileIsNavOpen: false,
      mobileView: false
    };
  },
  computed: {
    mobile() {
      const breakPoint = 768;
      return this.pageWidth < breakPoint;
    }
  },
  methods: {
    handleResize() {
      const windowSize = window.innerWidth;
      this.pageWidth = windowSize;
    },
    onNavToggleMobile() {
      this.mobileIsNavOpen = !this.mobileIsNavOpen;
    }
  }
};
</script>


