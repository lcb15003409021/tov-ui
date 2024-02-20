<script setup lang="ts">
import { inherits } from 'node:util'
import { nextTick, onMounted, ref } from 'vue'
import { useClassnames } from '@tov-ui/utils'
import { omit, pick } from 'lodash-es'
import type { InputProps } from './interface'
import './style/index.less'

defineOptions({
  name: 'TInput',
  inheritAttrs: false,
})

const props = defineProps<InputProps>()
const emit = defineEmits<{
  'update:modelValue': [string]
}>()
defineSlots<{
  prefix(): any
  suffix(): any
}>()
const { cx, c, cm, ce } = useClassnames('input')
const inputRef = ref<HTMLInputElement>()
const cls = cx(() => {
  return {
    [c()]: true,
    [c(cm('disabled'))]: props.disabled,
    [c(cm(props.size))]: !!props.size,
  }
})

const inputcls = cx(() => {
  return {
    [c('input')]: true,
  }
})
function setInputValue() {
  const _input = inputRef.value
  console.log(inputRef.value, props.modelValue)
  if (!_input || _input.value === props.modelValue)
    return

  _input.value = props.modelValue ?? ''
}

function handleInput(e: Event) {
  const target = e.target as HTMLInputElement

  if (props.modelValue === target.value)
    return
  emit('update:modelValue', target.value)
  nextTick(() => {
    setInputValue()
  })
}
onMounted(() => {
  setInputValue()
})

function focus() {
  inputRef.value.focus()
}

function blur() {
  inputRef.value.blur()
}
defineExpose({
  focus,
  blur,
})
</script>

<template>
  <div :class="cls" v-bind="omit($attrs, originalInputProps)">
    <span v-if="$slots.prefix" :class="c(ce('prefix'))">
      <slot name="prefix" />
    </span>
    <input ref="inputRef" :class="inputcls" :value="modelValue" :disabled="disabled" v-bind="pick($attrs, originalInputProps)" @input="handleInput">
    <span v-if="$slots.suffix" :class="c(ce('suffix'))">
      <slot name="suffix" />
    </span>
  </div>
</template>
