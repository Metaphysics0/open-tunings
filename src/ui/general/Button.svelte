<script lang="ts">
  export let icon: any;
  export let text: string;
  export let color: 'red' | 'blue' | 'slate' = 'red';
  // export let onClick: (e: SubmitEvent) => Promise<void>;
</script>

<button
  class={`w-fit py-2 px-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold p-2 rounded-lg shadow-md transition duration-75 cursor-pointer`}
>
  <span class="block h-5 flex">
    {#if icon}
      <svelte:component this={icon} />
    {/if}
    <span class="ml-1 font-bold tracking-wide">{text}</span>
  </span>
</button>
