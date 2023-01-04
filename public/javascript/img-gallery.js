// This is a function for changing image
function ImageReplace(i_expandImg, i_Img) {
  i_expandImg.src = i_Img.src;
  i_expandImg.parentElement.style.display = "block";
}
  
function loopService() {
  // Add or Update ID here
  const galleryList = ["expandedImg", "expandedImg1", "expandedImg2", "expandedImg3", "expandedImg4", "expandedImg5", "expandedImg6", "expandedImg7", "expandedImg8", "expandedImg9", "expandedImg10", "expandedImg11"];
  galleryList.transitionImg = function(index) {
    let expandImg = document.getElementById(this[index]);
    const Imgs = expandImg.parentElement.nextElementSibling.querySelectorAll("img");
    
    for (let i = 0; i < Imgs.length; ++i) {
      Imgs[i].onclick = function(e) {
        ImageReplace(expandImg, this);
      };
    }

    let timeoutID;

    const interval = (i_expandImg, i_Imgs, i) => {
      ImageReplace(i_expandImg, i_Imgs[i]);
      timeoutID = setTimeout(interval, 8000, i_expandImg, i_Imgs, (i + 1) % Imgs.length);
    };

    const makePause = (i_isPaused) => {
      if (i_isPaused) {
        clearTimeout(timeoutID);
      } else {
        interval(expandImg, Imgs, 0);
      }
    };

    // bind this function in order to pause interval
    makePause(0);
  };

  for(let i = 0; i < galleryList.length; ++i)
  {
    galleryList.transitionImg(i);
  }
}