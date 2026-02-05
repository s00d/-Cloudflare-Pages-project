<script setup lang="ts">
const colors = ['#f87171', '#fb923c', '#fbbf24', '#facc15', '#a3e635', '#4ade80', '#34d399', '#2dd4bf', '#22d3ee', '#38bdf8', '#60a5fa', '#818cf8', '#a78bfa', '#c084fc', '#e879f9', '#f472b6', '#fb7185']
const color = useState('color', () => colors[Math.floor(Math.random() * colors.length)])
</script>

<template>
  <div class="centered">
    <h1 :style="{ color }">
      {{ $t('title') }}
    </h1>

    <p class="description">
      {{ $t('description') }}
    </p>

    <div class="contact-info">
      <p>{{ $t('email') }}: example@test.com</p>
      <p>{{ $t('phone') }}: +1 234 567 890</p>
    </div>

    <div id="locale-switcher">
      <i18n-switcher />
    </div>

    <nav class="nav-links">
      <NuxtLink :to="$localeRoute({ name: 'index' })">
        {{ $t('nav.home') }}
      </NuxtLink>
      <NuxtLink :to="$localeRoute({ name: 'about' })">
        {{ $t('nav.about') }}
      </NuxtLink>
    </nav>
  </div>
</template>

<style scoped>
.centered {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
h1 {
  font-size: 32px;
}
.description {
  font-size: 18px;
  color: #666;
  max-width: 600px;
  margin: 20px auto;
  line-height: 1.6;
}
.contact-info {
  margin: 20px 0;
  color: #555;
}
.contact-info p {
  margin: 8px 0;
}
.nav-links {
  margin-top: 30px;
  display: flex;
  gap: 20px;
  justify-content: center;
}
@media (min-width: 768px) {
  h1 {
    font-size: 64px;
  }
}
a {
  color: #888;
  text-decoration: none;
  font-size: 18px;
}
a:hover {
  text-decoration: underline;
}
</style>
