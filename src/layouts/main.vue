<template>
  <div>
    <header-block></header-block>
    <div class="content" :class="$root.showMenu ? 'menu-active' : ''">
      <div class="left-side">
        <menu-block></menu-block>
      </div>
      <div class="right-side panel-primary">
        <router-view/>
      </div>
      <div class="content-block">
      </div>
    </div>
    <v-info></v-info>
  </div>
</template>

<script>
import Header from '@/views/common/header.vue'
import MenuBlock from '@/views/common/menu/menuBlock.vue'
import Info from "@/widgets/Info.vue"

export default {
  components: {
    'menu-block': MenuBlock,
    'header-block': Header,
    'v-info': Info
  }
}
</script>
