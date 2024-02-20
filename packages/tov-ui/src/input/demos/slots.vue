<docs>
---
title: 插槽使用
---

这是一个`input`使用`slot`插槽的例子
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div>
    <t-input v-model="value">
      <template #prefix>
        A
      </template>
      <template #suffix>
        B
      </template>
    </t-input>
  </div>
</template>
