<script lang="ts">
  import TuningsList from '../ui/tunings-list/TuningsList.svelte';
  import type { PageData } from './$types';
  import type { UserSubmittedTuning } from '@prisma/client';
  import TuningWithName from '../ui/sections/TuningWithName.svelte';

  export let data: PageData;

  const tunings = JSON.parse(data.tunings) as UserSubmittedTuning[];
</script>

<TuningWithName tuning={tunings[0]} />
<TuningsList {tunings} />
