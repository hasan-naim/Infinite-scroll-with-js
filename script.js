// selecting elements

const goToGithubSec = document.querySelector(".go_to_github");
const upIcon = document.querySelector(".fa-circle-chevron-up");
// const goToGithubSec = document.querySelector(".go_to_github");
// const goToGithubSec = document.querySelector(".go_to_github");

upIcon.addEventListener("click", ()=> {
    goToGithubSec.classList.add("hide_go_to_github")
})


// api

const imageContainer = document.querySelector("#image-container");
const loader = document.querySelector("#loader");

let imagesLoaded = 0;
let totalImages = 0;
let ready = false;
let photosArray = [];




let count = 8;
const apiKey = "4E4utYq0nQK0TMOBWCdJoMNJ_7xc1THpV-lNS0YLpvk";
let apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`

async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhoto()
       
    }catch (err){
        console.log(err, "this is from here")
    }
}
// a function to set attributes to the element

function setAttributes(element,attributes) {
    for (const key in attributes){
        element.setAttribute(key, attributes[key])
    }
}


function imageLoaded() {
    imagesLoaded++;
    if(imagesLoaded === totalImages){
        ready = true
        loader.hidden = true;
        count = 30;
        apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`
    }
}

function displayPhoto(){
    imagesLoaded = 0;
    totalImages = photosArray.length;

    photosArray.forEach((photo) => {
        // creat <a> tag
        const item = document.createElement("a");
        setAttributes(item, {
            target : "_blank",
            href : photo.links.html
        })
        // creat <img> tag
        const image = document.createElement("img");
        setAttributes(image, {
            src: photo.urls.small,
            // alt: photo.alt_description ? alt_description : "Image" ,
            // title: photo.alt_description ? alt_description : "Image"
        })
        // Event listener, check when each image is finished loading
        image.addEventListener("load", imageLoaded)
        // inserting image tag into ancor tag
        item.appendChild(image);
        // inserting item tag into imageContainer
        imageContainer.appendChild(item)
        
    })
}


window.addEventListener("scroll", () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready ){
        ready = false
        getPhotos()
    }
})



getPhotos()