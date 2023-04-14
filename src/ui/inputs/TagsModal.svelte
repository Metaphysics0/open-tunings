<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { IAvailableTag } from '../../constants/tags';

  export let idMap: Record<string, string>;
  export let tags: string[];
  export let tagsMaxLength: number;

  export let values: { moods: IAvailableTag[]; styles: IAvailableTag[] };

  const addOrRemoveTag = (tagLabel: string) =>
    !tags.includes(tagLabel) && tags.length !== tagsMaxLength
      ? (tags = [...tags, tagLabel])
      : (tags = tags.filter((tag) => tag !== tagLabel));
</script>

<div
  transition:fade={{ duration: 125 }}
  class="absolute bg-white shadow-md p-3 rounded-lg right-0 w-full"
  id={idMap.modalWrap}
>
  <section id={idMap.modalListWrap}>
    {#if !values.moods.length && !values.styles.length}
      <p class="text-center text-lg font-bold mb-1">No matching tags 😭</p>
    {/if}
    {#each Object.entries(values) as [title, tagList]}
      {#if tagList.length}
        <p class="text-center text-lg font-bold mb-1">{title}</p>
      {/if}
      <div class="flex flex-wrap" id={idMap.modalTagItem}>
        {#each tagList as tag}
          <button
            id={idMap.modalTagItem}
            on:click={() => addOrRemoveTag(tag.label)}
            type="button"
            class="w-fit bg-white border-slate-2 border cursor-pointer m-1 p-1 px-3 rounded-full hover:bg-slate-2 transition duration-300"
            class:is-active={tags.includes(tag.label)}
          >
            {tag.emoji}
            {tag.label}
          </button>
        {/each}
      </div>
    {/each}
  </section>
</div>

<style>
  .is-active {
    /* bg-slate-2 */
    background: rgba(226, 232, 240, 1);
  }
</style>
