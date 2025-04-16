import { defineStore } from 'pinia'

const defaultState = {
  data: [] as any,
}

export const useRecentlyViewedStore = defineStore('viewed', {
  state: () => ({ ...defaultState }),
  actions: {
    setRecentlyViewed(item: any) {
      this.data.push(item)
    },
    resetViewed() {
      Object.assign(this, defaultState)
    },
  },
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
  },
})
