// STATISTIQUE

// const loaders = [
//     { id: 1, target: 120 },
//     { id: 2, target: 93 },
//     { id: 3, target: 40 },
//     { id: 4, target: 50 },
//     { id: 5, target: 65 },
//   ];
  
//   function updateLoader(loader, current) {
//     const loadingNumber = document.querySelector(`#loadingNumber${loader.id}`);
//     const loadingCircle = document.querySelector(`#circle${loader.id}`);
    
//     loadingNumber.innerHTML = current;
//     loadingCircle.style.background = `conic-gradient(from 0deg at 50% 50%, rgba(111, 123, 247, 1) 0%, rgba(155, 248, 244, 1) ${current}%, #101012 ${current}%)`;
//   }
  
//   function startLoadingCycle() {
//     loaders.forEach(loader => {
//       let load = 0;
//       const interval = setInterval(() => {
//         load += (load < loader.target);
//         updateLoader(loader, load);
        
//         if (load >= loader.target) {
//           clearInterval(interval);
//         }
//       }, 700);
//     });
//   }
  
//   function loopLoading() {
//     startLoadingCycle();
    
//     setTimeout(() => {
//       document.querySelectorAll('.loading-circle').forEach(circle => {
//         circle.style.background = 'conic-gradient(from 0deg at 50% 50%, rgba(111, 123, 247, 1) 0%, rgba(155, 248, 244, 1) 0%, #101012 0%)';
//       });
//       document.querySelectorAll('.loading-count span').forEach(span => {
//         span.innerHTML = '0';
//       });
//       loopLoading();
//     }, 90000); // 5 intervals of 150ms * 4 (max load = 4 intervals) + 10 seconds wait
//   }
  
//   loopLoading();


$(document).ready(function() {
  $('.count-number').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      $({ countNum: $this.text() }).animate({
          countNum: countTo
      },
      {
          duration: 19000,
          easing: 'swing',
          step: function() {
              $this.text(Math.floor(this.countNum));
          },
          complete: function() {
              $this.text(this.countNum);
          }
      });
  });
});


