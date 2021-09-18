<script>
  import guestbook from '../stores/guestbook';

  let name = '';
  let message = '';
  let hasPosted = false;
  let isPosting = false;

  async function handleSubmit() {
    isPosting = true;
    //  Post
    await $guestbook.postEntry(name, message);

    name = '';
    message = '';
    isPosting = false;
    hasPosted = true;
  }

</script>

<style>
  .guestbook {
    border: 10px double rebeccapurple;
    border-radius: 4px;
    background: linear-gradient(lime, #00aacc);
    padding: 10px;
  }

  .guestbook__image {
    display: block;
    margin: 0 auto;
    width: 100%;
  }

  .guestbook__sign {
    display: flex;
    border: 3px dashed hotpink;
    border-radius: 10px;
    margin: 0 auto 10px;
    width: 90%;
    overflow: hidden;
  }

  .guestbook__sign button {
    background: green;
    border: 0;
    color: #fff;
    cursor: pointer;
    font-family: "Comic Sans MS", "Comic Sans", "Courier New", Courier, monospace;
    font-size: 1.5rem;
    padding: 0 20px;
    transition: background-color 0.75s ease-in;
  }

  .guestbook__sign button:disabled {
    background: gray;
  }

  .guestbook__sign__contents {
    width: 100%;
  }

  .guestbook__sign__contents input {
    border: 0;
    display: block;
    font-family: "Comic Sans MS", "Comic Sans", "Courier New", Courier, monospace;
    font-size: 1.5rem;
    padding: 5px;
    width: 100%;
  }

  .guestbook__sign__contents textarea {
    border: 0;
    display: block;
    font-family: "Comic Sans MS", "Comic Sans", "Courier New", Courier, monospace;
    font-size: 0.9rem;
    min-height: 150px;
    resize: none;
    padding: 5px;
    width: 100%;
  }

  h3 {
    display: block;
    font-style: italic;
    text-shadow: 0 0 5px lime;
    margin: 10px auto 20px;
    text-align: center;
  }

  .guestbook__entry {
    background: #f1f1f1;
    border-radius: 3px;
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.5);
    margin: 10px auto 20px;
    padding: 8px;
    width: 90%;
  }

  .guestbook__entry__name {
    font-style: italic;
    font-size: 14px;
    margin-bottom: 5px;
  }
</style>

<div class="guestbook">
  <img
    class="guestbook__image"
    src="./images/dollz-guestbook.gif"
    alt="sign the guestbook"
  />

  {#if !hasPosted}
    <div class="guestbook__sign">
      <div class="guestbook__sign__contents">
        <input type="text" bind:value={name} placeholder="Your name" />
        <textarea bind:value={message} placeholder="Happy Birthday Annelisa!"></textarea>
      </div>
      <button on:click={handleSubmit} disabled={!(name.length && message.length) || isPosting}>
        {#if isPosting}
          Sending...
        {:else}
          Sign
        {/if}
      </button>
    </div>
  {/if}

  <h3>
    What everyone is saying...
  </h3>
  {#each $guestbook.entries as entry}
    <div class="guestbook__entry">
      <div class="guestbook__entry__name">
        <b>{entry.name}</b> says:
      </div>
      <div class="guestbook__entry__message">
        {#if entry.message.split('\n').length > 1}
          {#each entry.message.split('\n') as chunk, index}
            <div>
              {#if index === 0}"{/if}{chunk}{#if index === entry.message.split('\n').length - 1}"{/if}
            </div>
          {/each}
        {:else}
          "{entry.message}"
        {/if}
      </div>
    </div>
  {/each}
</div>
