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
      resizableElement.style.height = scrollPercentageFast + "%";

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
    
          if (scrollPercentage >= 15) {
            item2.classList.add('perks-item-active')
          } else {
            item2.classList.remove('perks-item-active')
          }
    
          if (scrollPercentage >= 28) {
            item3.classList.add('perks-item-active')
          } else {
            item3.classList.remove('perks-item-active')
          }
    
          requestAnimationFrame(calculateScrollPercentage);
        }
    
        calculateScrollPercentage();
      });
  
  // ИЗМЕНЕНИЕ ВЕРТИКАЛЬНОГО СЛАЙДЕРА

// ДОБАВЛЕНИЕ КЛАССА В УСЛУГАХ
  document.addEventListener("DOMContentLoaded", function() {
    let body = document.body;

    function calculateScrollPercentage() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let scrollHeight = body.scrollHeight - window.innerHeight;
      let scrollPercentage = (scrollTop / scrollHeight) * 100;
      let title1 = document.querySelector(".title-wrap-1");
      let title2 = document.querySelector(".title-wrap-2");

      // if (scrollPercentage >= 51) {
      if (scrollPercentage >= 51) {
        title1.classList.add('overlap')
      } else {
        title1.classList.remove('overlap')
      }

      if (scrollPercentage >= 58) {
        title2.classList.add('overlap')
      } else {
        title2.classList.remove('overlap')
      }

      requestAnimationFrame(calculateScrollPercentage);
    }

    calculateScrollPercentage();
  });

// ДОБАВЛЕНИЕ КЛАССА В УСЛУГАХ