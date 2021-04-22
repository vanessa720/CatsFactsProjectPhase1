const getFacts = () => {
  return fetch('https://cat-fact.herokuapp.com/facts')
  .then(res => res.json())
}

getFacts().then(console.log)

