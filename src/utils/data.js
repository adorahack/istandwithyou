const host = 'http://localhost:8002'

export const candidates = () =>
  fetch(`${host}/candidate`)
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
  }).then(res => res.json())