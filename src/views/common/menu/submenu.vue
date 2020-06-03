<template>
  <div class="submenu-modal" @click="$emit('close')">
    <div>
      <div class="submenu-menu">
        <a v-for="(el, key) in data" :key="key" :title="el.title" @click="onClick(el)" :class="$route.path == el.route ? 'router-link-active' : ''">{{el.name}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  },
  methods: {
    onClick(el) {
      this.$emit("close");
      this.$router.push({ path: el.route });
    }
  }
};
</script>