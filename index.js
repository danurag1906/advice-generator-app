const api="https://api.adviceslip.com/advice"
const adviceidElement=document.getElementById("adviceid")
const adviceTextElement=document.getElementById("advicetextspan")

const callApi= ()=>{
     fetch(api)
    .then((response) => response.json())
    .then((data) =>{
    // const slips=data.slip;
    adviceidElement.innerText=data.slip.id,
    adviceTextElement.innerText=data.slip.advice
    // console.log(data.slip.id)
    }
    );
}

callApi()
