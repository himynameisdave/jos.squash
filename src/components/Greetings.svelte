<style>
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    90% {
      opacity: 0.95;
    }
    100% {
      opacity: 0.75;
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

  @keyframes fade-pulse {
    0% {
      opacity: 1;
      transform: scale(1.175);
    }
    50% {
      opacity: 0.65;
      transform: scale(1);
    }
    100% {
      opacity: 1;
      transform: scale(1.175);
    }
  }

  @keyframes speech-bubble {
    0% {
      transform: rotate(0) scale(1);
    }
    50% {
      transform: rotate(-10deg) scale(1.2);
    }
    100% {
      transform: rotate(0) scale(1);
    }
  }

  @keyframes teibert {
    0% {
      transform: rotate3d(0);
    }
    35% {
      transform: rotate3d(1, 1, 1, 45deg);
    }
    75% {
      transform: rotate3d(1, -1, -1, 45deg);
    }
    100% {
      transform: rotate3d(0);
    }
  }

  @keyframes davies {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  h1 {
    animation-name: greeting;
    animation-duration: 1.5s;
    animation-iteration-count: 1;
    animation-timing-function: cubic-bezier(.5,-0.51,.66,1.54);
    color: red;
    font-size: 80px;
    text-align: center;
    position: relative;
    margin: 50px 0 0;
    text-shadow: 0 0 25px blue;
    z-index: 1;
    /* mix-blend-mode: color-burn; */
  }

  .images {
    margin-bottom: 25px;
    text-align: center;
  }

  .images img {
    position: relative;
  }

  .dollz {
    position: relative;
    z-index: 0;
  }

  .dollz .fader {
    animation-name: fade-in;
    animation-duration: 3s;
    animation-iteration-count: 1;
    animation-timing-function: cubic-bezier(.65,0,.6,1.58);
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 125%;
    opacity: 0.75;
    z-index: 2;
  }

  img.balloons {
    display: block;
    opacity: 0.9;
    margin: 0 auto;
    width: 190px;
  }

  .dollz .logo {
    position: relative;
    z-index: 1;
  }

  .flags {
    animation-name: fade-pulse;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 20px auto 0;
    width: 90%;
  }

  .flags img {
    height: 120px;
  }

  .whitecaps-hbd .speech-bubble {
    animation-name: speech-bubble;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    background-image: url('/images/speech-bubble.png');
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    width: 90%;
    height: 200px;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    font-size: 22px;
    margin: 0 auto -35px;
    z-index: 1;
  }
  .whitecaps-hbd .puzzle {
    width: 100%;
    z-index: 0;
  }

  .whitecaps-hbd__images {
    position: relative;
    height: 220px;
    width: 100%;
  }
  .whitecaps-hbd__images img {
    position: absolute;
    width: 100%;
  }

  .whitecaps-hbd__images img.teibert {
    animation-name: teibert;
    animation-iteration-count: infinite;
    animation-duration: 2s;
    left: -20%;
  }
  .whitecaps-hbd__images img.davies {
    animation-name: davies;
    animation-iteration-count: infinite;
    animation-duration: 2s;
    right: -40%;
    width: 120%;
  }
</style>


<div class="images">
  <h1>
    Happy Birthday Jos!
  </h1>
  <div class="dollz">
    <img class="fader" src="/images/beer-cheers.gif" alt="thirty-flirty-and-thriving" />
    <img class="logo" src="/images/whitecaps-logo-white.gif" alt="whitecapsFCHowWeLoveThee" />
  </div>
  <img class="balloons" src="/images/balloons.gif" alt="balloons" />
  <div class="flags">
    <img src="/images/flag-sw.gif" alt="flag-sw" />
    <img src="/images/flag-ca.gif" alt="flag-canada" />
  </div>

  <div class="whitecaps-hbd">
    <p class="speech-bubble">
      <span>
        Happy Birthday Jos!
      </span>
    </p>
    <img class="puzzle" src="/images/team-puzzle.gif" alt="team-puzzle" />
    <div class="whitecaps-hbd__images">
      <img class="teibert" src="/images/teibert.gif" alt="teibert" />
      <img class="davies" src="/images/davies.gif" alt="davies" />
    </div>
  </div>
</div>
