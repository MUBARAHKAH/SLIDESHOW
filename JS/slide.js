let img = document.getElementById('img');
let imgArray=['IMG/slide 1.jpg', 'IMG/slide2.jpg', 'IMG/slide3.jpg', 'IMG/slide4.jpg', 'IMG/slide5.jpg', 'IMG/slide6.jpg', 'IMG/slide7.jpg', 'IMG/slide8.jpg']
let imgIndex=0;

function slideshow(){
  img.setAttribute('src', imgArray[imgIndex])
  img++;

  if(imgIndex>=imgArray.length){
    imgIndex=0
  }
}
setInterval(slideshow, 2000)
