<script lang="ts">
  import { InputChip } from '@skeletonlabs/skeleton';
  export let tags: string[];
  export let name: string;
</script>

<svelte:head>
  <style>
    .input-chip-interface {
      background: #d2d6e3;
      padding: 10px;
      transition: all 0.3s ease;
      border-radius: 10px;
    }
    .input-chip-interface:hover {
      background: #dde1ee;
    }
    .input-chip-interface > form > input {
      text-align: center;
      padding: 5px;
    }
    .input-chip-list {
      cursor: pointer;
    }
    .input-chip-list > div > button {
      background: #272e49;
      color: #dcdcdc;
      padding: 3px 10px;
      border-radius: 4px;
      transition: all 0.3s ease;
    }
    .input-chip-list > div > button:hover {
      color: #fff;
      background: #272e49cb;
    }
  </style>
</svelte:head>

<InputChip bind:value={tags} {name} placeholder="Enter some tags!" />

<style>
</style>
