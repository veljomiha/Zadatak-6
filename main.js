//FIRST MODAL
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//SECOND MODAL
var modal2 = document.getElementById("myModal2");
var continue1 = document.getElementById("continue1");
var continue2 = document.getElementById("continue2");
var continue3 = document.getElementById("continue3");
var continue4 = document.getElementById("continue4");
var gotIt = document.getElementById("got-it");
var bookmarkP = document.getElementById("bookmarkP");



continue1.onclick = function() {
  modal2.style.display = "block";
}
continue2.onclick = function() {
  modal2.style.display = "block";
}
continue3.onclick = function() {
  modal2.style.display = "block";
}
continue4.onclick = function() {
  modal2.style.display = "block";
}
gotIt.onclick = function() {
  modal.style.display = "none";
  modal2.style.display = "none";
  bookmarkP.style.color = "#147A73"
  
}


//OPACITY DIV (modal - days left = 0)
// const daysLeft = document.getElementById("days-l");
// const modalOpacty = document.getElementById("modal-content--box2-mahogany");

//   function daysLeft0() {
//     if(daysLeft.textContent === "0"){
//       modalOpacty.style.opacity = "0.5";
//     }
// }
// window.addEventListener("load",daysLeft0);


//Radio buttons checked

//radio button 1
const rb1 = document.getElementById("rb1");
const rb1PartOne = document.getElementById("box2-part11");
const rb1PartTwo = document.getElementById("box2-part21");
const box1 = document.getElementById("modal-content--box21");

function showRB1(){
  if(rb1.checked === true){
    rb1PartTwo.style.display = "flex";
    rb2PartTwo.style.display = "none";
    rb3PartTwo.style.display = "none";
    rb4PartTwo.style.display = "none";
    box1.style.border = "2px solid #3CB3AB";
    box2.style.border = "1px solid rgba(0, 0, 0, 0.15)";
    box3.style.border = "1px solid rgba(0, 0, 0, 0.15)";
    box4.style.border = "1px solid rgba(0, 0, 0, 0.15)";
  }
  else{
    rb1PartTwo.style.display = "none";
  }
}
rb1PartOne.addEventListener("click",showRB1);

//radio button 2
const rb2 = document.getElementById("rb2");
const rb2PartOne = document.getElementById("box2-part12");
const rb2PartTwo = document.getElementById("box2-part22");
const box2 = document.getElementById("modal-content--box22");


function showRB2(){
  if(rb2.checked === true){
    rb2PartTwo.style.display = "flex";
    rb1PartTwo.style.display = "none";
    rb3PartTwo.style.display = "none";
    rb4PartTwo.style.display = "none";
    box2.style.border = "2px solid #3CB3AB";
    box1.style.border = "1px solid rgba(0, 0, 0, 0.15)";
    box3.style.border = "1px solid rgba(0, 0, 0, 0.15)";
    box4.style.border = "1px solid rgba(0, 0, 0, 0.15)";
  }
  else{
    rb2PartTwo.style.display = "none";
  }
}
rb2PartOne.addEventListener("click",showRB2);

//radio button 3
const rb3 = document.getElementById("rb3");
const rb3PartOne = document.getElementById("box2-part13");
const rb3PartTwo = document.getElementById("box2-part23");
const box3 = document.getElementById("modal-content--box23");

function showRB3(){
  if(rb3.checked === true){
    rb3PartTwo.style.display = "flex";
    rb1PartTwo.style.display = "none";
    rb2PartTwo.style.display = "none";
    rb4PartTwo.style.display = "none";
    box3.style.border = "2px solid #3CB3AB";
    box1.style.border = "1px solid rgba(0, 0, 0, 0.15)";
    box2.style.border = "1px solid rgba(0, 0, 0, 0.15)";
    box4.style.border = "1px solid rgba(0, 0, 0, 0.15)";

  }
  else{
    rb3PartTwo.style.display = "none";
  }
}
rb3PartOne.addEventListener("click",showRB3);

//radio button 4
const rb4 = document.getElementById("rb4");
const rb4PartOne = document.getElementById("box2-part14");
const rb4PartTwo = document.getElementById("box2-part24");
const box4 = document.getElementById("modal-content--box24");


// function showRB4(){
//   if(rb4.checked === true){
//     rb4PartTwo.style.display = "flex";
//     rb1PartTwo.style.display = "none";
//     rb2PartTwo.style.display = "none";
//     rb3PartTwo.style.display = "none";
//     box4.style.border = "2px solid #3CB3AB";
//     box1.style.border = "1px solid rgba(0, 0, 0, 0.15)";
//     box2.style.border = "1px solid rgba(0, 0, 0, 0.15)";
//     box3.style.border = "1px solid rgba(0, 0, 0, 0.15)";
//   }
//   else{
//     rb4PartTwo.style.display = "none";
//   }
// }
// rb4PartOne.addEventListener("click",showRB4);


//Select "Bamboo stand"
const selectBambo = document.getElementById("select-bamboo");

function showBambo() {
  modal.style.display = "block";
  rb2PartTwo.style.display = "flex";
  box2.style.border = "2px solid #3CB3AB";
  box3.style.border = "1px solid rgba(0, 0, 0, 0.15)";
  box4.style.border = "1px solid rgba(0, 0, 0, 0.15)";

}
selectBambo.addEventListener("click",showBambo);

//Select "Black edition stand"
const selectBlackEdition = document.getElementById("select-black");

function showBlackEdition() {
  modal.style.display = "block";
  rb3PartTwo.style.display = "flex";
  box3.style.border = "2px solid #3CB3AB";
  box2.style.border = "1px solid rgba(0, 0, 0, 0.15)";
  box4.style.border = "1px solid rgba(0, 0, 0, 0.15)";

}
selectBlackEdition.addEventListener("click",showBlackEdition);

//Select "Mahogany special edition"
// const selectMahogany= document.getElementById("select-mahogany");

// function showMahogany() {
//   modal.style.display = "block";
//   rb4PartTwo.style.display = "flex";
//   box4.style.border = "2px solid #3CB3AB";
//   box2.style.border = "1px solid rgba(0, 0, 0, 0.15)";
//   box3.style.border = "1px solid rgba(0, 0, 0, 0.15)";
// }
// selectMahogany.addEventListener("click",showMahogany);

//Bookmark click
var btnBookmark = document.getElementById("btn-two")

btnBookmark.onclick = function(){
  bookmarkP.textContent = "Bookmarked";
}


  // return total.textContent.split(',').join("");

  var total = document.getElementById("total-result");
  var counter = document.getElementById("counter");
  var left2 = document.getElementById("left-box2");
  var left3 = document.getElementById("left-box3");
  var left2Main = document.getElementById("left2Main");
  var left3Main = document.getElementById("left3Main");
  var range = document.getElementById("range");
  
continue2.addEventListener("click", function(){
  // var totalReplace = total.textContent.replace(/,/g, '');
  var totalReplace = total.textContent.split(',').join("");
  var totalFloat = parseFloat(totalReplace);
  var box2Value = document.getElementById("box2-number").value;
  var box2Float = parseFloat(box2Value);
  var totalResult = totalFloat + box2Float;
  if(totalResult > 100000){
    totalResult = 100000;
    var totalResultLS = totalResult.toLocaleString("en-us");
    total.textContent = totalResultLS;
  }
  else{
    var totalResultLS = totalResult.toLocaleString("en-us");
    total.textContent = totalResultLS;
  }

//Total backers
  var counterReplace = counter.textContent.replace(/,/g, '');
  var counterFloat = parseFloat(counterReplace);
  var counterResult = counterFloat + 1;
  counter.textContent = counterResult.toLocaleString("en-us");

//Left modal page
  var left2Replace = left2.textContent.replace(/,/g, '');
  var left2Float  = parseFloat(left2Replace);
  left2.textContent = left2Float - 1;

//Left main page
  var left2MainReplace = left2Main.textContent.replace(/,/g, '');
  var left2MainFloat  = parseFloat(left2MainReplace);
  left2Main.textContent = left2MainFloat - 1;

//Range 
  widthRange = total.textContent / 1000;
  range.style.width = widthRange+"%";
});

continue3.addEventListener("click", function(){
  var totalReplace = total.textContent.replace(/,/g, '');
  var totalFloat = parseFloat(totalReplace);
  var box3Value = document.getElementById("box3-number").value;
  var box3Float = parseFloat(box3Value);
  var totalResult = totalFloat + box3Float;
  if(totalResult > 100000){
    totalResult = 100000;
    var totalResultLS = totalResult.toLocaleString("en-us");
    total.textContent = totalResultLS;
  }
  else{
    var totalResultLS = totalResult.toLocaleString("en-us");
    total.textContent = totalResultLS;
  }

//Total backers
  var counterReplace = counter.textContent.replace(/,/g, '');
  var counterFloat = parseFloat(counterReplace);
  var counterResult = counterFloat + 1;
  counter.textContent = counterResult.toLocaleString("en-us");

//Left modal page
  var left3Replace = left3.textContent.replace(/,/g, '');
  var left3Float  = parseFloat(left3Replace);
  left3.textContent = left3Float - 1;

//Left main page
  var left3MainReplace = left3Main.textContent.replace(/,/g, '');
  var left3MainFloat  = parseFloat(left3MainReplace);
  left3Main.textContent = left3MainFloat - 1;

//Range 
  widthRange = total.textContent / 1000;
  range.style.width = widthRange+"%";
});

//Hamburger
var burgerMenu = document.getElementById('burger-menu');
var modeImg = document.getElementById("modeImg")
        var overlay = document.getElementById('menu');
        burgerMenu.addEventListener('click', function () {
            this.classList.toggle("close");
            overlay.classList.toggle("overlay");

            /*BOOKMARK WHITE*/
            if (modeImg.src.match("images/logo.svg")) {
            modeImg.style.zIndex = "10";
            }
            /*SCROLL*/
            if(document.getElementsByTagName('html')[0].style.overflowY == "hidden"){
                document.getElementsByTagName('html')[0].style.overflowY = "auto";
            }
            else{
             document.getElementsByTagName('html')[0].style.overflowY = "hidden";
            }
        });
