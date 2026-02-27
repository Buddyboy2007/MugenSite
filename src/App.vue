<template>
  <div class="page" @click="audio.armOnce()" tabindex="0">
    <header class="topbar">
      <h1>Ikemen Bridge UI</h1>
      <div class="actions">
        <button class="btn" @click.stop="audio.toggle()">
          {{ audio.isPlaying ? "🔊 Pause" : "🎵 Play" }}
        </button>
        <button class="btn" @click.stop="characters.refresh()">🔄 Refresh</button>
      </div>
    </header>

    <AmbientBubbles />

    <!-- Put /public/audio/bgm.mp3 if you want music -->
    <audio ref="bgmEl" preload="auto" :src="bgmSrc" loop />

      <HomeHeader >
        <template #featured>
          <FeaturedFighters :fighters="featuredCharacters" />
        </template>

        <template #characterInfo>
          <CharacterList 
            :items="items"
            :loading="loading"
            :error="error"
          />
        </template>
      </HomeHeader>
  </div>
</template> 
<script setup lang="ts">
import { onMounted, ref } from "vue";
import AmbientBubbles from "./components/AmbientBubbles.vue";
import FeaturedFighters from "./components/FeaturedFighters.vue";
import CharacterList, { type CharacterVm } from "./components/CharacterList/CharacterList.vue";
import HomeHeader from "./components/HomeHeader/HomeHeader.vue";
/**
 * Set this in .env.local if you want:
 * VITE_API_BASE=http://127.0.0.1:5057
 */
const API_BASE = import.meta.env.VITE_API_BASE ?? "http://127.0.0.1:5057";

// Optional BGM
const bgmSrc = "/audio/bgm.mp3";
const bgmEl = ref<HTMLAudioElement | null>(null);
  
const showList = ref(false);

const audio = (() => {
  const isArmed = ref(false);
  const isPlaying = ref(false);

  async function armOnce() {
    if (isArmed.value) return;
    isArmed.value = true;

    const el = bgmEl.value;
    if (!el) return;

    try {
      el.volume = 0.7;
      await el.play();
      isPlaying.value = true;
    } catch {
      // ignore autoplay blocks
    }
  }

  async function toggle() {
    const el = bgmEl.value;
    if (!el) return;

    if (el.paused) {
      await armOnce();
      if (el.paused) {
        try {
          await el.play();
          isPlaying.value = true;
        } catch {}
      }
    } else {
      el.pause();
      isPlaying.value = false;
    }
  }

  return { armOnce, toggle, isPlaying };
})();

const featuredCharacters = [
  "Ultimate_Ken",
  "MvC2Hulk",
  "MvC2_Thor",
  "Spiderman",
];

type ApiCharacter = {
  filename: string;
  name: string;
  displayName: string;
  author?: string | null;
};
const items = ref<CharacterVm[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);

async function refresh() {
  loading.value = true;
  error.value = null;

  try {
    const res = await fetch(`${API_BASE}/api/characters`, {
      method: "GET",
      headers: { Accept: "application/json" },
    });

    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);

    const data = (await res.json()) as ApiCharacter[] | { items: ApiCharacter[] };
    const list = Array.isArray(data) ? data : data.items;

    items.value = (list ?? []).map((c) => ({
      id: c.filename,
      displayName: c.displayName ?? c.name,
      imageUrl: null,
      author: c.author ?? null,
      filename: c.filename,
      name: c.name,
    }));
  } catch (e: any) {
    error.value = e?.message ?? String(e);
  } finally {
    loading.value = false;
  }
}

const characters = { refresh };

onMounted(() => {
  characters.refresh();
});
</script>
<style src="./App.css" scoped></style>
