<script lang="ts">
  import CreateButton from './CreateButton.svelte';
  import Logo from './Logo.svelte';
  import { page } from '$app/stores';

  const NAVBAR_LINKS: INavLink[] = [
    {
      title: 'Create 🚀',
      href: '/create'
    },
    // {
    //   title: 'About',
    //   href: '/about'
    // },
    {
      title: 'Home',
      href: '/'
    }
  ];

  interface INavLink {
    title: string;
    href: string;
  }
</script>

<nav class="font-sans p-4 m-auto flex items-center justify-between">
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
