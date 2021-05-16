// --toggle body scrolling filtering page 안에 스크롤 없앰--
function toggleBodyScrolling(){
    document.body.classList.toggle("hide-scrolling");
  }
  // 
  
  
  // --Filter Portfolio Items--
  
  const filterBtnsContainer = document.querySelector(".portfolio-filter");
  // popup item
  let portfolioItems;
  filterBtnsContainer.addEventListener("click", (e)=> {
    if(e.target.classList.contains("portfolio-filter-btn")&&
    !e.target.classList.contains("active")){
      filterBtnsContainer.querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
      // toggle 추가
      toggleBodyScrolling();
  
      // --filtering page javascript--
      // document.querySelector(".filter-status").classList.add("active");
      // document.querySelector(".filter-status p").innerHTML= `filtering <span>${e.target.innerHTML}</span> works`;
      // setTimeout(() => {
      //   filterItems(e.target);
      // }, 400);
      // setTimeout(() =>{
        
      // document.querySelector(".filter-status").classList.remove("active");
      // // toggle 추가
      // toggleBodyScrolling();
      // },800);
  // filtering 작동 x 
      filterItems(e.target);
    }
      
  });
  function filterItems(filterBtn){
    const selectedCategory = filterBtn.getAttribute("data-filter");
  //   // getAttribute 해당 요소의 속성값을 반환하는 함수
  //   // ex) var attribute = 가져올 요소이름.getAttribute("요소의 속성 이름");
  //   //setAttribute 속성을 바꾸는 함수
    document.querySelectorAll (".portfolio-item").forEach((item)=> {
     const category = item.getAttribute("data-category");
    console.log(category);
      if(category.indexOf(selectedCategory) !== -1 || selectedCategory === "all"){
        item.classList.add("show");
      }
      else{
        item.classList.remove("show");
      }
    });
    // popup portfolioItem 전부 선택
    portfolioItems = document.querySelectorAll(".portfolio-item.show");
    
  }
  filterItems(document.querySelector(".portfolio-filter-btn.active"));
  
  // --portfolio Item Details popup --
  let portfolioItemIndex;
  document.addEventListener("click", (e)=> {
    if(e.target.closest(".portfolio-item")){
      const currentItem = e.target.closest(".portfolio-item");
      //  portfolioitem 현재선택된 것 보여줌: 순서대로 부여된 번호
      portfolioItemIndex = Array.from(portfolioItems).indexOf(currentItem);
      // console.log(portfolioItemIndex);
      togglePopup();
      portfolioItemDetails();
      updateNextPrevItem();
    }
  });
  // closest: 자신을 포함해 가장 가까운 조상 요소를 찾을 수 있게함 찾은후 반환
  
  // popup 뜨도록 css .portfolio-popup.open 실행 1.15
  // * class . 을 안찍어 오류, f4에서 document 부분에 오류 표시됌
  function togglePopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    toggleBodyScrolling();
  }
  // .pp-close-btn class 선택후 click event 발생 닫힘버튼
  document.querySelector(".pp-close-btn").addEventListener("click", togglePopup);
  
  // --  popup 에 portfolio item description 맞게 띄우기
  function portfolioItemDetails(){
    document.querySelector(".pp-thumbnail img").src =
    portfolioItems[portfolioItemIndex].querySelector("img").src;
    //.pp-thumbnail img 안에 알맞은 이미지
  
    document.querySelector(".pp-header h3").innerHTML =
    portfolioItems[portfolioItemIndex].querySelector(".portfolio-item-title").innerHTML;
  
    document.querySelector(".pp-body").innerHTML =
    portfolioItems[portfolioItemIndex].querySelector(".portfolio-item-details").innerHTML;
  
    document.querySelector(".pp-counter").innerHTML = `${portfolioItemIndex+1} of ${portfolioItems.length}
  (<span title="category">${document.querySelector(".portfolio-filter-btn.active").innerHTML}</span>)`;
  }
  
  // --prev button에 이전제목 이미지 표시
  function updateNextPrevItem(){
    if(portfolioItemIndex !== 0){
    document.querySelector(".pp-footer-left").classList.remove("hidden");
    document.querySelector(".pp-footer-left h3").innerHTML = 
    portfolioItems[portfolioItemIndex-1].querySelector("h3").innerHTML;
  
    document.querySelector(".pp-footer-left img").src =
    portfolioItems[portfolioItemIndex-1].querySelector("img").src;
  }
  else{
    document.querySelector(".pp-footer-left").classList.add("hidden");
  }
  
  if(portfolioItemIndex !== portfolioItems.length-1){
    document.querySelector(".pp-footer-right").classList.remove("hidden");
    document.querySelector(".pp-footer-right h3").innerHTML = 
    portfolioItems[portfolioItemIndex+1].querySelector("h3").innerHTML;
  
    document.querySelector(".pp-footer-right img").src =
    portfolioItems[portfolioItemIndex+1].querySelector("img").src;
  }
  else{
    document.querySelector(".pp-footer-right").classList.add("hidden");
  
  
  }
  }
  
  // .pp-prev-btn class 불러와 클릭 changePortfolioItem("prev") 발생
  document.querySelector(".pp-prev-btn").addEventListener("click",()=>{
    changePortfolioItem("prev");
  });
  document.querySelector(".pp-next-btn").addEventListener("click",()=>{
    changePortfolioItem("next");
  });
  
  // --prev next 버튼 동작
  function changePortfolioItem(direction){
    // console.log(direction); -> prev next 뜨는지 확인o
    if(direction == "prev"){
      portfolioItemIndex--;
    }
    else{
      portfolioItemIndex++;
    }
    document.querySelector(".pp-inner").scrollTo(0,0);
    portfolioItemDetails();
    updateNextPrevItem();
  }
  // scrollTo: