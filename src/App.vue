<template>
  <div class="app-container">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Button>Hello Vue3</Button>
    <div>
      <SearchInput />
    </div>
  </div>
</template>npm init @vitejs/app my-vue-app -- --template vue

<script lang="ts">
import { defineComponent } from 'vue'
import SearchInput from './components/SearchInput/index.vue'


export default defineComponent({
  components: {
    SearchInput
  }
})

</script>

<style>
</style>
