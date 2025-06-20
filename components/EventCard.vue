<template>
  <div @click="goTo"
    class="card bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
    <picture>
      <source :srcset="item.image.medium" media="(max-width: 1024px)" />
      <img :src="item.image.original" :alt="item.name" class="w-full h-auto object-cover" />
    </picture>
    <div class="p-4">
      <h3 class="text-xl font-semibold text-gray-800">{{ item.name }}</h3>
      <p class="text-sm text-gray-600">Tipo: {{ item.type }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Show } from '../interfaces/model/event'

const props = defineProps<{
  item: Show;
}>()

const router = useRouter();

const goTo = () => {
  const { id } = props;
  router.push(`/events/${props.item.id}`)
}
</script>
