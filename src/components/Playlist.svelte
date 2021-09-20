<script>
  import { tick } from 'svelte';
  import { MIDI } from '../constants';

  let audioElement;
  let activeSong;

  $: isPlaying = (track) => {
    console.log(audioElement?.paused)

    return track.file === activeSong?.file && !audioElement?.paused;
  }

  $: getPlaybackImage = (track) => {
    return isPlaying(track)
      ? '/images/icons/stop.png'
      : '/images/icons/play.png';
  }

  function handleSongClick(track) {
    return () => {
      //  If clicked the currently playing song, stop it
      if (activeSong?.file === track?.file) {
        audioElement.pause();
        activeSong = null;
      } else {
        audioElement.src = track.file;
        audioElement.play();
        activeSong = track;
      }
    }
  }

</script>

<style>
  .playlist {
    border-radius: 10px;
    background-color: rgba(125, 125, 125, 0.75);
    padding: 0 10px;
    border: 4px dotted lime;
    margin: 0 auto 30px;
  }

  h3 {
    font-size: 1.5rem;
    text-align: center;
    margin: 10px auto 0;
    text-shadow: 0 0 10px lime;
  }

  .playlist__list {
    padding: 0;
    list-style: none;
  }

  .playlist__track {
    display: flex;
    justify-content: flex-start;
    padding: 10px;
    margin: 0;
    border-bottom: 1px solid #333;
  }

  .playlist__track:last-child {
    border-bottom: 0;
  }

  .playlist__track.active {
    background: lime;
  }

  .playlist__track__icon {
    margin-right: 10px;
    width: 45px;
  }

  .playlist__track__track {
    font-size: 0.85rem;
  }

  .playlist__track__artist {
    font-size: 0.75rem;
  }
</style>

<div class="playlist">
  <h3>Party Playlist</h3>
  <div class="player__current">
    <audio bind:this={audioElement}>
      Cannot play these dope beats.
    </audio>
  </div>
  <ul class="playlist__list">
    {#each MIDI as track}
      <li class="playlist__track" class:active={isPlaying(track)}>
        <img
          src={getPlaybackImage(track)}
          alt="Play/Pause Track"
          class="playlist__track__icon"
          on:click={handleSongClick(track)}
        />
        <div>
          <div class="playlist__track__track">
            {track.track}
          </div>
          <div class="playlist__track__artist">
            {track.artist}
          </div>
        </div>
      </li>
    {/each}
  </ul>
</div>
