<script lang="ts">
  import type { UserSubmittedTuning } from '@prisma/client';
  import { likedTunings as likedTuningStore } from '../../stores';
  import { apiService } from '../../services/apiService';

  export let tuning: UserSubmittedTuning;

  $: tuningLikeAmount = tuning.likes;
  $: likedTunings = $likedTuningStore?.split(',');
  $: hasLiked = !!likedTunings?.find((id) => id === tuning.id);

  const updateTuning = (action: 'like' | 'unlike') =>
    apiService.userTunings[action](tuning);

  async function likeTuning() {
    const localStorageValuesToSet =
      likedTunings.filter(Boolean).length === 0
        ? [tuning.id]
        : [...likedTunings, tuning.id];

    likedTuningStore.set(localStorageValuesToSet.join(','));
    tuningLikeAmount++;
    updateTuning('like');
  }

  async function unLikeTuning() {
    const localStorageValuesToSet = likedTunings.filter(
      (id) => id !== tuning.id
    );

    likedTuningStore.set(localStorageValuesToSet.join(','));

    tuningLikeAmount--;
    updateTuning('unlike');
  }

  async function onClick() {
    hasLiked ? unLikeTuning() : likeTuning();
  }
</script>

<button
  class="cursor-pointer h-fit w-fit p-2 px-3 items-center"
  class:liked={hasLiked}
  on:click={onClick}
>
  <span class="mr-3 text-lg">
    {#if hasLiked}
      <i class="fa-solid fa-heart" />
    {:else}
      <i class="fa-regular fa-heart" />
    {/if}
  </span>
  <span>{tuningLikeAmount}</span>
</button>

<style>
  /* Took from https://www.colorhunt.co */
  button {
    background: #fff;
    border: 1px solid #ececec;
    border-radius: 10px;
    height: 38px;
    font-size: 14px;
    box-sizing: border-box;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    transition: all 0.2s, opacity 0.2s;
  }

  button:hover {
    background-image: linear-gradient(90deg, #f4f4f4 0%, #efefef 100%);
  }

  button.liked {
    background-image: linear-gradient(90deg, #f4f4f4 0%, #efefef 100%);
    color: #000;
    opacity: 1;
    border-color: transparent;
  }

  button:hover:after {
    opacity: 0.02;
  }
</style>
