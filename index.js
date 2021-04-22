const url = `https://catfact.ninja/fact?max_length=140`;

const getFact = () => {
  return fetch('https://catfact.ninja/fact?max_length=140')
  .then(res => res.json())
}

const createFactDiv = (fact) => {
  const factContainer = document.createElement('div')
  const setup = document.createElement('p')

  setup.innerText = fact.fact

  factContainer.append(setup)

  return factContainer
}

getFact().then ((fact) => {
  const FactDiv = createFactDiv(fact)
  console.log(FactDiv)
})
 