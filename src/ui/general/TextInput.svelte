<script lang="ts">
  export let value: string;
  export let name: string;
  export let id: string = 'my-input';
  export let placeholder: string = '';
  export let className: string = '';

  export let onClick: svelte.JSX.MouseEventHandler<HTMLInputElement> = () => {};
</script>

<input type="text" {name} {id} {value} {placeholder} on:click={onClick} />

<style>
  input {
    border: 1px solid black;
    border-radius: 100px;
  }
</style>
