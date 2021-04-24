const url = `https://catfact.ninja/fact?max_length=140`;

const getFact = () => {
return fetch(url)
.then(res => res.json())
.catch(err => err)
}

document.addEventListener('DOMContentLoaded', () => {
    getFact().then((fact)=>{
        appendFact(fact);
    })
   
})


const factContainer = document.getElementById('factContainer')

const createFactDiv = (fact) => {
const setup = document.createElement('p')
setup.innerText = fact.fact
return setup;
}
const appendFact = (fact) => {
    const factItem = createFactDiv(fact)
    factContainer.append(factItem);
}
