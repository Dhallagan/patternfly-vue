const PageContextProvider = {
  name: "PageContextProvider",
  props: {
    isManagedSidebar: {
      type: Boolean,
      default: true
    },
    isNavOpen: {
      type: Boolean,
      default: true
    }
  },
  provide() {
    return {
      isManagedSidebar: true,
      isNavOpen: true
    };
  }
};

export default PageContextProvider;
