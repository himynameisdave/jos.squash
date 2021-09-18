import { FUNCTIONS } from '../../constants';

export default async function getGuestbookEntries() {
  try {
    const entries = await fetch(FUNCTIONS.GUESTBOOK).then(res => res.json());
    return entries;
  } catch (error) {
    console.error('Error fetching guestbook entries.');
  }
}
