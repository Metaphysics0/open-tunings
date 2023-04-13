<script lang="ts">
  import CreateButton from './CreateButton.svelte';
  import Logo from './Logo.svelte';
  import { page } from '$app/stores';

  const NAVBAR_LINKS: INavLink[] = [
    {
      title: 'Create 🚀',
      href: '/create'
    },
    {
      title: 'About',
      href: '/about'
    },
    {
      title: 'Home',
      href: '/'
    }
  ];

  interface INavLink {
    title: string;
    href: string;
  }

  let scrollYAxis: number;
</script>

<nav
  class="font-sans p-4 m-auto flex items-center justify-between sticky top-0 mb-8 bg-white z-100 bg-opacity-95"
  class:with-border={scrollYAxis > 0}
>
  <Logo />
  <div>
    {#each NAVBAR_LINKS as navLink}
      <a
        href={navLink.href}
        class="font-500 text-lg mx-3"
        class:font-extrabold={$page.url.pathname === navLink.href}
        >{navLink.title}</a
      >
    {/each}
  </div>
</nav>

<svelte:window bind:scrollY={scrollYAxis} />

<style>
  nav {
    transition: all 0.3s ease;
  }
  .with-border {
    border-bottom: 1px solid rgb(203 213 225);
  }
</style>
