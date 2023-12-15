let token = null;


self.addEventListener('message', (event) => {
  switch (event.data.type) {
    case 'SET_TOKEN':
      token = event.data.token;
    
      break;
    case 'GET_TOKEN':
      self.postMessage({ type: 'TOKEN', token: token });
      break;
  }
});

