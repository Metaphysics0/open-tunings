<script lang="ts">
  import { InputChip } from '@skeletonlabs/skeleton';
  import TagsModal from './TagsModal.svelte';
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import { AVAILABLE_TAGS } from '../../constants/tags';

  export let tags: string[];
  export let required: boolean = false;

  const tagIdMap = {
    modalWrap: 'tagsModal',
    modalListWrap: 'tagsModalList',
    modalTagItem: 'tagsModalItem',
    inputWrap: 'tagsInput'
  };

  const tagsMaxLength = 4;

  let shouldShowModal = false;

  function openTagsModal(): void {
    shouldShowModal = true;
  }

  function addCloseModalEventListener() {
    if (!browser) return;
    const inputElement = document.getElementById('tagsInput');

    document.addEventListener('click', (e) => {
      // @ts-ignore
      if (Object.values(tagIdMap).includes(e.target?.id)) {
        return;
      }

      if (
        inputElement &&
        inputElement !== e.target &&
        // @ts-ignore
        !inputElement.contains(e.target)
      ) {
        shouldShowModal = false;
      }
    });
  }

  function addCustomValidityMessage() {
    const input = document.querySelector('[name="Tags"]') as HTMLSelectElement;
    // const validityState = input.validity;
    input.setCustomValidity('You gotta fill this out, yo!');
    // if (validityState.valueMissing) {
    // }
  }

  onMount(() => {
    addCloseModalEventListener();
    addCustomValidityMessage();
  });
</script>

<svelte:head>
  <style>
    .input-chip.textarea {
      width: 50%;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }

    .input-chip-interface {
      padding: 3px 0px;
      transition: all 0.3s ease;
      border: 1px solid rgba(226, 232, 240, 1);
      border-radius: 0.75rem;
    }
    .input-chip-interface:hover {
      background: rgba(226, 232, 240, 0.2);
    }

    .input-chip-interface > form {
      flex: 1;
    }

    .input-chip-interface > form > input {
      text-align: left;
      padding: 5px;
      outline: none;
    }

    /* The list container */
    .input-chip-list {
      margin-left: 5px;
      margin-right: 5px;
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

<div
  class="w-full flex items-center justify-between text-lg"
  id={tagIdMap.inputWrap}
  on:click={openTagsModal}
  on:keydown={(e) => e.key === 'tab' && openTagsModal()}
>
  Tags (Max {tagsMaxLength}):
  <InputChip
    whitelist={AVAILABLE_TAGS}
    max={tagsMaxLength}
    {required}
    bind:value={tags}
    invalid="bg-red-2 py-.5! rounded-xl"
    name="Tags"
    placeholder="Add Tags"
  />
</div>
{#if shouldShowModal}
  <TagsModal {tagsMaxLength} idMap={tagIdMap} bind:tags />
{/if}