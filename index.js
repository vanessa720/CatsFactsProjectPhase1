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

const btnFact = document.getElementById('btnNext');
btnFact.onclick = ()=>{
    getFact().then((fact)=>{
        removeElement();
        appendFact(fact);
    })
}


const changeCat=(isHover)=>{
    if(isHover){
        document.getElementById('cat-img').src="Images/Angry.gif";
    }
    else{
        document.getElementById('cat-img').src="Images/Happy.gif";
    }
}

const removeElement=()=>{
    factContainer.removeChild(factContainer.childNodes[1]);
}
