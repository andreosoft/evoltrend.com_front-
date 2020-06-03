<template>
  <div class="row form-group">
    <div class="col-sm-2 col-form-label text-right-sm">{{label}}:</div>
    <div class="col-sm-10">
      <div class="form-control">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    }
  }
};
</script>