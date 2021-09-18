import { writable } from 'svelte/store';
import getGuestbookEntries from '../api/guestbook/get';
import postGuestbookEntry from '../api/guestbook/post';

const initialState = {
  entries: [],
  postEntry: () => {},
  hasPosted: false,
};

const LS_KEY = '__ANNELISA_PIZZA_GUESTBOOK__';

function setHasPosted(entry = {}) {
  localStorage.setItem(
    LS_KEY,
    JSON.stringify(entry)
  );
}

function getHasPosted() {
  const data = localStorage.getItem(LS_KEY);
  if (!data) {
    return null;
  }
  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
}

export default writable(initialState, async (set) => {
  const entries = await getGuestbookEntries();

  // const existingEntry = getHasPosted();

  const postEntry = async (name, message) => {
    const entry = await postGuestbookEntry(name, message);
    setHasPosted(entry);
    set({
      entries: await getGuestbookEntries(),
      postEntry,
    });
  }

  set({
    entries,
    postEntry,
  });
});
