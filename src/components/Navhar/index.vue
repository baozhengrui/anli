<template>
    <div class="navbar">
        <div class="app-container flex end middle navbar-inner">
            <div> 
                <SearchInput placeholder="请输入关键字" v-model="keywords" />  
            </div> 
            <div class="btn-container">
                <Button type=""> 上传图片</Button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SearchInput from '../SearchInput/index.vue'

export default defineComponent({
    components: {
        SearchInput
    },
    setup() {
        const keywords = ref<string>('')
        return {
            keywords
        }
    },
})
</script>
 <style lang="less" scoped>
 .navbar{
    background-color: var(--white);
    box-shadow: 0 0 15px fade(#000, 10);
    .navbar-inner {
        height: 60px;
        gap: 20px;
    }
 }

 </style>