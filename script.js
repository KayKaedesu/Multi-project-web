var pageNumber = 0;
var isAnimating = true;

const outer_jarnbin = document.querySelector('.anim-jarnbin');
const jarnbin = document.querySelector('.start-jarnbin-img');
const fade_in = document.querySelector('.fade-in');

const anim = { // animationออก
  0: async () => {
    console.log('start anim 0');
    jarnbin.classList.add('tran-jarnbin-1');
    await new Promise((resolve) => { setTimeout(() => {
      outer_jarnbin.style.zIndex = 0;
      jarnbin.classList.add('tran-jarnbin-2');
      resolve();
    }, 2500)});
    await new Promise((resolve) => { setTimeout(() => {
      console.log('stop anim 0');
      resolve();
    }, 500)});
    isAnimating = false;
  },
  1: async () => {
    console.log('start anim 1');
    jarnbin.classList.add('tran-jarnbin-3');
    fade_in.classList.add('fade-in-slow'); // add fade
    await new Promise((resolve) => { setTimeout(() => {
      fade_in.classList.remove('fade-in-slow'); // remove fade
      resolve();
    }, 3000)});
    console.log('a')
    Promise.resolve();
  },
  2: async () => {
    
  },
  3: async () => {
    
  },
  4: async () => {
    
  },
  5: async () => {
    
  },
};

document.body.addEventListener('click', async () => {
  if (!isAnimating) {
    isAnimating = true;
    await anim[++pageNumber]();
    console.log(val)
    console.log(isAnimating);
    isAnimating = false;
  }
});

// run first anim
anim[0]();
setInterval(() => {
  console.log(isAnimating)
},100)