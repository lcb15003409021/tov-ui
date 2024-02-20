<docs>
---
title: 按钮大小
---

通过`size`属性可以控制按钮大小
</docs>

<script setup lang="ts">
function handleClick() {
  console.log('click')
}
</script>

<template>
  <div>
    <t-button size="small" @click="handleClick">
      Button
    </t-button>
    <t-button size="default" type="dashed" @click="handleClick">
      Button
    </t-button>
    <t-button size="large" type="primary" @click="handleClick">
      Button
    </t-button>
  </div>
</template>
