<template>
  <div>
    <div v-if="value">
      <a :href="download + '/' + value" target="_blank">
        <img :src="download + '/' + value + '?width=200&height=200'" style="height: 100px" />
      </a>
      <button
        @click="$emit('input', ''); image = null"
        class="btn btn-secondary"
        style="margin: 5px;"
      >Удалить</button>
    </div>
    <div v-else>
      <input v-on:change="upload()" ref="file" type="file" style="display: none" :id="id+'-in'" />
      <label class="btn btn-secondary" :for="id+'-in'">Загрузить</label>
      <div>
        <transition name="fade" v-if="image">
          <div class="file-image-el row" style="align-items: center;">
            <div class="col-6">{{image.name}}</div>
            <div class="col-6">
              <div class="progress">
                <div class="progress-bar" :style="{width: status + '%'}">{{status}}%</div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import api from "@/config/api";

export default {
  props: {
    value: String,
    label: {
      type: String,
      default: ""
    },
    error: {
      type: String,
      default: ""
    },
    api: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      download: api.download,
      id: null,
      image: null,
      status: 0,
    };
  },
  mounted() {
    this.id = this._uid;
  },
  methods: {
    upload: function() {
      this.image = this.$refs.file.files[0];
      this.status = 0;

      let formData = new FormData();
      formData.append("file", this.image);
      formData.append("name", this.image.name);
      axios
        .post(this.api, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          onUploadProgress: progressEvent => {
            this.status = parseInt(
              (progressEvent.loaded / progressEvent.total) * 100
            );
          }
        })
        .then(response => {
          this.$emit("change", response.data.data.file);
          this.$emit("input", response.data.data.file);
        })
        .catch(function() {
          console.log("FAILURE!!");
        });
    }
  }
};
</script>
