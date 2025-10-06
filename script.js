const resimler = [ 
    "download.jpg", 
    "50f06464-88b9-49f3-ac7f-3d71b1dc3840.jpg", 
    "images.jpg", 
] 

let index = 0; 

function changeİmage() { 
    const imgElement = document.getElementById("Birinci resmim"); 
    index++; 
    if (index >= resimler.length) { 
        index = 0; 
    } 
    imgElement.src = resimler [index]; 
    document.getElementById("result").innerText = 'Şu anki resim: ' + resimler[index]; 
}