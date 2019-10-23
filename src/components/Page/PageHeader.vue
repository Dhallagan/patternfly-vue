<template>
  <header role="banner" class="pf-c-page__header">
    <!-- Show nav toggle or logo -->
    <div v-if="showNavToggle || logo" class="pf-c-page__header-brand">
      <div
        class="pf-c-page__header-brand-toggle"
        v-if="showNavToggle"
        @click="handleToggle(isNavOpen)"
      >
        <BarsIcon />
      </div>
      <a class="pf-c-page__header-brand-link">{{logo}}</a>
    </div>
    <div class="pf-c-page__header-tools">
      <div>{{toolbar}}</div>
      <div>{{avatar}}</div>
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
    isNavOpen: {
      type: Boolean,
      default: true
    },
    logo: {
      type: String
    },
    toolbar: {
      type: [Boolean, String]
    },
    avatar: {
      type: [Boolean, String]
    },
    className: String
  },
  methods: {
    handleToggle(val) {
      this.$emit("onNavToggle", val);
    }
  }
};
</script>
