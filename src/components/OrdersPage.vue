!<template>
    <div>
        <ul>
            <li v-for="item in orderArr" :key="item.menuId">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'pinia'
import { useMainStore } from '@/store/main'
    export default {
        name: "OrdersPage",
        computed: {
            ...mapState(useMainStore, ['orderArr'])
        },
        data: () => ({
            
        })
    }
</script>

<style lang="scss" scoped>

</style>