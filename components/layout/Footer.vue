<template>
  <footer class="bg-gray-900 text-white py-6">
    <div class="container mx-auto text-center">
      <p class="text-sm">
        © {{ year }} Reto tecnico. Todos los derechos reservados.
      </p>
    </div>
  </footer>
</template>
<script setup lang="ts">
const year = new Date().getFullYear()
</script>
