
import type { Show } from '@/interfaces/model/event'
export const useEvent = (id: number): {
  data: Ref<Show[] | null>,
  error: Ref<any>,
  status: Ref<'idle' | 'pending' | 'success' | 'error'>
} => {
    const config = useRuntimeConfig();
    const url = `${config.public.apiBaseUrl}/shows/${id}`;
    const { data , status , error } = useFetch<Show[]>(url);
    return {
        data,
        status,
        error
    }

}