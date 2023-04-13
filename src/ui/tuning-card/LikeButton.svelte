<script lang="ts">
  import FaRegHeart from 'svelte-icons/fa/FaRegHeart.svelte';
  import FaHeart from 'svelte-icons/fa/FaHeart.svelte';
  import type { UserSubmittedTuning } from '@prisma/client';
  import { browser } from '$app/environment';
  import { localStorageKeyForLikedTunings } from '../../constants/localStorage';
  import { likedTunings as likedTuningStore } from '../../stores';
  import { apiService } from '../../services/apiService';

  export let tuning: UserSubmittedTuning;

  let likedTunings: string[] = [];
  let hasLiked: boolean;

  likedTuningStore.subscribe((val) => {
    if (!browser) return;
    localStorage[localStorageKeyForLikedTunings] = val;
    likedTunings = val.split(',');
    hasLiked = !!likedTunings?.find((id) => id === tuning.id);
  });

  const updateTuning = async (likeCount: number) => {
    tuning.likes = likeCount;
    await apiService.userTunings.setLikes(tuning, likeCount);
  };

  async function likeTuning() {
    const localStorageValuesToSet =
      likedTunings.filter(Boolean).length === 0
        ? [tuning.id]
        : [...likedTunings, tuning.id];

    likedTuningStore.set(localStorageValuesToSet.join(','));
    updateTuning(tuning.likes + 1);
  }

  async function unLikeTuning() {
    const localStorageValuesToSet = likedTunings.filter(
      (id) => id !== tuning.id
    );
    likedTuningStore.set(localStorageValuesToSet.join(','));

    const likeCount = tuning.likes === 0 ? 0 : tuning.likes - 1;
    updateTuning(likeCount);
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
  <span class="h-4 mr-2">
    {#if hasLiked}
      <FaHeart />
    {:else}
      <FaRegHeart />
    {/if}
  </span>
  <span>{tuning.likes}</span>
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
