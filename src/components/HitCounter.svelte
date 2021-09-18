<script>
  import hitcounter from '../stores/hitcounter';

  //  Number of digits in our hit counter.
  const DIGITS = 5;

  //  Pad 0's to the left of the hits.
  function padHitCounter(hits) {
    let result = String(hits);
    const paddingAmount = DIGITS - result.length;

    for (let i = paddingAmount; i > 0; i--) {
      result = `0${result}`;
    }

    return result;
  }

  $: counterToString = $hitcounter === null
    ? '?????'
    : padHitCounter($hitcounter);

</script>

<style>
  @keyframes text-change {
    0% {
      color: violet;
    }
    50% {
      color: yellow;
    }
    100% {
      color: violet;
    }
  }

  h3 {
    font-family: "Comic Sans MS", "Comic Sans", "Courier New", Courier, monospace;
    color: #fff;
    text-shadow: 0 0 10px brown;
    text-align: center;
    animation-name: text-change;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  .wrap {
    margin: 0 auto 20px;
    max-width: 400px;
  }

  .hitcounter {
    border: 3px dotted hotpink;
    align-items: center;
    background: linear-gradient(to bottom, #feccb1 0%,#f17432 50%,#ea5507 51%,#fb955e 100%);
    border-radius: 7px;
    display: flex;
    justify-content: center;
    font-size: 20px;
    height: 50px;
    width: 180px;
    margin: 0 auto;
    overflow-y: hidden;
  }

  .hitcounter__digit {
    border-right: 2px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 12px 10px;
    font-family: "Courier New", Courier, monospace;
    font-size: 22px;
    font-weight: 600;
    height: 100%;
  }

  .hitcounter__digit:last-child {
    border-right: 0;
  }
</style>

<div class="wrap">
  <h3>hit counter</h3>
  <div class="hitcounter">
    {#each Array.from(counterToString) as value}
      <span class="hitcounter__digit">{value}</span>
    {/each}
  </div>
</div>
