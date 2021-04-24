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