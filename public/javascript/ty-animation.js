function ImageReplace(i_expandImg, i_Img) {
  i_expandImg.src = i_Img.src;
  i_expandImg.parentElement.style.display = "block";
}
  
function loopService1() {
  // Add or Update ID here
  const galleryList = ["expandedImgTY"];
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
window.onload = function() {
  //SECTION2    
  document.getElementById('box1097').classList.add("fade-animation-top");
  document.getElementById('text1096').classList.add("fade-animation-top");
  document.getElementById('HEADLINE9').classList.add("fade-animation-left");
  document.getElementById('IMAGE1430').classList.add("fade-animation-right");
  document.getElementById('GALLERYMAIN1').classList.add("fade-animation-right");

  //Service
  loopService1();
};