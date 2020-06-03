<template>
  <div>
    <div class="left-menu">
      <MenuItem
        class="left-menu-item"
        v-for="(el, index) in $root.mainMenu.data"
        :key="index"
        :element="el"
      ></MenuItem>
    </div>
  </div>
</template>

<script>
import MenuItem from "@/views/common/menu/menuItem.vue";

export default {
  components: {
    MenuItem
  },
  created() {
    if (this.$root.isMobile) {
      this.$root.showMenu = false;
    }
  }
};
</script>

