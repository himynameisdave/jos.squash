<script>
  import { onMount } from 'svelte';

  const NUM_BG_IMGS = 5;

  function getRandomBackgroundImage() {
    const index = Math.floor(Math.random() * NUM_BG_IMGS) + 1;
    return `sparkle-bg-${index}.webp`;
  }

  function setBackground() {
    document.body.style.backgroundImage = `url(/images/backgrounds/${getRandomBackgroundImage()})`;
  }

  onMount(setBackground);
</script>
