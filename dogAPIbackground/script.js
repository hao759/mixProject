const API="https://dog.ceo/api/breeds/image/random";
const dogImage=document.getElementById('dogImage');
const getDog=document.getElementById('getDog');

fetch(API).then(res=>res.json())
    .then(json =>dogImage.innerHTML=`<img src='${json.message}' height=300 width=300/>`)


getDog.onclick=()=>{
        fetch(API).then(res=>res.json())
    .then(json =>dogImage.innerHTML=`<img src='${json.message}' height=300 width=300/>`)
    }

