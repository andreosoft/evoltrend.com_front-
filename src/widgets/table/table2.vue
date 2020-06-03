<template>
  <div>
    <div style="margin: 5px 0;">
      <slot name="actions"></slot>
    </div>
    <loader v-if="loading"></loader>
    <table class="table table-bordered">
      <thead>
        <slot name="head"></slot>
      </thead>
      <tbody>
        <slot name="body"></slot>
      </tbody>
    </table>
  </div>
</template>

<script>
import loader from "@/views/common/loader.vue";

export default {
  components: {
    loader
  },
  props: {
    loading: Boolean,
    default: false
  }
};
</script>