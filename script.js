function changeBg() {
  document.querySelector('body').classList.toggle('active');
};

document.addEventListener('keyup', (e) => {
   if (e.keyCode == 38) { //стрелочка ввехрх
   changeBg();
  }
});

theme.addEventListener('click', () => {
  theme.innerHTML =
    (theme.innerHTML === 'Ночь') ? theme.innerHTML = 'День' : theme.innerHTML = 'Ночь';
  document.querySelector('body').classList.toggle('theme-white');
  document.querySelector('body').classList.toggle('theme-dark');
});

const loader = document.querySelector('.description')

setTimeout(() => {
  const interval = setInterval(() => {
  loader.style.opacity -= 0.01;
  if (loader.style.opacity == 0) clearInterval(interval);
}, 10);
}, 1500);


document.querySelector('body').addEventListener('mousedown', (e) => {
  if (!e.target.matches('p') && !e.target.matches('#theme')) {
    changeBg();
  }
});

document.querySelector('#zoom').addEventListener('click', function(e){
        zoom.innerHTML =
    (zoom.innerHTML === '-') ? zoom.innerHTML = '+' : zoom.innerHTML = '-';
  
        if(document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
        }
        else{
            document.documentElement.mozRequestFullScreen();
        }
        if(document.documentElement.webkitRequestFullscreen) {
              document.webkitCancelFullScreen();
         }
          else{
              document.mozCancelFullScreen();
          }
});