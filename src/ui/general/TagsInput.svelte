<script lang="ts">
  import { InputChip } from '@skeletonlabs/skeleton';
  export let tags: string[];
  export let name: string;
</script>

<svelte:head>
  <style>
    .input-chip.textarea {
      width: 100%;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }

    .input-chip-interface {
      padding: 3px 0px;
      transition: all 0.3s ease;
      border: 1px solid rgba(226, 232, 240, 1);
      border-radius: 1000px;

      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: flex-end;
    }
    .input-chip-interface:hover {
      background: rgba(226, 232, 240, 0.2);
    }
    .input-chip-interface > form > input {
      text-align: left;
      padding: 5px;
      outline: none;
    }

    /* The list container */
    .input-chip-list {
      margin: 0px 0px 0px 5px !important;
      cursor: default;
    }

    /* The chip item itself */
    .input-chip-list > div > button {
      background: rgba(226, 232, 240, 1);
      padding: 3px 10px;
      border-radius: 20px;
      transition: all 0.3s ease;
    }
    .input-chip-list > div > button:hover {
      background: rgb(203 213 225);
    }
  </style>
</svelte:head>

<InputChip bind:value={tags} {name} placeholder="Add Tags" />
