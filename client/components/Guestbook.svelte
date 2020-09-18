<script>
  import { onMount } from 'svelte';

  $: entires = [];

  $: form = {
    name: '',
    text: '',
  };

  onMount(async () => {
    const body = await fetch('/api/guestbook').then(res => res.json());
    entires = body.entries;
  });

  async function handleSubmit(event) {
    event.preventDefault();
    if (!form.name) {
      return alert(`excuse me sir! wuts ur name!?`)
    }
    if (!form.text) {
      return alert('oh you dont have anything nice to say!? sad! 😢');
    }
    await fetch('/api/guestbook', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }).then(() => {
      entires = entires.concat({
        id: entires.length + 1,
        ...form,
        created_at: new Date(),
      });
      form.name = '';
      form.text = '';
    })
  }

</script>

<style>
  section {
    background: radial-gradient(ellipse at center, #ffb6c1 10%,#ff69b4 100%);
    border: 10px double black;
    margin: 0 auto 100px;
    text-align: center;
    max-width: 600px;
    width: 98%;
    opacity: 0.95;
  }
  h2, h3 {
    color: #fff;
    font-size: 24px;
    text-shadow: 0 0 12px lime;
  }
  h2 {
    font-size: 28px;
  }
  h3 {
    font-size: 24px;
    font-family: "Comic Sans MS", cursive, sans-serif;
  }
  .entry {
    border-radius: 8px;
    background: rgba(249, 204, 202, 0.4);
    margin: 0 auto 12px;
    padding: 6px 6px 12px;
    width: 90%;
  }
  .entry__name {
    color: blue;
    margin-bottom: 6px;
    text-align: left;
    text-decoration: underline;
  }

  .entry__name-name {
    color: green;
  }

  .entry__text {
    font-style: italic;
    font-size: 19px;
  }

  form {
    margin-bottom: 12px;
  }

  input,
  textarea {
    display: block;
    border: 4px double #000;
    font-family: "Comic Sans MS", cursive, sans-serif;
    margin: 0 auto;
    width: 90%;
  }
</style>


<section>
  <!-- <h2>Guestbook</h2> -->
  <img src="./images/dollz-guestbook.gif" alt="sign my guestbook" />

  {#each entires as entry}
     <div class="entry">
       <div class="entry__name">
        <span class="entry__name-name">{entry.name}</span> says:
       </div>
       <div class="entry__text">
         "{entry.text}"
       </div>
     </div>
  {/each}

  <h3>Sign my guestbook!</h3>
  <form on:submit={(event) => handleSubmit(event)}>
    <input bind:value={form.name} placeholder="Name" />
    <textarea bind:value={form.text} placeholder="Message" />
    <button type="submit">
      Sign it!
    </button>
  </form>
</section>
