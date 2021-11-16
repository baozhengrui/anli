<template>
  <div class="app-container">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Button>Hello Vue3</Button>
    <div>
      <SearchInput aria-placeholder="请输入" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchInput from './components/SearchInput/index.vue'


export default defineComponent({
  components: {
    SearchInput
  }
})

</script>
