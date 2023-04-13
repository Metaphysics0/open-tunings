<script lang="ts">
  import { moods, styles } from '../../constants/tags';
  import { InputChip } from '@skeletonlabs/skeleton';
  import TagsModal from './TagsModal.svelte';
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import { AVAILABLE_TAGS } from '../../constants/tags';
  import { _noop } from '../../utils';

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

  onMount(() => {
    addCloseModalEventListener();
  });

  let tagModalInputValues = { moods, styles };
  function filterModalInputValues(input: Event) {
    // @ts-ignore
    const inputValue = input?.srcElement?.value;
    // @ts-ignore
    tagModalInputValues = {
      moods: moods.filter((i) => i.label.startsWith(inputValue)),
      styles: styles.filter((i) => i.label.startsWith(inputValue))
    };
  }
</script>

<svelte:head>
  <style>
    .input-chip.textarea {
      width: 100%;
      padding: 0 !important;
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

    .invalid-shake {
      animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      /* red-400 */
      border: 1px solid rgb(248 113 113);
      color: 1px solid rgb(248 113 113);
      /* red-300 */
      background-color: rgb(254 242 242);
      border-radius: 0.75em;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      perspective: 1000px;
    }

    @keyframes shake {
      10%,
      90% {
        transform: translate3d(-1px, 0, 0);
      }

      20%,
      80% {
        transform: translate3d(2px, 0, 0);
      }

      30%,
      50%,
      70% {
        transform: translate3d(-4px, 0, 0);
      }

      40%,
      60% {
        transform: translate3d(4px, 0, 0);
      }
    }
  </style>
</svelte:head>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
  class="w-full flex flex-col items-start justify-between text-lg"
  id={tagIdMap.inputWrap}
  on:click={openTagsModal}
  on:keydown={(e) => e.key === 'tab' && openTagsModal()}
>
  <span class="font-bold">
    Tags
    {#if required}
      <span class="text-red-6">*</span>
    {/if}
  </span>
  <InputChip
    whitelist={AVAILABLE_TAGS}
    on:input={filterModalInputValues}
    {required}
    bind:value={tags}
    invalid="invalid-shake"
    name="Tags"
    placeholder="Add Tags (at least 1)"
  />
</div>
{#if shouldShowModal}
  <TagsModal
    values={tagModalInputValues}
    {tagsMaxLength}
    idMap={tagIdMap}
    bind:tags
  />
{/if}
