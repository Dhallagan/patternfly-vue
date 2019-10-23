<template>
  <div
    class="pf-c-page__sidebar pf-m-dark"
    :class="[ isNavOpen ? 'pf-m-expanded' : 'pf-m-collapsed']"
  >
    <div class="pf-c-page__sidebar-body">
      <Nav :theme="theme">
        <NavList>
          <NavItem />
          <NavItem />
          <NavItem />
        </NavList>
      </Nav>
    </div>
  </div>
</template>

<script>
import Nav from "../Nav/Nav.vue";
import NavList from "../Nav/NavList";
import NavItem from "../Nav/NavItem";

export default {
  name: "PageHeader",
  components: {
    Nav,
    NavList,
    NavItem
  },
  props: {
    theme: {
      type: String,
      required: true,
      validator(prop) {
        return ["dark", "light"].includes(prop);
      }
    },
    isNavOpen: {
      type: Boolean,
      default: true
    },
    className: String
  }
};
</script>
