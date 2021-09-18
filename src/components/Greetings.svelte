<style>
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes greeting {
    0% {
      transform: translateY(-300%) rotate3d(-1, -1, -1, -360deg);
    }
    100% {
      transform: translateY(0) rotate3d(0);
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
    margin: 50px 0 0;
    text-shadow: 0 0 25px pink;
    /* mix-blend-mode: color-burn; */
  }

  .images {
    margin-bottom: 25px;
    text-align: center;
  }

  .dollz {
    position: relative;
  }

  .dollz h2 {
    animation-name: fade-in;
    animation-duration: 3s;
    animation-iteration-count: 1;
    color: #fff;
    font-family: 'Times New Roman', Times, serif;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-shadow: 0 0 10px red;
  }

  .row {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .row img {
    width: 150px;
  }
</style>

<h1>
  Happy Birthday Annelisa!
</h1>

<div class="images">
  <div class="dollz">
    <img src="/images/annelisa-dollz.jpg" alt="annelisa-dollz" />
    <h2>30, flirty and thriving!</h2>
  </div>
  <div class="row">
    <img src="/images/cake-delivery.gif" alt="cake-delivery" />
    <img src="/images/balloons.gif" alt="balloons" />
  </div>
</div>
