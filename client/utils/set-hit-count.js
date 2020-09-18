const LS_KEY = '__annelisa.pizza_hit-counter-timeout__';

//  TODO: finish this later. Basically "rate limit" how much you can set the hit counter

export default async function setHitCount() {

  const timeout = localStorage.getItem(LS_KEY);

  const now = new Date();
  //  Returns time in ms
  const currentTime = now.getTime();
  //  Next time
  now.setDate(now.getMinutes() + 5);


  if (!timeout) {
    return fetch('/api/hits', {
      method: 'PUT',
    });
  }

  



  now.setDate(now.getDate() + 7);


  await fetch('/api/hits', {
    method: 'PUT',
  });
}
