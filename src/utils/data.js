const host = 'https://api.istandwithyou.com.ng'

export const candidates = () =>
  fetch(`${host}/candidate`)
    .then(res => res.json())

export const votes = () =>
  fetch(`${host}/vote`)
    .then(res => res.json())

export const candidate = (id) =>
  fetch(`${host}/candidate/${id}`)
    .then(res => res.json())

export const addVote = (candidateVote) =>
  fetch(`${host}/vote`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify( candidateVote )
  }).then(res => {
      let data = res.json();
      if (res.status >= 200 && res.status < 300) {
          return data;
      } else {
          return data.then(err => {throw err;});
      }
  });