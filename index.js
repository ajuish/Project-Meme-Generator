fetchMemes()

//create reference constants
const memeList = document.getElementById('meme-list');
const memeImg = document.getElementById('meme-image');
const memeDesc = document.getElementById('meme-desc');
const memeTitle = document.getElementById('meme-name');
const likeCount = document.getElementById('like-count');
const memeForm = document.getElementById('meme-form');

//create empty meme data array
let memeData = []
let currentMeme

//fetch meme data from public API
function fetchMemes(){
    fetch("https://api.imgflip.com/get_memes")
    .then(resp => resp.json())
    .then(apidata => {
        memeData = apidata.data.memes.slice(1,11);
        addMemes(memeData);
        showMeme(memeData[0]);
        addMemeText();
        addLikes();
    })
    .catch((error)=> console.log(error.message))
}

function addMemes(memeData){
    memeData.forEach((meme) => {
        //creates desc and likes keys in memeData array
        meme.desc = "";
        meme.likes = 0;
        //add memes to list
        const memeName = document.createElement("h5");
        memeName.textContent = meme.name;
        memeName.addEventListener("click", ()=>showMeme(meme))
        memeList.append(memeName)
    })
}

//displays meme on click
function showMeme(meme){
    currentMeme = meme
    likeCount.textContent = meme.likes;
    memeImg.src = meme.url;
    memeTitle.textContent = meme.name;
    memeDesc.textContent = meme.desc;
} 

//add desc to memes
function addMemeText(){
    memeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    currentMeme.desc = document.getElementById('meme-text').value;
    memeDesc.textContent = currentMeme.desc;
    memeForm.reset();
})}

//add likes to meme
function addLikes()
  document.addEventListener('keydown', (event) => {
    if(event.key === "ArrowRight"){
        currentMeme.likes = Number(currentMeme.likes) + 1;
        likeCount.textContent = currentMeme.likes;
    // } else if(event.key === "ArrowLeft"){
    //     currentMeme.likes = Number(currentMeme.likes) - 1;
    //     likeCount.textContent = currentMeme.likes;
    //     likeCount.setAttribute('min', 0);
    }
  })
}
