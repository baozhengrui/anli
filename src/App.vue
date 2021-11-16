<template>
  <div class="app-container">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Button>Hello Vue3</Button>
    <div>
      <SearchInput v-model="keywords" placeholder="请输入" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchInput from './components/SearchInput/index.vue'


export default defineComponent({
  components: {
    SearchInput
  },
  data() {
    return {
      keywords: 'hehe'
    }
  },
  watch: {
    keywords(val) {
      console.log(val);

    }
  }
})

</script>
