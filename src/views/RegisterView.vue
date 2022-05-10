!<template>
    <div>
    <div class="">
           <v-btn  elevation="2" @click="toggleUserSignup">User Signup</v-btn>
            <v-btn elevation="2"  @click="toggleRestSignup">Restaurant Signup</v-btn>
    </div>
  
        <div class="" v-if="cCreation">
            Client Creation is active
      
        <ClientSignUp />

        </div>
        <div class="" v-if="rCreation">
            Restaurant Creation is active
 <RestSignUp />
        </div>
       
    </div>
</template>

<script>
import ClientSignUp from '@/components/ClientSignUp.vue'
import RestSignUp from '@/components/RestSignUp.vue'
import { mapState } from 'pinia'
import { useMainStore } from '@/store/main'

    export default {
	components: { ClientSignUp, RestSignUp },
    computed: {
      ...mapState(useMainStore, ['cCreation', 'rCreation', 'toggleUserSignup', 'toggleRestSignup'])
    }
        
    }
</script>

<style lang="scss" scoped>

</style>