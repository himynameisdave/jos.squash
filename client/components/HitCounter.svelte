<script>
  import { onMount } from 'svelte';
  import padHitsCount from '../utils/pad-hits-count.js';

  $: state = {
    isLoading: false,
    hitsCount: '00000',
  };

  onMount(async () => {
    state.isLoading = true;
    //  Set hit count:
    await fetch('/api/hits', {
      method: 'PUT',
    });

    //  Get hits count
    const { hitsCount } = await fetch('/api/hits').then(res => res.json());
    state = {
      hitsCount: padHitsCount(hitsCount),
      isLoading: false,
    };
  });

</script>

<style>
  h3 {
    color: #fff;
    font-family: "Courier New", Courier, monospace;
    font-size: 24px;
    margin: 0 auto 10px;
    text-align: center;
  }

  .wrap {
    margin: 0 auto 20px;
    max-width: 400px;
  }

  div.hit-counter {
    border: 3px dotted hotpink;
    align-items: center;
    background: linear-gradient(to bottom, #feccb1 0%,#f17432 50%,#ea5507 51%,#fb955e 100%);
    display: flex;
    justify-content: center;
    font-size: 20px;
    height: 50px;
    width: 180px;
    margin: 0 auto;
  }

  span.hit-counter__digit {
    border-right: 1px solid #000;
    color: #fff;
    padding: 12px 10px;
    font-family: "Courier New", Courier, monospace;
    font-size: 22px;
    font-weight: 600;
    height: 100%;
  }

  span.hit-counter__digit:last-child {
    border-right: 0;
  }
</style>

<div class="wrap">
  <h3>HIT COUNTER</h3>
  
  <div class="hit-counter">
    {#if state.isLoading}
      <span class="hit-counter__digit">?</span>
      <span class="hit-counter__digit">?</span>
      <span class="hit-counter__digit">?</span>
      <span class="hit-counter__digit">?</span>
      <span class="hit-counter__digit">?</span>
    {:else}
      {#each Array.from(state.hitsCount) as value}
        <span class="hit-counter__digit">{value}</span>
      {/each}
    {/if}
  </div>
</div>
