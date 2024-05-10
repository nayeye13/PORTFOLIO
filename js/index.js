
//바깥 슬라이드
// var swiperH = new Swiper("swiper-container-h", {
//          direction: "vertical",
//          pagination: {
//            el: ".swiper-pagination",
//            clickable: true,
//          },
//        });

      
const mySwiper = new Swiper('.mySwiper',{
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    debugger: true,
    mousewheel: true,
          grabCursor: true,
          
    pagination:  '.swiper-pagination-f',
               nested:true
  })
  






const swiperS = new Swiper('.second', {
    autoplay: 3000,
    loop: true,
    parallax: true,
    pagination: '.swiper-pagination-s',
    paginationClickable: true,
    grabCursor: true,
    speed: 1000,
    mousewheel:true,
    direction: "horizontal",
    
  
    onTransitionStart(swiperS) {
          if ($(".swiper-slide-active").hasClass(".swiper-slide")) {
            $(".slide-body").siblings(".Project").css("background-color", "#6D889F");
          } else {
            $(".slide-body").siblings(".Project").css("background-color", "#E74824");
          }
                  //  if ($(".Project1 .swiper-slide-active").hasClass(".swiper-slide")) {
                  //    $(".slide-body").css("background-color", "#dbe8ff");
                  //  } else if ($(".Project2 .swiper-slide-active").hasClass(".swiper-slide")){
                  //    $(".slide-body").css("background-color", "#ffcc41");
                  //  } else if($(".Project3 .swiper-slide-active").hasClass(".swiper-slide")) {
                  //    $(".slide-body").css("background-color", "#4346f3");
                  //  }else if($(".Project4 .swiper-slide-active").hasClass(".swiper-slide")){
                  //    $(".slide-body").css("background-color", "#6D889F");
                  //  } else if ($(".Project5 .swiper-slide-active").hasClass(".swiper-slide")) {
                  //    $(".slide-body").css("background-color", "#E74824");
                  //  
                }
                 }
               );




//프로젝트 슬라이드
// $(document).ready(function () {
//          //initialize swiper when document ready  
//          var mySwiperV = new Swiper ('.swiper-container-v', {
//            autoplay: 1600,
//            loop: true,
//            parallax: true,
//            pagination: '.swiper-pagination',
//            paginationClickable: true,
//            grabCursor: true,
//            speed: 900,
//            direction: "horizontal",

//            onTransitionStart(mySwiperV) {
//              if ($(".Project .swiper-slide-active").hasClass("Project-5")) {
//                $(".slide-wrap").css("background-color", "#dbe8ff");
//              } else if ($(".Project .swiper-slide-active").hasClass("Project-4")){
//                $(".slide-wrap").css("background-color", "#ffcc41");
//              } else if($(".Project .swiper-slide-active").hasClass("Project-3")) {
//                $(".slide-wrap").css("background-color", "#4346f3");
//              }else if($(".Project .swiper-slide-active").hasClass("Project-2")){
//                $(".slide-wrap").css("background-color", "#6D889F");
//              } else if ($(".Project .swiper-slide-active").hasClass("Project-1")) {
//                $(".slide-wrap").css("background-color", "#E74824");
//              }

//            }
//          });
// });


// const mySwiper = new Swiper('.mySwiper',{
//   direction: 'vertical',
//   pagination: {
//              el: '.swiper-pagination',
//               clickable: true,
//              },
// })

// const swiper = new Swiper('second', {
//   autoplay: 1600,
//   loop: true,
//   parallax: true,
//   pagination: '.swiper-pagination',
//   paginationClickable: true,
//   grabCursor: true,
//   speed: 900,
//   direction: "horizontal",

//   onTransitionStart() {
//                  if ($(".Project .swiper-slide-active").hasClass("Project-5")) {
//                    $(".slide-wrap").css("background-color", "#dbe8ff");
//                  } else if ($(".Project .swiper-slide-active").hasClass("Project-4")){
//                    $(".slide-wrap").css("background-color", "#ffcc41");
//                  } else if($(".Project .swiper-slide-active").hasClass("Project-3")) {
//                    $(".slide-wrap").css("background-color", "#4346f3");
//                  }else if($(".Project .swiper-slide-active").hasClass("Project-2")){
//                    $(".slide-wrap").css("background-color", "#6D889F");
//                  } else if ($(".Project .swiper-slide-active").hasClass("Project-1")) {
//                    $(".slide-wrap").css("background-color", "#E74824");
//                  }
//                }
//              });



console.clear();

select = e => document.querySelector(e);
selectAll = e => document.querySelectorAll(e);

const container = select('.slide-container');
let wArray = [614, 614, 614, 278, 404],
    tl;

function animate() {
    tl = gsap.timeline( { 
        delay: 0.5,
        repeat: -1, 
        defaults: {
            ease: "expo.inOut",
            duration: 2
        }
    });
    
    tl.from('.container__base', {
        scaleX: 0,
        duration: 2,
        transformOrigin: "top right",
        // ease: "expo"
    })
    
    .from('.sign__svg-rects rect', {
        scaleX: 0,
        stagger: 0.07,
        duration: 3,
        ease: "expo"
    }, "-=1.0")
    
    .to('.sign__txt-bg rect', {
        stagger: 0.14,
        scaleX: 1
    }, "-=2.5")
    
    .from('text', {
        x: function(i) {
            return -wArray[i]
        },
        ease: 'power4',
        stagger: 0.14
    }, "-=1.6")
    
    .from('.sign__img', {
        x: "+=200",
        ease: 'power4',
        duration: 15
    }, 0);
}

function init() {
    gsap.set(container, { autoAlpha: 1 });
    
    gsap.set('.sign__txt-bg rect', { 
         width: function(i) {
            return wArray[i]
        },
        scaleX: 0
    })
    
    animate();
    
    container.onclick = () => {
        tl.restart();
    }

}

function resize() {
	let vw = window.innerWidth;
    let vh = window.innerHeight;
	let wh = container.offsetWidth;
	let scaleFactor = 1;
    
    if(vw/vh >= 1) {
        scaleFactor = vh/wh
    }
    else {
        scaleFactor = vw/wh
    }
    
	if(scaleFactor<1) {
		gsap.set(container, { scale: scaleFactor });
	}
	else {
        gsap.set(container, { scale: 1 });
    }
}

window.onresize = resize;

window.onload = () => {
	init();
    resize();
    // GSDevTools.create();
};




