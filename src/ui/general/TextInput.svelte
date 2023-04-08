<script lang="ts">
  export let value: string;
  export let name: string;
  export let id: string = 'my-input';
  export let placeholder: string = '';

  export let onClick: svelte.JSX.MouseEventHandler<HTMLInputElement> = () => {};
  export let autofocus: boolean = false;
  export let label: string;
</script>

<!-- svelte-ignore a11y-autofocus -->
<label>
  {label}
  <input
    type="text"
    {name}
    {id}
    {value}
    {placeholder}
    {autofocus}
    on:click={onClick}
  />
</label>

<style>
  input {
    outline: none;
  }
</style>
