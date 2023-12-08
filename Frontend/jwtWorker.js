let jwtToken = null;

self.addEventListener('message', (event) => {
  switch (event.data.type) {
    case 'SET_TOKEN':
      jwtToken = event.data.token;
      break;
    case 'GET_TOKEN':
      self.postMessage({ type: 'TOKEN', token: jwtToken });
      break;
  }
});