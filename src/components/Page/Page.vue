<template>
  <div class="pf-c-page">
    <!-- SkipToContent -->
    <!-- <PageContextProvider> -->

    <slot name="header" />

    <slot name="sidebar" />
    <main
      role="main"
      :class="['pf-c-page__main',theme === 'dark' ? 'pf-m-dark' : 'pf-m-light']"
      tabindex="-1"
    >
      <slot />
      <!-- <section class="pf-c-page__main-section pf-m-dark-100">
    </section>
    <section class="pf-c-page__main-section pf-m-dark-200">
    </section>
    <section class="pf-c-page__main-section pf-m-light">
    </section>
    <section class="pf-c-page__main-section">
      </section>-->
    </main>
    <!-- </PageContextProvider> -->
  </div>
</template>

<script>
// import PageContextProvider from "./PageContextProvider";

// import Nav from "./components/Nav/Nav.vue";
// import NavList from "./components/Nav/NavList";
// import NavItem from "./components/Nav/NavItem";

export default {
  name: "Page",
  mounted() {
    window.addEventListener("resize", this.resize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.resize);
  },
  // provide() {
  //   return {
  //     isNavOpen: this.mobileView ? this.mobileIsNavOpen : this.desktopIsNavOpen
  //   };
  // },
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
      desktopIsNavOpen: this.managedSidebarOpen,
      mobileIsNavOpen: false
      // mobileView: false
    };
  },
  computed: {
    mobileView() {
      const breakPoint = 768;
      return this.pageWidth < breakPoint;
    },
    managedSidebarOpen() {
      return !this.isManagedSidebar ? true : this.defaultManagedSidebarIsOpen;
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


