<script lang="ts">
  const SOCIAL_LINKS: ISocialLink[] = [
    {
      href: 'https://www.instagram.com/mathrockryan/',
      iconClass: 'fa-instagram'
    },
    {
      href: 'https://www.linkedin.com/in/ryanroberts0/',
      iconClass: 'fa-linkedin'
    },
    {
      href: 'https://github.com/Metaphysics0/open-tunings',
      iconClass: 'fa-github'
    }
  ];

  interface ISocialLink {
    href: string;
    iconClass: string;
  }
</script>

<section class="flex items-center mx-auto w-fit text-4xl">
  {#each SOCIAL_LINKS as link}
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      class="h-full mx-2.5 opacity-50 hover:opacity-100 transition-opacity"
    >
      <i class={'fa-brands ' + link.iconClass} />
    </a>
  {/each}
</section>
