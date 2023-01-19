//탭 전환

const thumTab = document.querySelectorAll(".thum_tab");
const recommGallery = document.querySelectorAll(".recomm_gallery");
for(let i = 0; i<thumTab.length; i++){
  thumTab[i].addEventListener("click",()=>{
    for(let j = 0; j <thumTab.length; j++){
      thumTab[j].classList.remove('green_active');
      recommGallery[j].classList.add('thumhide');
    }
      thumTab[i].classList.add('green_active');
      recommGallery[i].classList.remove('thumhide');
  })

}

const planediary = document.querySelectorAll(".planediary");
const planeGallery = document.querySelectorAll(".plane_gallery");
for(let i = 0; i<planediary.length; i++){
  planediary[i].addEventListener("click",()=>{
    for(let j = 0; j <planediary.length; j++){
      planediary[j].classList.remove('green_active');
      planeGallery[j].classList.add('thumhide');
    }
    planediary[i].classList.add('green_active');
    planeGallery[i].classList.remove('thumhide');
  })

}


const rankTab = document.querySelectorAll(".rank_tab");
const user_rank = document.querySelectorAll(".user_rank");

for(let i = 0; i<2; i++){
  rankTab[i].addEventListener("click",()=>{
    for(let j = 0; j <2; j++){
      rankTab[j].classList.remove('green_active');
      user_rank[j].classList.add('thumhide');
    }
    rankTab[i].classList.add('green_active');
    user_rank[i].classList.remove('thumhide');
  })

}

// 랭킹 날짜
const day = document.querySelector(".day");

const today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1; 
let date = today.getDate();

let oldday = new Date(today.setDate(today.getDate() - 7));
let oldyear = oldday.getFullYear();
let oldmonth = oldday.getMonth()+1;
let olddate = oldday.getDate()

day.innerHTML = `${oldyear}.${oldmonth}.${olddate} ~ ${year}.${month}.${date} 기준`
