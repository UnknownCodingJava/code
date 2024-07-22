let index = 0;
displayImages();

function displayImages() {
    const images = document.getElementsByClassName("image");
    
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    index++;
    if (index > images.length) {
        index = 1;
    }

    images[index - 1].style.display = "block";
    setTimeout(displayImages, 3000); // Change image every 2 seconds
}
