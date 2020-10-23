let skills = document.querySelector("#skill");
let about = document.querySelector(".about");
let converseKR = document.querySelector(".converseKR");
let kyoboBookStory = document.querySelector(".kyoboBookStory");
let visualStory = document.querySelector(".visualstory");
let seoulMarathon = document.querySelector(".seoulMarathon");
let clap = document.querySelector(".clap");
let scrollBtn = document.querySelector(".scrollUp");
let profile = document.querySelector("#profile");

scrollBtn.addEventListener("click",smoothScroll);
    // window.scrollTo(0,0);;

function smoothScroll(event){
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if(!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance , duration));
        if(progress < duration) window.requestAnimationFrame(step);
    }
}

function easeInOutCubic(t, b, c, d){
    t /= d/2;
    if(t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t +2) + b;
}
// 클릭시 스크롤 업


let no = document.querySelectorAll("#skill .no");
function countUp(idx){
    let num = 0
    let targetNum = no[idx].getAttribute('data-rate');
    let timer = setInterval(function(){
        ++num;
        no[idx].innerText = num;
        if(num == targetNum){
            clearInterval(timer);
        }
    },15);
}

// countUp 코드

window.addEventListener("scroll",function(){
        let st = window.pageYOffset;
        //console.log(st)
        if(st >= 401) {
            skills.classList.add("on"); 
        } else if (st < 500){
            for(let i = 0; i < no.length; i++){
                countUp(i)
            }   
        }
        if (st >= profile.offsetTop-300){
           about.classList.add("on");
        }
        if (st >= converseKR.offsetTop){
            console.log(converseKR.offsetTop)
            converseKR.classList.add("on");
        }
        if(st >= 2300){
            kyoboBookStory.classList.add("on");
        }
        if(st >= 2900){
            seoulMarathon.classList.add("on");
        }
        if(st >= 3600){
            visualStory.classList.add("on");
        }
        if(st >= 4100){
            clap.classList.add("on");
        }
        if(st >= 5500){
            scrollBtn.style.bottom="70px";
            scrollBtn.style.opacity="1";
        } else {
            scrollBtn.style.bottom="30px";
            scrollBtn.style.opacity="0";
        }
        return true;
    });

// 스크롤시 애니메이션



let ratio = window.devicePixelRatio;
    //console.log(ratio);
    if (ratio >= 2 && window.innerWidth <= 1800){
        // $("body").addClass("mobile");
        document.querySelector("body").classList.add("mobile");
    } else {
        document.querySelector("body").classList.add("pc");
    };
// PC / MOBILE 접속 구분 
