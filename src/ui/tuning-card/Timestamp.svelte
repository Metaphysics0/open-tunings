<script lang="ts">
  import type { UserSubmittedTuning } from '@prisma/client';
  import moment from 'moment';

  export let tuning: UserSubmittedTuning;
</script>

<div class="opacity-70">{moment(tuning.createdAt).fromNow()}</div>
