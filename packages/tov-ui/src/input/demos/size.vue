<docs>
---
title: 按钮大小
---

通过`size`属性可以控制按钮大小
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div>
    <t-input v-model="value" size="small" />
    <t-input v-model="value" size="default" />
    <t-input v-model="value" size="large" />
  </div>
</template>
