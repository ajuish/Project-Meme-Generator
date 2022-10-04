document.addEventListener("DOMContentLoaded", fetchMemes)

let memeData = []

//fetch meme data from public API
function fetchMemes(){
    fetch("https://api.imgflip.com/get_memes")
    .then(resp => resp.json())
    .then(data => {
        let rawMemeData = data
        memeData = rawMemeData.data.memes
        console.log(memeData)
    })
    .catch((error)=> console.log(error.message))
}

