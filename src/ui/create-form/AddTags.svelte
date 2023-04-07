<script lang="ts">
  // @ts-ignore
  import Tags from 'svelte-tags-input';

  export let tags: string[];
</script>

<Tags bind:tags onlyUnique={true} placeholder={'Add Tags'} />
