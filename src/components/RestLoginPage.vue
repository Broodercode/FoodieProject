!<template>
    <div>
    <ul class="client-input-list">
      <li class="client-input-item">
        Email: <input type="text" name="" id="" />
      </li>
      <li class="client-input-item">
        Password: <input type="text" name="" id="" />
      </li>
    </ul>
    <v-btn elevation="2" @click="onRestLogin">Submit</v-btn>

    </div>
</template>

<script>
import { mapState } from 'pinia'
import { useMainStore } from '@/store/main'
    export default {
        name: "RestLoginPage",
          computed: {
    ...mapState(useMainStore, ['onRestLogin'])
  },
    }
    
</script>

<style lang="scss" scoped>

</style>