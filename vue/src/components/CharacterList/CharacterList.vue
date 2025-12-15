<template>
  <div>
    <div v-if="loading" class="muted">Loading characters…</div>
    <div v-else-if="error" class="error">⚠️ {{ error }}</div>

    <div v-else class="list">
      <div v-for="c in items" :key="c.name" class="row">
        <div class="avatar">
          <img v-if="c.imageUrl" :src="c.imageUrl" alt="" />
          <div v-else class="placeholder">?</div>
        </div>

        <div class="meta">
          <div class="name">{{ c.displayName }}</div>
          <div class="sub muted">
            <span v-if="c.author">by {{ c.author }} • </span>
            <span class="mono">{{ c.name }}</span>
          </div>
          <div class="sub muted mono">{{ c.filename }}</div>
        </div>
      </div>

      <div v-if="items.length === 0" class="muted">No characters returned.</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import { useCharacters } from "../../services/useCharacters" 

const characters = useCharacters()
const items = characters.items
const loading = characters.loading
const error = characters.error
onMounted(() => {
  characters.refresh()
})
 
</script>
<style src="./CharacterList.css" scoped></style> 