<template>
  <section class="bg-gradient-to-b from-white via-gray-100 to-sky-50 py-10 px-4">
    <div class="text-right mb-4">
      <CommonButton @click="showModal">
        Registrarme
      </CommonButton>
      <RegisterModal v-if="isOpen" @close="isOpen = false"></RegisterModal>
    </div>
    <div class="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden md:flex">
      <div class="md:w-1/3">
        <img :src="event.image.original" :alt="event.name" class="w-full h-full object-cover" />
      </div>

      <div class="p-6 md:w-2/3 space-y-4">
        <h1 class="text-3xl font-extrabold text-gray-800">{{ event.name }}</h1>

        <div class="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
          <p><span class="font-medium">Language:</span> {{ event.language }}</p>
          <p><span class="font-medium">Type:</span> {{ event.type }}</p>
          <p><span class="font-medium">Status:</span> {{ event.status }}</p>
          <p><span class="font-medium">Runtime:</span> {{ event.runtime }} min</p>
          <p><span class="font-medium">Premiered:</span> {{ event.premiered }}</p>
          <p><span class="font-medium">Ended:</span> {{ event.ended }}</p>
          <p><span class="font-medium">Genres:</span> {{ event.genres.join(', ') }}</p>
          <p><span class="font-medium">Schedule:</span>
            {{ event.schedule.days.join(', ') }} at {{ event.schedule.time }}
          </p>
          <p><span class="font-medium">Rating:</span> {{ event.rating.average ?? 'N/A' }}</p>
        </div>

        <div class="border-t pt-4">
          <div class="prose prose-sm text-gray-700 max-w-none" v-html="event.summary" />
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import type { Show } from "../../interfaces/model/event"
const route = useRoute()
const id = route.params.id
const isOpen = ref<boolean>(false)
const { data: event, error } = await useFetch(`https://api.tvmaze.com/shows/${id}`)

const showModal = () => {
  isOpen.value = true;
}
if (error.value) {
  console.error('Error cargando evento:', error.value)
}
</script>
