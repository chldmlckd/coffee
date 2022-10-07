// 292p
const badgeEl=document.querySelector('.badges');
const topBtnEl=document.querySelector('.top_btn');

topBtnEl.addEventListener('click',function(){
    gsap.to(window,0.6,{ //브라우저를 선택하여 0.6초만에
        scrollTo:0 //스크롤 꼭때기 0까지 올라간다.
    });
});

window.addEventListener('scroll',function(){
    console.log(window.scrollY); // 스크롤 값 확인하기
    if(638<=this.window.scrollY){
        // badgeEl.style.display='none';
        gsap.to(badgeEl,0.6,{
            opacity:0,
            display:'none'
        });
        gsap.to(topBtnEl,0.6,{
            opacity:1
        });
    }else{
        // badgeEl.style.display='block';
        gsap.to(badgeEl,0.6,{
            opacity:1,
            display:'block'
        });
        gsap.to(topBtnEl,0.6,{
            opacity:0
        });
    }
});

// gsap.to(요소, 시간, 속성)

const fadeEl=document.querySelectorAll('.fadein');

fadeEl.forEach(function(fadeEl, index){
    gsap.to(fadeEl,1,{
        delay:(index+1)*0.7, //0.7초씩 느리게 시간을 추가
        opacity:1
    });
});
gsap.to('.m_img1',1.5,{
    delay:1,
    y:15,
    repeat:-1,
    yoyo:true,
    ease:Power1.easeInOut
});
gsap.to('.m_img2',2,{
    delay:0.5,
    y:15,
    repeat:-1,
    yoyo:true,
    ease:Power1.easeInOut
});
gsap.to('.m_img3',2.5,{
    delay:1.5,
    y:20,
    repeat:-1,
    yoyo:true,
    ease:Power1.easeInOut
});


//6,7,8,9,10번 콘텐츠가 화면의 80% 지점에 보일 때 동작 하는 스크립트
const spyEl=document.querySelectorAll('section.scroll-spy');
spyEl.forEach(function(spyEl){//forEach는 spyEl에 있는 scroll-spy모두에게 이 함수를 적용시킨다.
    new ScrollMagic
    .Scene({//감시할 장면을 츠가
        triggerElement:spyEl,
        triggerHook:0.8 //화면의 80% 지점에서 동작
    })
    .setClassToggle(spyEl,'show')//show클래스를 적용하거나 해제하기
    .addTo(new ScrollMagic.Controller());//컨트롤러에 장면을 할당한다.
});
const thYear=document.querySelector('.this-year');
thYear.textContent=new Date().getFullYear();