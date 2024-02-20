<docs>
---
title: 自动聚焦
---

`input`在DOM元素加载完自动聚焦
</docs>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const value = ref('')
const inputRef = ref()
onMounted(() => {
  inputRef.value.focus()
})
</script>

<template>
  <div>
    <t-input ref="inputRef" v-model="value" />
  </div>
</template>
