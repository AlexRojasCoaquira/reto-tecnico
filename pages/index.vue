<template>
  <main class="container mx-auto p-4">
    <h1>LISTA DE EVENTOS</h1>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
      <EventCard :item="item" v-for="item of data" :key="item.id"></EventCard>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useEvent } from '../composables/useEvents'
const { data } = await useEvent()
</script>
