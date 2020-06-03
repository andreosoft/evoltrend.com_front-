<template>
  <div class="form-fixed">
    <div class="form-header">
      <div class="clearfix">
        <div class="float-left">
          <div class="row mar-0">
            <div class="d-none d-md-flex">
              <h1>
                <slot name="title"></slot>
              </h1>
              <breadcrumb v-bind:data="breadcrumbs"></breadcrumb>
            </div>
          </div>
        </div>
        <div class="float-right">
          <div>
            <slot name="right"></slot>
          </div>
        </div>
      </div>
    </div>
    <loader v-if="loading"></loader>
    <div class="form-body">
      <div class="form-body-inner">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import loader from "@/views/common/loader.vue";
import breadcrumb from "@/views/common/breadcrumb.vue";

export default {
  components: {
    loader,
    breadcrumb
  },
  props: {
    breadcrumbs: {
      type: Array,
      default: () => {
        return [];
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>