<template>
    <input class="input" v-bind="$attrs" />
</template>

<style scoped>
.input{
    padding: 6px 8px;
    outline: none;
    border: 1px solid var(--gray);
    background-color: var(--gray);
    border-radius: var(--border-radius);
}
</style>