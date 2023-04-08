<script lang="ts">
  export let title: string = 'Open Tunings 🎸';
  export let text: string =
    'Discover new and inspiring tunings for the guitar!';

  export let shouldHideSubtext: boolean = false;
  export let customStyles: string = '';
</script>

<header class="text-center">
  <h1 class={'font-600 text-4xl mb-1 ' + customStyles}>{title}</h1>
  {#if !shouldHideSubtext}
    <p class="text-lg">{text}</p>
  {/if}
</header>
