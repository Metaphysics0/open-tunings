<script>
  import CreateButton from './CreateButton.svelte';
  import Logo from './Logo.svelte';
  import { page } from '$app/stores';
</script>

<nav class="font-sans p-4 m-auto flex items-center justify-between">
  <Logo />
  <div>
    {#if $page.url.pathname.includes('/create')}
      <a href="/" class="font-500 text-lg">Home</a>
    {:else}
      <a href="/create" class="font-500 text-lg">Create</a>
    {/if}
  </div>
</nav>
