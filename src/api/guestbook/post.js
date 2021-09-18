import { FUNCTIONS } from '../../constants';

export default async function postGuestbookEntry(name, message) {
  try {
    const { entry } = await fetch(FUNCTIONS.GUESTBOOK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, message }),
    }).then(res => res.json());
    return entry;
  } catch (error) {
    console.error('Error posting guestbook entry.');
  }
}
