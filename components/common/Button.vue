<template>
  <button
    class="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition duration-200"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['click'])

function onClick(event: MouseEvent) {
  emit('click', event)
}
</script>
