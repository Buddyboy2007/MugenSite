<template>
  <div id="rightPanel">
    <div id="homeScreen">
      <div id="homeButtons">
        <button id="enterList" @click="$emit('enter-list')">ENTER CHARACTER LIST</button>
        <button @click="open('https://www.twitch.tv/lancero7777')">TWITCH – LANCERO</button>
        <button @click="open('https://discord.gg/YubRRyQhVg')">DISCORD</button>
        <button @click="open('https://en.wikipedia.org/wiki/Mugen_(game_engine)')">MUGEN WIKI</button>
      </div>

      <div id="featured">
        <h2>★ Featured Fighters ★</h2>
        <div class="featureGrid">
          <slot name="featured" />
        </div>
      </div>
    </div>

    <div id="characterInfo">
      <slot name="characterInfo" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits<{ (e: "enter-list"): void }>();

function open(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}
</script>
