<template>
  <div class="row form-group">
    <div class="col-sm-4 col-form-label text-right-sm">{{label}}:</div>
    <div class="col-sm-8">
      <div class="form-control">
        <loader v-if="loading"></loader>
        {{data.text}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import loader from "@/views/common/loaderSmall.vue";

export default {
  components: {
    loader
  },
  props: {
    api: String,
    value: String,
    label: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {
      loading: false,
      data: {
        value: '',
        text: ''
      }
    }
  },
  created() {
    if (this.api != "") {
      this.fitchData();
    }
  },
  watch: {
    api: function(value) {
      this.fitchData();
    },
    value: function() {
      this.fitchData();
    }
  },
  methods: {
    fitchData() {
      this.loading = true;
      axios
        .get(this.api)
        .then(response => {
          this.loading = false;
          if (response.data.status == "ok") {
            response.data.data.forEach( (value) => {
              if (value.value == this.value) {
                this.data = value;
              }
            } );
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>