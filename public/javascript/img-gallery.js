function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }

function myFunction1(imgs1) {
  var expandImg1 = document.getElementById("expandedImg1");
    expandImg1.src = imgs1.src;
    expandImg1.parentElement.style.display = "block";
  }

function myFunction2(imgs2) {
  var expandImg2 = document.getElementById("expandedImg2");
    expandImg2.src = imgs2.src;
    expandImg2.parentElement.style.display = "block";
}

function myFunctionTC(imgsTC) {
  var expandImgTC = document.getElementById("expandedImgTC");
    expandImgTC.src = imgsTC.src;
    expandImgTC.parentElement.style.display = "block";
  }
  
function loopService() {
  const galleryList = ["expandedImg", "expandedImg1", "expandedImg2", "expandedImgTC"];
  galleryList.transitionImg = (index) => {
    let expandImg = document.getElementById(galleryList[index]);
    const Imgs = expandImg.parentElement.nextElementSibling.querySelectorAll("img");
    const interval = (i_expandImg, i_Imgs, i) => {
      i_expandImg.src = i_Imgs[i].src;
      i_expandImg.parentElement.style.display = "block";
      if (i < Imgs.length - 1) ++i;
      else i = 0;
      setTimeout(interval, 8000, i_expandImg, i_Imgs, i);
    };
    interval(expandImg, Imgs, 0);
  };

  for(let i = 0; i < galleryList.length; ++i)
  {
    galleryList.transitionImg(i);
  }
}