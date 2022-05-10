!<template>
 <v-container>
    <div>
    
        <v-btn elevation="2"  @click="viewMenu">Get Menu</v-btn >
        <ul>
            <li v-for="item in menuArr" :key="item.menuId">
               <v-btn @click="getOrder(item)">
               
                 {{item.name}}
                 </v-btn> 
            </li>
        </ul>
    </div>
    </v-container>
</template>

<script>
import { mapState } from 'pinia'
import { useMainStore } from '@/store/main'
  export default {
    name: "BrowseView",
    computed: {
      ...mapState(useMainStore, ['viewMenu', 'menuArr', 'getOrder'])
    }
  }
</script>

<style lang="scss" scoped>

</style>