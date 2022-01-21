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
      color: #04265c;
    }
    25% {
      color: #94c2e4;
    }
    50% {
      color: #84868c;
    }
    75% {
      color: #94c2e4;
    }
    100% {
      color: #04265c;
    }
  }

  h3 {
    color: #fff;
    text-shadow: 0 0 10px yellow;
    text-align: center;
    animation-name: text-change;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  .wrap {
    margin: 0 auto 20px;
    max-width: 400px;
    position: relative;
  }

  .hitcounter {
    border: 3px dotted hotpink;
    align-items: center;
    background: linear-gradient(to bottom, #94c2e4 0%,#0b2f69 50%,#04265c 51%,#84868c 100%);
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
