<template>
  <div class="user-modal">
    <div class="modal-header">
      <div @click="$emit('close')">
        <router-link :to="{ name: 'profile'}" class="btn-blank">
          <i class="fal fa-cog" title="Профиль"></i>
        </router-link>
      </div>
      <div>
        <button class="btn-blank" @click="$emit('close')" title="Закрыть">
          <i class="fal fa-times"></i>
        </button>
      </div>
    </div>
    <div class="modal-body" @click="$emit('close')">
      <div class="text-center">
        <router-link :to="{ name: 'profile'}">
          <img
            class="avatar"
            :src="api.download + '/' + $store.getters['auth/profile'].image + '?width=100&height=100'"
            style="width: 100px"
          />
        </router-link>
        <div style="padding-top: 20px;">
          <p>
            <b>ID: {{$store.getters['auth/profile'].id}} - {{$store.getters['auth/profile'].login}} - {{$store.getters['auth/profile'].name}}</b>
            <br />
            <b>Сумма на счете магазина: 0</b>
            <br />
            <b>Сумма на наличном счете: 0</b>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/config/api";

export default {
  data: function() {
    return {
      api: api
    };
  }
};
</script>