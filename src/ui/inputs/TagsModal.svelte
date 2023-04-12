<script lang="ts">
  import { fade } from 'svelte/transition';
  import { moods } from '../../constants/tags';

  export let idMap: Record<string, string>;
  export let tags: string[];
  export let tagsMaxLength: number;

  const addOrRemoveTag = (tagLabel: string) =>
    !tags.includes(tagLabel) && tags.length !== tagsMaxLength
      ? (tags = [...tags, tagLabel])
      : (tags = tags.filter((tag) => tag !== tagLabel));
</script>

<div
  transition:fade={{ duration: 75 }}
  class="absolute bg-white shadow-md p-3 rounded-lg right-0 w-3/4"
  id={idMap.modalWrap}
>
  <section id={idMap.modalListWrap}>
    <p class="text-center text-lg font-bold mb-1">Available Tags:</p>
    <div class="flex flex-wrap" id={idMap.modalTagItem}>
      {#each moods as mood}
        <button
          id={idMap.modalTagItem}
          on:click={() => addOrRemoveTag(mood.label)}
          type="button"
          class="w-fit bg-white border-slate-2 border cursor-pointer m-1 p-1 px-3 rounded-full hover:bg-slate-2 transition duration-300"
          class:is-active={tags.includes(mood.label)}
        >
          {mood.emoji}
          {mood.label}
        </button>
      {/each}
    </div>
  </section>
</div>

<style>
  .is-active {
    /* bg-slate-2 */
    background: rgba(226, 232, 240, 1);
  }
</style>
