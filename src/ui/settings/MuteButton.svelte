<!-- <script lang="ts">
  import { isBrowserMuted } from '../../stores';
  import { localStorageKeyForMuteButton } from '../../constants/localStorage';
  import { browser } from '$app/environment';

  let hasUserMuted: boolean;
  isBrowserMuted.subscribe((val) => {
    hasUserMuted = val;
  });

  function onClick() {
    if (browser) {
      localStorage[localStorageKeyForMuteButton] = !hasUserMuted;
    }
    isBrowserMuted.set(!hasUserMuted);
  }
</script>

<button on:click={onClick} class="text-xl">
  {#if hasUserMuted}
    🔇
  {:else}
    🔊
  {/if}
</button> -->
