<script lang="ts">
  import '@unocss/reset/tailwind.css';
  import 'uno.css';
  import '../lib/css/global.css';
  import Navbar from '../ui/navbar/Navbar.svelte';
  import { Toast } from '@skeletonlabs/skeleton';
</script>

<Navbar />
<Toast />
<div class="main-body">
  <slot />
</div>
<div class="my-5 py-2" />
