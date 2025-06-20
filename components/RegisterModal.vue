<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                REGISTRE SU COMENTARIO
              </DialogTitle>
              <form @submit.prevent="handleSubmit" class="space-y-4 max-w-lg mx-auto bg-white p-6 rounded-xl">
                <CommonInput :disabled="isLoad" label="Nombre" required v-model="form.name" />
                <CommonInput :disabled="isLoad" label="Email" required type="email" v-model="form.email"/>
                <CommonInput :disabled="isLoad" label="Comentario" textarea v-model="form.description" />
                <small class="msg-error">{{msgError}}</small>
                <button
                  type="submit"
                  :disabled="isLoad"
                  class="w-full bg-sky-600 text-white py-2 rounded-md hover:bg-sky-700 transition"
                >
                  {{isLoad ? 'Enviando' : 'Enviar'}}
                </button>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import { validateEmail } from '@/utils/validate'
interface Comment {
  name: string,
  email: string,
  description?: string,
}
const formDefault: Comment ={
  name: '',
  email: '',
  description: ''
}
const emit = defineEmits<{
  (e: 'close', value: boolean): void
}>()

const isOpen = ref(true)
const isLoad = ref<boolean>(false)
const msgError = ref<string>('')
const form = reactive<Comment>(formDefault)


const closeModal = () => {
  emit('close', false)
}
const openModal = () => {
  isOpen.value = true
}
const handleSubmit = async () => {
  try {
    isLoad.value = true
    console.log('validateEmail', validateEmail('asdasd@asd.com'));
    if (!form.name || !form.email) {
      msgError.value = 'Por favor, completa todos los campos obligatorios.'
      isLoad.value = false
      return
    }
    if (!validateEmail(form.email)) {
      msgError.value = 'Ingresa un correo electrónico válido.'
      isLoad.value = false
      return
    }
    msgError.value = ''
    setTimeout(() => {
      isLoad.value = false
      alert('Formulario enviado con éxito')
      closeModal()
    }, 3000)
  } catch (error) {
    console.log('err', error)
    msgError.value = 'Ocurrió un error al procesar el formulario.'
    isLoad.value = false
  }
}

</script>
