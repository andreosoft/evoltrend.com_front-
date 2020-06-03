<template>
  <div>
    <div>
      <div v-for="(el, key) in data" :key="key">
        <div>
        <img :src="url + el.file"  style="width: 200px;"/>
        </div>
        <button @click="remove(key)">удалить</button>
      </div>
    </div>
    <div>
      <input v-on:change="upload()" ref="file" type="file" style="display: none" :id="id+'-in'" multiple/>
      <label class="btn btn-secondary" :for="id+'-in'">Загрузить файлы</label>
      <div>
        <transition name="fade" v-for="(el,key) in files" :key="key">
          <div class="file-image-el row" style="align-items: center;">
            <div class="col-6">{{el.file.name}}</div>
            <div class="col-6">
              <div class="progress">
                <div class="progress-bar" :style="{width: el.status + '%'}">{{el.status}}%</div>
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

export default {
  props: {
    value: Array,
    error: {
      type: String,
      default: ""
    },
    api: String,
    url: String
  },
  data() {
    return {
      id: null,
      data: this.value,
      files: [],
      status: 0
    };
  },
  mounted() {
    this.id = this._uid;
  },
  methods: {
    remove: function(key) {
      this.data.splice(key, 1);
      this.$emit("input", this.data);
    },
    upload: function() {
      for (var el of this.$refs.file.files) {
        var e = {
          file: el,
          status: 0
        };
        this.files.push(e);
      }
      for (var el of this.files) {
        this.upload_file(el);
      }
    },
    upload_file: function(file) {
      let formData = new FormData();
      formData.append("file", file.file);
      formData.append("name", file.file.name);
      axios
        .post(this.api, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          onUploadProgress: progressEvent => {
            file.status = parseInt(
              (progressEvent.loaded / progressEvent.total) * 100
            );
          }
        })
        .then(response => {
          if (response.data.status == "ok") {
            this.files.splice(this.files.indexOf(file), 1);
            this.data.push(response.data.data);
            this.$emit("input", this.data);
          }
        })
        .catch(function(error) {
          console.log("FAILURE!!", error);
        });
    }
  }
};
</script>
