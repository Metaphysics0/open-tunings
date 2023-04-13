<script>
  import SocialLinks from '../../ui/footer/SocialLinks.svelte';
</script>

<svelte:head>
  <title>Open Tunings | About</title>
  <meta
    name="title"
    content="Open Tunings | create and save your own open tuning for the guitar!"
  />
</svelte:head>

<main class="font-sans w-fit mx-auto">
  <section
    class="mb-4 flex flex-col items-center max-w-3/4 mx-auto text-center"
  >
    <h1 class="text-4xl font-extrabold mb-4">About</h1>
    <p>
      I created this website for musicians and artists alike to find new and
      creative ways to tune the guitar.
    </p>
    <p>
      Whether you're an progenitor of progressive math-rock, or a casual enjoyer
      of music, I hope that this website serves as a space to inspire and fuel
      creativity.
    </p>
    <p>
      If you enjoy anything here, feel free to reach out to me via Instagram, or
      any of the social links I have posted below!
    </p>
    <p class="italic">- Ryan Roberts</p>
  </section>
  <SocialLinks />
</main>

<style>
  p {
    margin-bottom: 4px;
    /* text-lg */
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
</style>
