<script>
  import CreateButton from './CreateButton.svelte';
  import Logo from './Logo.svelte';
  import { page } from '$app/stores';
</script>

<nav class="font-sans p-4 m-auto flex items-center justify-between">
  <Logo />
  {#if $page.url.pathname.includes('/create')}
    <a href="/" class="font-500 text-lg">Home</a>
  {:else}
    <div class="flex items-center text-slate-600 font-500 text-lg">
      <a href="/create" class="font-500 text-lg">Create</a>
    </div>
  {/if}
</nav>
