export function useDebouncedRef(value: any, delay = 300) {
  const state = ref(value)
  let timeout: any

  watch(
    () => value,
    (newVal) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        state.value = newVal
      }, delay)
    },
  )

  return state
}
