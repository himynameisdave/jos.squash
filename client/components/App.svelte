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
  }
</style>

<h1>
  Happy Birthday Annelisa!
</h1>

<img class="img__cake" src="./images/cake-delivery.gif" alt="cake" />

<p>
  It is the anniversary of your birth and as such you are now another year older.
</p>


<img src="./images/balloons.gif" alt="balloons" />
