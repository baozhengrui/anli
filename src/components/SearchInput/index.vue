<template>
    <input class="input" v-bind="$attrs" />   
     <!-- //包含了父作用域中不作为prop被识别（且获取）的特性绑定（class 和 style除外）。
     //当一个组件没有声明任何prop时，这里会包含所有父作用域的绑定（class 和style除外），
     //并且可以通过v0-bind=“$attrs" 传入内部组件---在创建高级别的组件时非常有用。 -->
</template>
<script lang="ts">
import { defineComponent,PropType, ref, watch } from "@vue/runtime-core";

export default defineComponent({
    props: {
        modelValue:{
           type: String as PropType<string>,
        //    defalut: ''
            required: true
        } 
    },
    emots: ['update: modelValue'],
    setup( props, ctx) {
        const inputValue = ref<string>(props.modelValue)
        // watch( () => props.modelValue, (currentValue) => {
        //     inputValue.value = currentValue;
        // }, { immediate: true})

        watch(() => inputValue.value, (currentValue) => {
            ctx.emit('update: modelValue', currentValue)
        })
    }
}) ;

</script>


<style lang="less" scoped>

.input{
    padding: 8px 10px;
    outline: none;
    border: 1px solid var(--gray);
    background-color: var(--gray);
    border-radius: var(--border-radius);
    transition: .3s ease;
    &:focus {
        border-color: var(--primary-color);
    }
}
</style>