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
  const galaryList = ["expandedImg", "expandedImg1", "expandedImg2", "expandedImgTC"];
  galaryList.transitionImg = (index) => {
    let expandImg = document.getElementById(this[index]);
    const Imgs = expandImg.parentElement.nextElementSibling.querySelectorAll("img");
    const interval = (i_expandImg, i_Imgs, i) => {
      i_expandImg.src = i_Imgs[i].src;
      i_expandImg.parentElement.style.display = "block";
      if (i < Imgs.length()) ++i;
      else i = 0;
      setTimeout(interval, 1000, i_expandImg, i_Imgs, i);
    };
    interval(0, expandImg, Imgs, 0);
  };

  for(let i = 0; i < galaryList; ++i)
  {
    galaryList.transitionImg(i);
  }
}