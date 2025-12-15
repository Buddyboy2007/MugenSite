<template>
  <div class="ambient" aria-hidden="true">
    <div
      v-for="b in bubbles"
      :key="b.id"
      class="bubble"
      :style="{
        width: b.size + 'px',
        height: b.size + 'px',
        left: b.left + 'vw',
        animationDuration: b.duration + 's',
        animationDelay: b.delay + 's',
        opacity: b.opacity
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

type Bubble = {
  id: string;
  size: number;
  left: number;
  duration: number;
  delay: number;
  opacity: number;
};

const bubbles = ref<Bubble[]>([]);
let timer: number | null = null;

function spawn() {
  const id = crypto.randomUUID();
  const size = 20 + Math.random() * 60;
  const left = Math.random() * 100;
  const duration = 8 + Math.random() * 10;
  const delay = 0;
  const opacity = 0.12 + Math.random() * 0.25;

  const bubble: Bubble = { id, size, left, duration, delay, opacity };
  bubbles.value.push(bubble);

  window.setTimeout(() => {
    bubbles.value = bubbles.value.filter((x) => x.id !== id);
  }, (duration + 2) * 1000);
}

onMounted(() => {
  timer = window.setInterval(spawn, 500);
});

onUnmounted(() => {
  if (timer) window.clearInterval(timer);
});
</script>

<style scoped>
.ambient {
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}

.bubble {
  position: absolute;
  bottom: -120px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.02));
  animation-name: floatUp;
  animation-timing-function: linear;
}

@keyframes floatUp {
  from {
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
  to {
    transform: translateY(-120vh) scale(1.05);
    filter: blur(0.3px);
  }
}
</style>
