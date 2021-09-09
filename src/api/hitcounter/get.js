//  Note that there is no "POST" or "PUT" for hitcounter,
//  becuase it gets incremented serverside whenever a GET request comes in.
import { FUNCTIONS } from '../../constants';

export default async function getHitcounter() {
  try {
    const { count } = await fetch(FUNCTIONS.HITCOUNTER).then(res => res.json());
    return count;
  } catch (error) {
    console.error('Error fetching hitcounter.');
  }
}
