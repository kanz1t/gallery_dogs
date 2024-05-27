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
        if(Array.isArray(iimg)){ 
            iimg.forEach(element => {
                divno.innerHTML += `<div class="block-images-content"> <img src="${element}" title="images"></div>`;
            });   
        }
            hideLoader ()
}
    
}
button.addEventListener("click",async () =>   { 
try { 
    showLoader ()
    fetchDownload()
}catch { 
    console.log("ошибка")
}
})

clearButton.addEventListener("click", clearPhotoList)