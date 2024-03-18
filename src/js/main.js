// ИЗМЕНЕНИЕ ВЕРТИКАЛЬНОГО СЛАЙДЕРА

// ПСЕВДО СКРОЛЛ 

// let scrollableElement = document.getElementById("scrollable");
// let resizableElement = document.getElementById("resizable");

// scrollableElement.addEventListener("scroll", function() {
//   let scrollTop = scrollableElement.scrollTop;
//   let scrollHeight = scrollableElement.scrollHeight - scrollableElement.clientHeight;
//   let scrollPercentage = (scrollTop / scrollHeight) * 100;

//   resizableElement.style.height = scrollPercentage + "%";
// });



// ПСЕВДО СКРОЛЛ
    

// Add the scroll event listener and execute the code inside only for wider screens


    // scrollableElement.addEventListener("scroll", function() {
    //     let scrollTop = scrollableElement.scrollTop;
    //     let scrollHeight = scrollableElement.scrollHeight - scrollableElement.clientHeight;
    //     let item2 = document.querySelector('.perks-item-2');
    //     let item3 = document.querySelector('.perks-item-3');
    //     let scrollPercentage = (scrollTop / scrollHeight) * 100;
    
    //     resizableElement.style.height = scrollPercentage + "%";
    
    //     if (scrollPercentage > 10) {
    //       item2.classList.add("perks-item-active"); 
    //     } else {
    //       item2.classList.remove("perks-item-active"); 
    //     }
    
    //     if (scrollPercentage > 20) {
    //       item3.classList.add("perks-item-active");
    //     } else {
    //       item3.classList.remove("perks-item-active"); 
    //     }
    //   });

    let body = document.body;
    let resizableElement = document.getElementById("resizable");
    
    window.addEventListener("scroll", function() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let scrollHeight = body.scrollHeight - window.innerHeight;
      let incrementalFactor = 3.1; 
      let scrollPercentage = (scrollTop / scrollHeight) * 100;
      let scrollPercentageFast = (scrollTop / scrollHeight) * 100 * incrementalFactor;
      let arrows = document.querySelector('.arrow-wrap');

      resizableElement.style.height = 1 + "%";

      if (scrollPercentage >= 10) {
        resizableElement.style.height = scrollPercentageFast + "%";
      }

      // if (scrollPercentage >= 20) {
      //   resizableElement.style.height = 66 + "%"
      //   resizableElement.style.height = scrollPercentageFast + "%";
      // }

      if (scrollPercentage >= 67) {
        arrows.classList.add('arrow-wrap-active')
      } else arrows.classList.remove('arrow-wrap-active')

      if (scrollPercentage >= 73) {
        arrows.style.width = scrollPercentage + "%";
      }

      if (scrollPercentage >= 90) {
        arrows.classList.add('arrow-wrap-none')
      } else arrows.classList.remove('arrow-wrap-none')
    });

      document.addEventListener("DOMContentLoaded", function() {
        let body = document.body;
    
        function calculateScrollPercentage() {
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          let scrollHeight = body.scrollHeight - window.innerHeight;
          let scrollPercentage = (scrollTop / scrollHeight) * 100;
          let item2 = document.querySelector('.perks-item-2');
          let item3 = document.querySelector('.perks-item-3');
    
          if (scrollPercentage >= 14) {
            item2.classList.add('perks-item-active')
          } 

          if (scrollPercentage <= 14) {
            item2.classList.add('opacity')
            setTimeout(function() {
              item2.classList.remove('perks-item-active');
            }, 500);
          }
    
          if (scrollPercentage >= 20) {
            item3.classList.add('perks-item-active')
          }

          if (scrollPercentage <= 20) {
            item3.classList.add('opacity')
            setTimeout(function() {
              item3.classList.remove('perks-item-active');
            }, 500);
          }
    
          requestAnimationFrame(calculateScrollPercentage);
        }
    
        calculateScrollPercentage();
      });
  
  // ИЗМЕНЕНИЕ ВЕРТИКАЛЬНОГО СЛАЙДЕРА

// ДОБАВЛЕНИЕ КЛАССА В УСЛУГАХ
  // document.addEventListener("DOMContentLoaded", function() {
  //   let body = document.body;

  //   function calculateScrollPercentage() {
  //     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     let scrollHeight = body.scrollHeight - window.innerHeight;
  //     let scrollPercentage = (scrollTop / scrollHeight) * 100;
  //     let title1 = document.querySelector(".title-wrap-1");
  //     let title2 = document.querySelector(".title-wrap-2");
      
  //     if (scrollPercentage >= 52) {
  //       title1.classList.add('overlap')
  //     } else {
  //       title1.classList.remove('overlap')
  //     }


  //     if (scrollPercentage >= 59) {
  //       title2.classList.add('overlap')
  //     } else {
  //       title2.classList.remove('overlap')
  //     }

  //     requestAnimationFrame(calculateScrollPercentage);
  //   }

  //   calculateScrollPercentage();
  // });

// ДОБАВЛЕНИЕ КЛАССА В УСЛУГАХ

function checkOverlap() {
  const title1 = document.querySelector(".title-wrap-1");
  const title2 = document.querySelector(".title-wrap-2");
  const trigger1 = document.querySelector('.services-item-wrap-2');
  const trigger2 = document.querySelector('.services-item-wrap-3');

  const rect1 = title1.getBoundingClientRect();
  const rect2 = title2.getBoundingClientRect();
  const triggerRect1 = trigger1.getBoundingClientRect();
  const triggerRect2 = trigger2.getBoundingClientRect();

  if (
    triggerRect1.right >= rect1.left &&
    triggerRect1.left <= rect1.right &&
    triggerRect1.bottom >= rect1.top &&
    triggerRect1.top <= rect1.bottom
  ) { title1.classList.add('overlap')
  } else title1.classList.remove('overlap')

  if (
    triggerRect2.right >= rect2.left &&
    triggerRect2.left <= rect2.right &&
    triggerRect2.bottom >= rect2.top &&
    triggerRect2.top <= rect2.bottom
  ) { title2.classList.add('overlap')
  } else title2.classList.remove('overlap')
}

// Call the checkOverlap function whenever needed (e.g., on scroll, resize, etc.)
window.addEventListener('scroll', checkOverlap);
window.addEventListener('resize', checkOverlap);