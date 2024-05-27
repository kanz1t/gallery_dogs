let button = document.querySelector(".button-download");
let clearButton = document.querySelector(".button-clear")
let divno = document.querySelector(".block-images");
const url = "https://dog.ceo/api/breeds/image/random/8";

function clearPhotoList (){
    divno.innerHTML = null;
}

function showLoader () { 
    document.querySelector(".loader").style.display="inline-block";
}
function hideLoader () {
    document.querySelector(".loader").style.display="none";
}

const fetchDownload =  async () => {
   let data = await fetch(url);
   let response = await data.json();
    imagesAddHtml(response)
}

const imagesAddHtml = (img) =>{ 

    for (let key in img) {
        let iimg = img[key];
       
            iimg.forEach(element => {
                let photo = `<div class="block-images-content"> <img src="${element}" title="ff"></div>`
                divno.innerHTML += photo;
            });
            hideLoader ()
}
    
}
button.addEventListener("click",async () =>   { 
try { 
    showLoader ()
    fetchDownload()
}catch { 
    console.log("иди нахуй ублюдок")
}
})

clearButton.addEventListener("click", clearPhotoList)