// services/useCharacters.ts
import { ref } from "vue" 
import { CharacterVm } from "./characterVm"

export function useCharacters() {
  const items = ref<CharacterVm[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function refresh() {
    loading.value = true
    try {
      const res = await fetch("http://127.0.0.1:5057/api/characters")
      items.value = (await res.json()) as CharacterVm[]
    } catch {
      error.value = "Failed to load characters"
    } finally {
      loading.value = false
    }
  }

  return {
    items,
    loading,
    error,
    refresh
  }
}
