!<template>
    <div>
            <div class="" v-if="clientLoggedIn">
<ul class="client-input-list">
    <li  class="client-input-item">Email: <input v-model="email" type="text"  ></li>
    <li class="client-input-item">Username: <input v-model="username" type="text"  ></li>
    <li class="client-input-item">Firstname: <input v-model="firstname" type="text" ></li>
    <li class="client-input-item">Lastname: <input v-model="lastname" type="text" ></li>
    <li class="client-input-item">Password: <input v-model="password" type="text" ></li>
</ul>
    <v-btn elevation="2" @click="handlePatchRest">Submit</v-btn>
    </div>
    <div class="" v-else-if="restLoggedIn">
        <ul class="client-input-list">
    <li  class="client-input-item">Name: <input v-model="name" type="text"  ></li>
    <li  class="client-input-item">Email: <input v-model="email" type="email"  ></li>
    <li class="client-input-item">Address: <input v-model="address" type="text"  ></li>
    <li class="client-input-item">Bio: <input v-model="bio" type="text" ></li>
    <li class="client-input-item">City: <input v-model="city" type="text" ></li>
    <li class="client-input-item">Phone: <input v-model="phone" type="phone" ></li>
    <li class="client-input-item">Password: <input v-model="password" type="password" ></li>
</ul>
    <v-btn elevation="2" @click="handleClientPatch">Submit</v-btn>
    </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useMainStore } from '@/store/main'
    export default {
        name: "ProfileView",
        computed: {
            ...mapState(useMainStore, ['restLoggedIn', 'clientLoggedIn'])
        },
        data: () => ({
               name: undefined,
          address: undefined,
          bio: undefined,
          city: undefined,
          email: undefined,
          password: undefined,
          phone: undefined,
               username: undefined,
        firstname: undefined,
        lastname: undefined,

        }),
        methods: {
            ...mapActions(useMainStore, ['patchRestaurant', 'patchClient']),
            handleRestPatch() {
                this.patchRestaurant(this.name, this.address, this.bio, this.city, this.email, this.password, this.phone )
            },

        
            handleClientPatch() {
                this.patchClient(this.email, this.username, this.firstname, this.lastname, this.password)
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>