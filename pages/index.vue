<template>
  <main class="container mx-auto p-4">
    <h1>LISTA DE EVENTOS</h1>
    <div v-if="isLoading" class="text-center text-white py-10">
      Cargando eventos...
    </div>
    <div v-else-if="data.length" class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
      <EventCard :item="item" v-for="item of data" :key="item.id"></EventCard>
    </div>
    <div v-else>
      No se encontraron eventos.
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useEvent } from '../composables/useEvents'
import { useServiceStatus } from '@/composables/useServiceStatus'
const { data, status, error } = await useEvent()
const {
  isLoading,
  hasError,
  hasData,
  isEmpty,
  errorMessage
} = useServiceStatus(data, error, status)
</script>
