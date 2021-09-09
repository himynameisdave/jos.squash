import { readable } from 'svelte/store';
import getHitcounter from '../api/hitcounter/get';

export default readable(null, async (set) => {
  const count = await getHitcounter();
  set(count);
});
