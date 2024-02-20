<docs>
---
title: 禁用按钮
---

设置`disabled`属性为`true`即可禁用按钮
</docs>

<script setup lang="ts">
function handleClick() {
  console.log('click')
}
</script>

<template>
  <div>
    <t-button disabled @click="handleClick">
      Button
    </t-button>
    <t-button disabled type="dashed" @click="handleClick">
      Button
    </t-button>
    <t-button disabled type="primary" @click="handleClick">
      Button
    </t-button>
  </div>
</template>
