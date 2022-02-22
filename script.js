// selecting elements

const goToGithubSec = document.querySelector(".go_to_github");
const upIcon = document.querySelector(".fa-circle-chevron-up");
// const goToGithubSec = document.querySelector(".go_to_github");
// const goToGithubSec = document.querySelector(".go_to_github");

upIcon.addEventListener("click", ()=> {
    goToGithubSec.classList.add("hide_go_to_github")
})


// api

const count = 10;
const apiKey = "4E4utYq0nQK0TMOBWCdJoMNJ_7xc1THpV-lNS0YLpvk";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`

async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)
        data.forEach(element => {
            console.log(element.alt_description);
        });
    }catch (err){
        console.log(err)
    }
}

getPhotos()