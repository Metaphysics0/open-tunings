<script lang="ts">
  import type { UserSubmittedTuning } from '@prisma/client';
  import CurrentTuningName from '../CurrentTuningName.svelte';
  import PlayAllNotesButton from '../PlayAllNotesButton.svelte';
  import Note from '../note/Note.svelte';
  import Tags from '../tuning-card/Tags.svelte';
  import LikeButton from '../tuning-card/LikeButton.svelte';
  import Timestamp from '../tuning-card/Timestamp.svelte';
  import { page } from '$app/stores';

  export let tuning: UserSubmittedTuning;

  const shouldShowActionButtons = $page.url.pathname.includes('/tuning/');
</script>

<main class="font-sans flex flex-col items-center mb-10 mx-auto sm:w-fit w-max">
  <CurrentTuningName nameFromParentComponent={tuning.friendlyName} />
  <Tags {tuning} bgColor="bg-white border-slate-2 border" size="lg" />
  <section class="flex my-6">
    {#each tuning.tuning as noteItem, index}
      <Note {noteItem} {index} />
    {/each}
  </section>
  <PlayAllNotesButton {tuning} />

  {#if shouldShowActionButtons}
    <div class="flex items-center w-full mt-5 justify-between">
      <div class="flex items-center">
        <LikeButton {tuning} />
        <!-- <div class="mr-3.5" />
        <CopyLink /> -->
      </div>
      <Timestamp {tuning} />
    </div>
  {/if}
</main>
