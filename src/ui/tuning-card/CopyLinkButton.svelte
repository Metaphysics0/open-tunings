<script lang="ts">
  import FaLink from 'svelte-icons/fa/FaLink.svelte';
  import MdLink from 'svelte-icons/md/MdLink.svelte';
  function copyBrowserLink() {
    navigator.clipboard.writeText(window.location.href);
  }
</script>

<button
  class="cursor-pointer h-fit w-fit p-2 px-3 items-center"
  on:click={copyBrowserLink}
>
  <MdLink />
  <span>Copy</span>
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

  button:hover:after {
    opacity: 0.02;
  }
</style>
