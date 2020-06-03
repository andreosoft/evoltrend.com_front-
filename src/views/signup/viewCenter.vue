<template>
  <div class="container">
    <div>
      <div class="text-center" style="margin: 0 auto;" :style="{maxWidth: maxWidth}">
        <h2 style="color:#fff">{{upperName}}</h2>
        <div class="login-panel">
          <div v-if="loading" class="loading-block">
            <div class="loader"></div>
          </div>
          <div>
            <h3>{{name}}</h3>
            <hr />
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    maxWidth: {
      type: String,
      default: '360px'
    },
    upperName: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>