<template>
    <div class="">
    <div class="">
<ul class="client-input-list">
    <li  class="client-input-item">Email: <input v-model="email" type="email"  ></li>
    <li class="client-input-item">Username: <input v-model="username" type="text"  ></li>
    <li class="client-input-item">Firstname: <input v-model="firstname" type="text" ></li>
    <li class="client-input-item">Lastname: <input v-model="lastname" type="text" ></li>
    <li class="client-input-item">Password: <input v-model="password" type="password" ></li>
</ul>
    <v-btn elevation="2" @click="handleRestRegistration">Submit</v-btn>
    </div>
    </div>
</template>

<script>

import { useMainStore } from '@/store/main'
import { mapActions } from 'pinia'
    export default {
        name: "ClientSignUp",
         computed: {

    },
    data: ()=> ({
        email: undefined,
        username: undefined,
        firstname: undefined,
        lastname: undefined,
        password: undefined
    }),
   methods: {
        ...mapActions(useMainStore, ['clientCreation']),
        handleRestRegistration() {
            this.restCreation(this.email, this.username, this.firstname, this.lastname, this.password)
        },
        handleError(response) {
            console.log(response)
        }
    }
    }
   
</script>

<style scoped>
.input-box{
    display: block;
}
</style>