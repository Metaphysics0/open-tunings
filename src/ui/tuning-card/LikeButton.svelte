<script lang="ts">
  import FaRegHeart from 'svelte-icons/fa/FaRegHeart.svelte';
  import FaHeart from 'svelte-icons/fa/FaHeart.svelte';
  import type { UserSubmittedTuning } from '@prisma/client';
  import { browser } from '$app/environment';
  import { localStorageKeyForLikedTunings } from '../../constants/user';

  export let tuning: UserSubmittedTuning;

  let likedTunings = browser
    ? localStorage.getItem(localStorageKeyForLikedTunings)
    : null;

  function likeTuning() {
    const currentLikedTunings = likedTunings ? likedTunings.split(',') : [];

    localStorage.setItem(
      localStorageKeyForLikedTunings,
      [...currentLikedTunings, tuning.id].join(',')
    );
  }

  function unLikeTuning() {
    const currentLikedTunings = likedTunings ? likedTunings.split(',') : [];

    localStorage.setItem(
      localStorageKeyForLikedTunings,
      currentLikedTunings.filter((id) => id !== tuning.id).join(',')
    );
  }

  function _hasLikedTuning(): boolean {
    if (!browser) return false;
    const likedTunings = localStorage.getItem(localStorageKeyForLikedTunings);
    if (!likedTunings) return false;

    return !!likedTunings?.split(',')?.find((id) => id === tuning.id);
  }
  let hasLiked = _hasLikedTuning();

  function onClick() {
    if (_hasLikedTuning()) {
      unLikeTuning();
      return;
    }

    likeTuning();
  }
</script>

<button
  class="cursor-pointer h-fit w-fit p-2 px-3 items-center"
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
    transition: color 0.2s, opacity 0.2s;
  }

  button[status='liked'] {
    background-image: linear-gradient(90deg, #f4f4f4 0%, #efefef 100%);
    color: #000;
    opacity: 1;
    border-color: transparent;
  }

  button:hover:after {
    opacity: 0.02;
  }
</style>
