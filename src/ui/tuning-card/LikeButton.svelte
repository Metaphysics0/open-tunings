<script>
  import FaRegHeart from 'svelte-icons/fa/FaRegHeart.svelte';
</script>

<div class="cool-btn cursor-pointer h-fit w-fit p-2 px-3 items-center">
  <span class="h-4 mr-2">
    <FaRegHeart />
  </span>
  <span> 0 </span>
</div>

<style>
  /* Took from https://www.colorhunt.co */
  .cool-btn {
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

  .cool-btn[status='liked'] {
    background-image: linear-gradient(90deg, #f4f4f4 0%, #efefef 100%);
    color: #000;
    opacity: 1;
    border-color: transparent;
  }

  .cool-btn:hover:after {
    opacity: 0.02;
  }
</style>
