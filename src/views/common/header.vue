<template>
  <div>
    <nav class="navbar navbar-dark bg-primary fixed-top">
      <div>
        <button class="btn-blank" @click="$root.showMenu = !$root.showMenu ">
          <i class="fal fa-bars"></i>
        </button>
        <div class="menu-title d-none d-sm-inline-block">
          <router-link :to="{name: 'index'}">{{ $root.appName }}</router-link>
        </div>
      </div>

      <div class="user-info">
        <button class="btn-blank" @click="showUserModal = true" title="Профиль">
          <img class="avatar"
              :src="api.download + '/' + $store.getters['auth/profile'].image + '?width=50&height=50'"
              style="height: 50px"
            />
        </button>
        <!-- <span>{{ $store.getters['auth/profile'].name }}</span> -->
        <!-- <button class="btn-blank" @click="showUserModal = true" title="Профиль"><i class="fal fa-user"></i></button> -->
        <transition name="modal">
          <user-modal v-if="showUserModal" @close="showUserModal = false"></user-modal>
        </transition>
        <button class="btn-blank" @click="$root.logout">
          <i class="fal fa-sign-out-alt" title="Выйти"></i>
        </button>
      </div>
    </nav>
    <transition name="fade">
      <div class="info-message" v-if="$root.info.visible">{{$root.info.text}}</div>
    </transition>
  </div>
</template>


<script>
import UserModal from "@/views/common/userModal.vue";
import axios from "axios";
import api from "@/config/api";

export default {
  name: "mainheader",
  data: function() {
    return {
      showUserModal: false,
      search: null,
      api: api
    };
  },
  components: {
    UserModal
  }
};
</script>
