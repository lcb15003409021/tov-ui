<script setup lang="ts">
import { ref } from 'vue'
import { useClassnames } from '../gen-class'

const { c, cx } = useClassnames('button')
const testRef = ref(false)
function handClick() {
  testRef.value = !testRef.value
}
const cls = cx(() => ({
  c: true,
  d: testRef.value,
}))
</script>

<template>
  <div :class="c('primary')">
    {{ cls }}
    <button @click="handClick">
      an
    </button>
  </div>
</template>
