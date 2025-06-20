type FetxhStatus = 'idle' | 'pending' | 'success' | 'error'
export function useServiceStatus<T>(
  data: Ref<T | null>,
  error: Ref<any>,
  status: Ref<FetxhStatus>
) {
  const isLoading = computed(() => status.value === 'pending')
  const hasError = computed(() => status.value === 'error' && !!error.value)
  const hasData = computed(() => status.value === 'success' && !!data.value)
  const isEmpty = computed(() => status.value === 'success' && Array.isArray(data.value) && data.value.length === 0)

  const errorMessage = computed(() => {
    if (!error.value) return null
    return error.value.statusMessage || error.value.message || 'Error desconocido'
  })

  return {
    isLoading,
    hasError,
    hasData,
    isEmpty,
    errorMessage,
  }
}