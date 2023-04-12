<script lang="ts">
  import type { UserSubmittedTuning } from '@prisma/client';
  import type { CssClasses } from '@skeletonlabs/skeleton';
  import { moods } from '../../constants/tags';
  export let tuning: UserSubmittedTuning;

  export let bgColor: CssClasses = 'bg-slate-2';
  const stylez = 'bg-white border-slate-2 border';
  export let size: 'sm' | 'md' | 'lg' = 'md';

  const sizeClass: CssClasses = {
    sm: '',
    md: '',
    lg: 'text-lg'
  }[size];
</script>

<div class="flex flex-wrap justify-center">
  {#each tuning.tags as tag}
    <div
      class={['p-1 px-2 mx-2 my-1 rounded-12', bgColor, sizeClass, stylez].join(
        ' '
      )}
    >
      {#if moods.find((mood) => mood.label === tag)?.emoji}
        {moods.find((mood) => mood.label === tag)?.emoji}
      {/if}
      {tag}
    </div>
  {/each}
</div>
