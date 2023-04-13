<script lang="ts">
  import type { UserSubmittedTuning } from '@prisma/client';
  import type { CssClasses } from '@skeletonlabs/skeleton';
  import { moods, styles as styleTags } from '../../constants/tags';
  export let tuning: UserSubmittedTuning;

  export let bgColor: CssClasses = 'bg-slate-2';
  export let styles: CssClasses = 'bg-white border-slate-2 border';
  export let wrapperStyles: CssClasses = 'flex flex-wrap justify-center';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let withOverflowGradient: boolean = false;

  const storedTags = [...moods, ...styleTags];

  const sizeClass: CssClasses = {
    sm: '',
    md: '',
    lg: 'text-lg'
  }[size];
</script>

<section class={wrapperStyles} class:background-gradient={withOverflowGradient}>
  {#each tuning.tags as tag}
    <div
      class={['p-1 px-2 mx-2 my-1 rounded-12', bgColor, sizeClass, styles].join(
        ' '
      )}
    >
      {#if storedTags.find((mood) => mood.label === tag)?.emoji}
        <span class="mr-1">
          {storedTags.find((mood) => mood.label === tag)?.emoji}
        </span>
      {/if}
      <span>
        {tag}
      </span>
    </div>
  {/each}
</section>

<style>
  .background-gradient {
    mask-image: linear-gradient(90deg, #000 90%, transparent);
    -webkit-mask-image: linear-gradient(90deg, #000 90%, transparent);
  }
</style>
