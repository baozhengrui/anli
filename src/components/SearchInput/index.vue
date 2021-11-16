<template>
    <input class="input" v-bind="$attrs" />
</template>

<style lang="less" scoped>

.input{
    padding: 8px 10px;
    outline: none;
    border: 1px solid #e5e5e5;
    background-color: var(--gray);
    border-radius: var(--border-radius);
}
</style>