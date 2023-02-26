<script lang="ts">
  import FaAngleUp from 'svelte-icons/fa/FaAngleUp.svelte';
  import FaAngleDown from 'svelte-icons/fa/FaAngleDown.svelte';
  export let direction: 'up' | 'down';

  function onClick(): void {
    console.log('I WAS CLICKED');
  }
</script>

<button on:click={onClick} class="w-8 h-7 opacity-40">
  {#if direction === 'up'}
    <FaAngleUp />
  {:else}
    <FaAngleDown />
  {/if}
</button>
