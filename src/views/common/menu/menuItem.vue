<template>
  <div v-if="element.auth.indexOf(parseInt($store.getters['auth/profile'].role)) >= 0">
      <a @click="onClick(element)" :title="element.title" style="cursor: pointer" :class="$route.path == element.route || showSubmenu ? 'router-link-active' : ''">
        <i :class="element.icon"></i>
        <br />
        <span>{{ element.name }}</span>
      </a>
      <transition name="modal">
        <submenu v-if="showSubmenu" @close="showSubmenu = false" :data="element.submenu"></submenu>
      </transition>
  </div>
</template>

<script>
import submenu from './submenu.vue';

export default {
  components: {
    submenu
  },
  props: {
    element: Object
  },
  data: function() {
    return {
      showSubmenu: false
    }
  },
  methods: {
    onClick(el) {
      if (el.submenu) {  
        this.showSubmenu ? this.showSubmenu = false : this.showSubmenu = true;
      } else {
        if (this.$root.isMobile) { this.$root.showMenu = false; }
        this.$router.push({path: el.route});
      }
    }
  }
};
</script>
