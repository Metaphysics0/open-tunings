<script lang="ts">
  import FaVolumeMute from 'svelte-icons/fa/FaVolumeMute.svelte';
  import FaVolumeUp from 'svelte-icons/fa/FaVolumeUp.svelte';
  import { isBrowserMuted } from '../../stores';

  let hasUserMuted: boolean;
  isBrowserMuted.subscribe((val) => {
    hasUserMuted = val;
  });

  function onClick() {
    isBrowserMuted.set(!hasUserMuted);
  }
</script>

<button on:click={onClick} class="text-slate-400 w-9 float-right">
  {#if hasUserMuted}
    <FaVolumeMute />
  {:else}
    <FaVolumeUp />
  {/if}
</button>
