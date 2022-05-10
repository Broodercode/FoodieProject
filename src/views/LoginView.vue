!
<template>
  <div>
    <div class="">

    </div>
    <div class="">
      <v-btn elevation="2" @click="toggleUserLogin">User Login</v-btn>
      <v-btn elevation="2" @click="toggleRestLogin">Restaurant Login</v-btn>
    </div>

    <div class="" v-if="cLogin">
      Client Login is active

      <ClientLoginPage />
    </div>
    <div class="" v-if="rLogin">
      Restaurant Login is active
      <RestLoginPage />
    </div>
  </div>
</template>

<script>
import ClientLoginPage from "@/components/ClientLoginPage.vue";
import RestLoginPage from "@/components/RestLoginPage.vue";
import { mapState } from 'pinia';
import { useMainStore } from '@/store/main';

export default {
  components: { ClientLoginPage, RestLoginPage },
  name: "LoginView",
  computed: {
      ...mapState(useMainStore, ['toggleUserLogin', 'toggleRestLogin', 'cLogin', 'rLogin'])
  }
};
</script>

<style lang="scss" scoped></style>
