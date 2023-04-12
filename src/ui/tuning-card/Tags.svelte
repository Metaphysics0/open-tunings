<script lang="ts">
  import type { UserSubmittedTuning } from '@prisma/client';
  import type { CssClasses } from '@skeletonlabs/skeleton';
  export let tuning: UserSubmittedTuning;

  export let bgColor: CssClasses = 'bg-slate-2';
  export let size: 'sm' | 'md' | 'lg' = 'md';

  const sizeClass: CssClasses = {
    sm: '',
    md: '',
    lg: 'text-lg'
  }[size];

  const tags = tuning.tags;
</script>

<div class="flex flex-wrap justify-center">
  {#each tags as tag}
    <div
      class={['p-1 px-2 mx-2 my-1 rounded-12', bgColor, sizeClass].join(' ')}
    >
      {tag}
    </div>
  {/each}
</div>
