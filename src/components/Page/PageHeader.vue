<template>
  <header role="banner" class="pf-c-page__header">
    <!-- Show nav toggle or logo -->
    <div v-if="showNavToggle || logo" class="pf-c-page__header-brand">
      <div class="pf-c-page__header-brand-toggle" v-if="showNavToggle">
        <BarsIcon />
      </div>
      <a class="pf-c-page__header-brand-link">{{logo}}</a>
    </div>
    <div class="pf-c-page__header-tools">
      <div>{Toolbar}</div>
      <div>{Avatar}</div>
    </div>
  </header>
</template>

<script>
import BarsIcon from "../Icons/BarsIcon";
export default {
  name: "PageHeader",
  components: {
    BarsIcon
  },
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
    toolbar: {
      type: Boolean
    },
    className: String
  },
  data() {
    return {
      isNavOpen: true
    };
  }
};
</script>
