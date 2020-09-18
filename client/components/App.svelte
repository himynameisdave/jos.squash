<script>
  import HitCounter from './HitCounter.svelte';
  import Guestbook from './Guestbook.svelte';
</script>

<style>

  @keyframes greeting {
    0% {
      transform: translateY(-300%) rotate3d(-1, -1, -1, -360deg);
    }
    100% {
      transform: translateY(0) rotate3d(0);
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes bday-spin {
    0% {
      transform: rotate(-15deg) translateX(-50%);
    }
    25% {
      transform: rotate(0) translateX(-50%);
    }
    50% {
      transform: rotate(15deg) translateX(-50%);
    }
    75% {
      transform: rotate(0) translateX(-50%);
    }
    100% {
      transform: rotate(-15deg) translateX(-50%);
    }
  }

  h1 {
    animation-name: greeting;
    animation-duration: 1.5s;
    animation-iteration-count: 1;
    animation-timing-function: cubic-bezier(.5,-0.51,.66,1.54);
    color: lime;
    font-size: 80px;
    font-family: "Comic Sans MS", cursive, sans-serif;
    text-align: center;
    margin-top: 100px;
    mix-blend-mode: difference;
  }

  img {
    display: block;
    margin: 0 auto;
  }

  .dollz {
    position: relative;
    width: 100%;
    margin: 0 auto;
    max-width: 400px;
  }

  .img__bday {
    animation-name: bday-spin;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(.5,-0.51,.66,1.54);
    position: absolute;
    margin: 0 auto;
    display: block;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    transform-origin: 0% 50%;
    width: 90%;
    z-index: 999;
  }

  .img__cake {
    animation-name: fade-in;
    animation-duration: 4s;
    animation-iteration-count: 1;
  }

  p {
    animation-name: fade-in;
    animation-duration: 4s;
    animation-iteration-count: 1;
    color: #fff;
    font-size: 20px;
    max-width: 400px;
    margin: 0 auto 40px;
    text-align: center;
  }

</style>

<h1>
  Happy Birthday Annelisa!
</h1>


<div class="dollz">
  <img class="img__bday" src="./images/happy-bday.gif" alt="cake" />
  <img class="img__cake" src="./images/annelisa-dollz.jpg" alt="cake" />
</div>

<p>
  29 and lookin' fine!
</p>

<HitCounter />

<img src="./images/balloons.gif" alt="balloons" />

<Guestbook />
