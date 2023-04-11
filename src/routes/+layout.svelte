<script lang="ts">
  import '@unocss/reset/tailwind.css';
  import 'uno.css';
  import Navbar from '../ui/navbar/Navbar.svelte';
</script>

<Navbar />
<slot />

<style global>
  html {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
  }
</style>
