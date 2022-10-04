document.addEventListener("DOMContentLoaded", fetchMemes)

//create reference constants
const memeList = document.getElementById("meme-list");
const memeImg = document.getElementById("meme-image");
const memeDesc = document.getElementById("meme-desc");
const memeForm = document.getElementById("meme-form");

//create empty meme data array
let rawMemeData = []

function addImageName() {
    const memeName = document.getElementById('meme-name')
    memeName.textContent = `${Hello}`
} 


//fetch meme data from public API
function fetchMemes(){
    fetch("https://api.imgflip.com/get_memes")
    .then(resp => resp.json())
    .then(apidata => {
        memeData = apidata.data.memes.slice(1,11);
        addMemes(memeData)
    })
    .catch((error)=> console.log(error.message))
}

function addMemes(memeData){
    const memeList = document.getElementById("meme-list");
    memeData.forEach((meme) => {
        const memeName = document.createElement("h5");
        memeName.textContent = meme.name;
        memeList.append(memeName)
    })
}