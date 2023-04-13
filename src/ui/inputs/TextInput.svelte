<script lang="ts">
  import { getRandomTuningName } from '../../constants/tunings';
  import TiArrowShuffle from 'svelte-icons/ti/TiArrowShuffle.svelte';
  export let value: string;
  export let name: string;
  export let id: string = 'my-input';
  export let placeholder: string = '';

  export let onClick: svelte.JSX.MouseEventHandler<HTMLInputElement> = () => {};
  export let label: string;
  export let required: boolean = false;
  export let customValidityMessage: string | null = null;

  function randomizeName(): void {
    value = getRandomTuningName();
  }

  function handleValidity(e: Event): void {
    if (!customValidityMessage) return;
    const input = e.target as HTMLInputElement;
    input.setCustomValidity(customValidityMessage);
  }
  function clearValidationMessage(e: Event): void {
    if (!customValidityMessage) return;
    const input = e.target as HTMLInputElement;
    input.setCustomValidity('');
  }
</script>

<label class="flex flex-col justify-between text-lg">
  <span class="font-bold"
    >{label}

    {#if required}
      <span class="text-red-6">*</span>
    {/if}
  </span>
  <div class="relative">
    <input
      class="border-slate-200 border p-2 rounded-xl outline-none w-full"
      type="text"
      {name}
      {id}
      {value}
      {required}
      {placeholder}
      on:input={clearValidationMessage}
      on:invalid={handleValidity}
      on:click={onClick}
    />
    <button
      class="absolute right-3 top-2.5 outline-none w-6  opacity-45"
      type="button"
      on:click={randomizeName}
    >
      <TiArrowShuffle />
    </button>
  </div>
</label>
