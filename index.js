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
    .then(apidata => {
        memeData = apidata.data.memes.slice(1,11);
        addMemes(memeData)
    })
    .catch((error)=> console.log(error.message))
    addMemeText() 
    addLikes(); 
}

function addMemes(memeData){
    const memeList = document.getElementById("meme-list");
    memeData.forEach((meme) => {
        const memeName = document.createElement("h5");
        memeName.textContent = meme.name;
        memeName.addEventListener("click", ()=>showMeme(meme))
        memeList.append(memeName)
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

function addLikes(){ 
  let likeCount = document.getElementById('like-count')
  document.addEventListener('keydown', (event) => {
    if(event.key === "ArrowRight"){
    likeCount.textContent++
}
  })}
