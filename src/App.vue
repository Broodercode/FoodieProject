<template>
  <v-app>
 
 <v-main>
      <v-container>
    <div class="" v-if="!clientLoggedIn && !restLoggedIn">
    <v-app-bar>
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link> |

    </v-app-bar>
  
    </div>
    <div class="" v-else-if="clientLoggedIn">
    <v-app-bar>
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/register">Discover</router-link> |
      <router-link to="/browse">Browse</router-link> |
      <router-link to="/orders">Orders</router-link> |
      <a @click="toggleLogout">Logout</a> |

    </v-app-bar>
  
    </div>
    <div class="" v-else-if="restLoggedIn">
    <v-app-bar>
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/register">Public Profile</router-link> |
      <router-link to="/editmenu">Edit Menu</router-link> |
      <router-link to="/orders">Orders</router-link> |
 <a @click="toggleLogout">Logout</a> 

    </v-app-bar>
    </div>
   
  <router-view/>
  </v-container>
  </v-main>
  
</v-app>
</template>
<script>
import { mapState } from 'pinia'
import { useMainStore } from './store/main'
export default {
  name: "App",
  computed: {
    ...mapState(useMainStore, ['clientLoggedIn', 'restLoggedIn','toggleLogin', 'toggleLogout'])
  },
  mounted() {
   
  },
  data: () => ({})
}
</script>
<style>

</style>
