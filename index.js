document.addEventListener("DOMContentLoaded", fetchMemes)

let rawMemeData = []

function addImageName() {
    const memeName = document.getElementById('meme-name')
    memeName.textContent = `${Hello}`
} 


//fetch meme data from public API
function fetchMemes(){
    fetch("https://api.imgflip.com/get_memes")
    .then(resp => resp.json())
    .then(data => {
        rawMemeData = data;
        memeData = rawMemeData.data.memes
        console.log(memeData)
    })
    .catch((error)=> console.log(error.message))
}

