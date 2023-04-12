<script lang="ts">
  export let value: string;
  export let name: string;
  export let id: string = 'my-input';
  export let placeholder: string = '';

  export let onClick: svelte.JSX.MouseEventHandler<HTMLInputElement> = () => {};
  export let label: string;
  export let required: boolean = false;
  export let customValidityMessage: string | null = null;

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

<label class="flex justify-between text-lg">
  {label}
  <input
    class="border-slate-200 border p-2 rounded-xl outline-none w-1/2"
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
</label>
