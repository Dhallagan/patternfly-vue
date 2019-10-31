<template>
  <ul class="pf-c-nav__list">
    <li class="pf-c-nav__item pf-m-current" :class="[isExpanded? 'pf-m-expanded' : '']">
      <span
        data-component="pf-nav-expandable"
        class="pf-c-nav__link"
        @click="isExpanded = !isExpanded"
      >
        Link 1
        <span class="pf-c-nav__toggle">
          <svg
            fill="currentColor"
            height="1em"
            width="1em"
            viewBox="0 0 256 512"
            aria-hidden="true"
            role="img"
            style="vertical-align: -0.125em;"
          >
            <path
              d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
              transform
            />
          </svg>
        </span>
      </span>
      <section class="pf-c-nav__subnav" aria-labelledby="pf-1572493696069q14t6q7yvlp">
        <slot />
      </section>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavExpandable",
  props: {
    title: String,
    isActive: Boolean,
    isExpanded: {
      type: Boolean,
      default: true
    }
  }
};
</script>
