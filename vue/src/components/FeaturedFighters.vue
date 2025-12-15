<template>
  <div class="grid">
    <div v-for="name in fighters" :key="name" class="pill">
      <span class="badge">🎮</span>
      <span class="label">{{ name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ fighters: string[] }>();
</script>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.05);
}

.badge { opacity: 0.9; }

.label {
  font-weight: 600;
  letter-spacing: 0.2px;
}
</style>
