<template>
    <div class="">
<ul class="client-input-list">
    <li  class="client-input-item">Name: <input v-model="name" type="text"  ></li>
    <li  class="client-input-item">Email: <input v-model="email" type="email"  ></li>
    <li class="client-input-item">Address: <input v-model="address" type="text"  ></li>
    <li class="client-input-item">Bio: <input v-model="bio" type="text" ></li>
    <li class="client-input-item">City: <input v-model="city" type="text" ></li>
    <li class="client-input-item">Phone: <input v-model="phone" type="phone" ></li>
    <li class="client-input-item">Password: <input v-model="password" type="password" ></li>
</ul>
    <v-btn elevation="2" @click="handleRestRegistration">Submit</v-btn>
    </div>
</template>

<script>
import { mapActions} from 'pinia'
import { useMainStore } from '@/store/main'
    export default {
        name: "RestSignUp",
         computed: {
    
    },
    data: () => ({
    
           name: undefined,
          address: undefined,
          bio: undefined,
          city: undefined,
          email: undefined,
          password: undefined,
          phone: undefined,
    
        
    }),
    methods: {
        ...mapActions(useMainStore, ['restCreation']),
        handleRestRegistration() {
            this.restCreation(this.name, this.address, this.bio, this.city, this.email, this.phone, this.password)
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