<script lang="ts">
  export let value: string;
  export let name: string;
  export let id: string = 'my-input';
  export let placeholder: string = '';

  export let onClick: svelte.JSX.MouseEventHandler<HTMLInputElement> = () => {};
  export let label: string;
</script>

<label class="flex justify-between text-lg">
  {label}
  <input
    class="border-slate-200 border p-2 rounded-xl outline-none w-1/2"
    type="text"
    {name}
    {id}
    {value}
    {placeholder}
    on:click={onClick}
  />
</label>
