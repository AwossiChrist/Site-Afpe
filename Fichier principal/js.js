let slide_data = [
    {
      'src':'https://images.unsplash.com/photo-1506765336936-bb05e7e06295?ixlib=rb-0.3.5&s=d40582dbbbb66c7e0812854374194c2e&auto=format&fit=crop&w=1050&q=80',
      'title':'Slide 1',
      'copy':'Welcome to the first slide. Explore the beauty of nature.'
    },
    {
      'src':'https://images.unsplash.com/photo-1496309732348-3627f3f040ee?ixlib=rb-0.3.5&s=4d04f3d5a488db4031d90f5a1fbba42d&auto=format&fit=crop&w=1050&q=80', 
      'title':'Slide 2',
      'copy':'Dive into the serenity of the ocean. Peace and tranquility await.'
    },
    {
      'src':'https://ix-marketing.imgix.net/2024_07_the-power-of-images-in-creative-work_globe_image.png?auto=format,compress&w=1946', 
      'title':'Slide 3',
      'copy':'Witness the majesty of the mountains. Adventure begins here.'
    },
    {
      'src':'https://images.unsplash.com/photo-1478728073286-db190d3d8ce6?ixlib=rb-0.3.5&s=87131a6b538ed72b25d9e0fc4bf8df5b&auto=format&fit=crop&w=1050&q=80', 
      'title':'Slide 4',
      'copy':'Embrace the calmness of the forest. Find your inner peace.'
    },
    {
      'src':'https://img.freepik.com/photos-gratuite/feuille-automne-orange-vif-transparent_23-2148239677.jpg?t=st=1723124837~exp=1723128437~hmac=988d56c1e98e1f5f694f5c3f312bc2114cdeb01ce2049faec7533d89264f420b&w=1380', 
      'title':'Slide 5',
      'copy':'Embrace the calmness of the forest. Find your inner peace.'
    },
    {
      'src':'https://img.freepik.com/photos-gratuite/piment_144627-17531.jpg?t=st=1723125127~exp=1723128727~hmac=d4aa5ab67e56d9ce6c52cefeb10e42cbe1129f9db13634bbf6f39b485ab5886a&w=99', 
      'title':'Slide 6',
      'copy':'Embrace the calmness of the forest. Find your inner peace.'
    },
    {
      'src':'https://ix-marketing.imgix.net/2024-5_beyond-words_img5-user-experience.jpg?auto=format,compress&w=1946', 
      'title':'Slide 7',
      'copy':'Embrace the calmness of the forest. Find your inner peace.'
    },
    {
      'src':'https://ix-marketing.imgix.net/2024-5_beyond-words_img4-evoke-emotion.jpg?auto=format,compress&w=1946', 
      'title':'Slide 8',
      'copy':'Embrace the calmness of the forest. Find your inner peace.'
    },
    {
      'src':'https://ix-marketing.imgix.net/Break%20Through%20Image.jpg?auto=format,compress&w=1946', 
      'title':'Slide 9',
      'copy':'Embrace the calmness of the forest. Find your inner peace.'
    },
  ];
  
  let slides = [],
    captions = [];
  
  let autoplay = setInterval(function(){
    nextSlide();
  }, 5000);
  
  let container = document.getElementById('container');
  let leftSlider = document.getElementById('left-col');
  let down_button = document.getElementById('down_button');
  
  down_button.addEventListener('click', function(e){
    e.preventDefault();
    clearInterval(autoplay);
    nextSlide();
    autoplay;
  });
  
  for (let i = 0; i < slide_data.length; i++){
    let slide = document.createElement('div'),
        caption = document.createElement('div'),
        slide_title = document.createElement('div');
      
    slide.classList.add('slide');
    slide.setAttribute('style', 'background-image:url(' + slide_data[i].src + '); filter:none;'); // Réinitialiser le filtre ici
    caption.classList.add('caption');
    slide_title.classList.add('caption-heading');
    slide_title.innerHTML = '<h1>' + slide_data[i].title + '</h1>';
    
    switch(i){
      case 0:
          slide.classList.add('current');
          caption.classList.add('current-caption');
          break;
      case 1:
          slide.classList.add('next');
          caption.classList.add('next-caption');
          break;
      case slide_data.length -1:
        slide.classList.add('previous');
        caption.classList.add('previous-caption');
        break;
      default:
         break;       
    }
    
    caption.appendChild(slide_title);
    caption.insertAdjacentHTML('beforeend','<div class="caption-subhead"><span>' + slide_data[i].copy + '</span></div>'); // Légende modifiée pour chaque image
    slides.push(slide);
    captions.push(caption);
    leftSlider.appendChild(slide);
    container.appendChild(caption);
  }
  
  function nextSlide(){
    slides[0].classList.remove('current');
    slides[0].classList.add('previous', 'change');
    slides[1].classList.remove('next');
    slides[1].classList.add('current');
    slides[2].classList.add('next');
    let last = slides.length -1;
    slides[last].classList.remove('previous');
    
    captions[0].classList.remove('current-caption');
    captions[0].classList.add('previous-caption', 'change');
    captions[1].classList.remove('next-caption');
    captions[1].classList.add('current-caption');
    captions[2].classList.add('next-caption');
    let last_caption = captions.length -1;
    
    captions[last].classList.remove('previous-caption');
    
    let placeholder = slides.shift();
    let captions_placeholder = captions.shift();
    slides.push(placeholder); 
    captions.push(captions_placeholder);
  }
  
  let heading = document.querySelector('.caption-heading');
  
  function whichTransitionEvent(){
    var t,
        el = document.createElement("fakeelement");
  
    var transitions = {
      "transition"      : "transitionend",
      "OTransition"     : "oTransitionEnd",
      "MozTransition"   : "transitionend",
      "WebkitTransition": "webkitTransitionEnd"
    }
  
    for (t in transitions){
      if (el.style[t] !== undefined){
        return transitions[t];
      }
    }
  }
  
  var transitionEvent = whichTransitionEvent();
  caption.addEventListener(transitionEvent, customFunction);
  
  function customFunction(event) {
    caption.removeEventListener(transitionEvent, customFunction);
    console.log('animation ended');
  }




  function toggleMenu() {
    const menu = document.querySelector('.btns');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}




  



