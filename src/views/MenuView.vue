!<template>
<v-container>
    <div>
        <v-btn elevation="2" @click="editMenu">Edit</v-btn>
        <v-btn elevation="2"  @click="viewMenu">Get Menu</v-btn >
        <div class="" v-if="menuEdit">
            <ul>
                <li>
                    name: <input type="text" id="menuName" v-model="name">
                    description: <input type="text" v-model="description">
                    price: <input type="text" v-model="price">
                    image: <input type="text" v-model="image">
                </li>
            </ul>
    <v-btn @click="handleMenuAdd">Submit</v-btn>
        </div>
        <ul>
            <li v-for="item in menuArr" :key="item.menuId">
                {{item.name}}
            </li>
        </ul>
    </div>
    </v-container>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useMainStore } from '@/store/main'
    export default {
        name: "ModifyMenuView",
        computed: {

            //fucntions
            ...mapState(useMainStore, ['editMenu', 'viewMenu',  'menuEdit']),

            //variables
             ...mapState(useMainStore, ['menuArr', 'menuAdd'])
        },
      data: () => ({
          name: undefined,
          description: undefined,
          price: undefined,
          image: undefined
      }),
      methods: {
          ...mapActions(useMainStore, ['updateMenu']),
          handleMenuAdd() {
              this.updateMenu(this.name, this.description, this.price, this.image)
          }
      }
     
 
    }
</script>

<style lang="scss" scoped>

</style>