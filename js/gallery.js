function activateGallery() {
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    let mainImage  = document.querySelector("#gallery-photo img");
  
    thumbnails.forEach(function(thumbnail) {
      thumbnail.addEventListener("click", function() {
        // Set clicked image as display image.
        let newImageSrc = thumbnail.dataset.largeVersion;
        mainImage.setAttribute("src", newImageSrc);
  
        // Change which image is current.
        document.querySelector(".current").classList.remove("current");
        thumbnail.parentNode.classList.add("current");

        // Update image info.
        let galleryInfo = document.querySelector("#gallery-info");
        let title = galleryInfo.querySelector(".tiitle");
        let discription = galleryInfo.querySelector(".description");

        title.innerHTML = thumbnail.dataset.title;
        discription.innerHTML = thumbnail.dataset.discription;
      });
    });
  }