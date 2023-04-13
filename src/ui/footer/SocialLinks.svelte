<script lang="ts">
  import GoMarkGithub from 'svelte-icons/go/GoMarkGithub.svelte';
  import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
  import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte';

  const SOCIAL_LINKS: ISocialLink[] = [
    {
      href: 'https://github.com/Metaphysics0/songsterr-downloader',
      icon: GoMarkGithub
    },
    {
      href: 'https://www.instagram.com/mathrockryan/',
      icon: FaInstagram
    },
    {
      href: 'https://www.linkedin.com/in/ryanroberts0/',
      icon: FaLinkedinIn
    }
  ];

  interface ISocialLink {
    href: string;
    icon: any;
  }
</script>

<section class="flex items-center mx-auto w-fit h-7">
  {#each SOCIAL_LINKS as link}
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      class="h-full mx-2.5 opacity-50 hover:opacity-100 transition-opacity"
    >
      <svelte:component this={link.icon} />
    </a>
  {/each}
</section>
