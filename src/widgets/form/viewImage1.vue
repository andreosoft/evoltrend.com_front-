<template>
  <div class="row form-group">
    <div class="col-sm-4 col-form-label text-right-sm">{{label}}:</div>
    <div class="col-sm-8">
      <div>
        <a :href="url_upload + '/' + value" target="_blank">
          <img :src="url_upload + '/' + value" style="height: 100px" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/config/api";

export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    value: String
  },
  data() {
    return {
      url_upload: api.url_upload
    }
  }
};
</script>