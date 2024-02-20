<docs>
---
title: 禁用输入框
---

设置`disabled`属性为`true`即可禁用按钮
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div>
    <t-input v-model="value" disabled />
  </div>
</template>
