document.addEventListener("DOMContentLoaded", fetchMemes)

//create reference constants
// const memeList = document.getElementById("meme-list");
// const memeImg = document.querySelector("#meme-image");
// const memeDesc = document.getElementById("meme-desc");
// const memeForm = document.getElementById("meme-form");

//create empty meme data array
let memeData = []


//fetch meme data from public API
function fetchMemes(){
    fetch("https://api.imgflip.com/get_memes")
    .then(resp => resp.json())
    .then(apiData => {
        memeData = apiData.data.memes.slice(1,11);
        addMemes(memeData)
        addDesc(memeData)
    })
    .catch((error)=> console.log(error.message))
    addMemeText()  
}

// Grace - Trying to make description persist by saving the desc array
// function addDesc(memeData) {
//     const memeDesc = document.getElementById("meme-desc");

//}

function addMemes(memeData){
    const memeList = document.getElementById("meme-list");
    memeData.forEach((meme) => {
        const memeName = document.createElement("h5");
        memeName.textContent = meme.name;
        memeName.addEventListener("click", ()=>showMeme(meme))
        memeList.append(memeName)

        // Grace - Trying to make description persist by saving the desc array
        const memeDesc = document.getElementById("meme-desc");
        const newDesc = document.getElementById('meme-text').value;
        const addedDesc = newDesc.textContent
        memeDesc.textContent = addedDesc
        // meme.Desc = newDesc.value
        //  
        // newDesc.textContent = added.Desc
        //
    })
}

function showMeme(meme){
    const memeImg = document.getElementById("meme-image");
    const memeTitle = document.getElementById('meme-name');
    const memeDesc = document.getElementById("meme-desc");
    memeImg.src = meme.url;
    memeTitle.textContent = meme.name;
    memeDesc.textContent = "";
}

function addMemeText(){
    const memeForm = document.getElementById("meme-form");
    memeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const memeDesc = document.getElementById('meme-desc');
    memeDesc.textContent = document.getElementById('meme-text').value;
    memeForm.reset();
})}