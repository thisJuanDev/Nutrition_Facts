var subitem = document.getElementsByClassName("subitem");
var item = document.getElementsByClassName("item");

var i;

// for (i = 0; i < subitem.length; i++) {
//   subitem[i].addEventListener("click", function() {
//     // this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     // if (content.style.display === "block") {
        
//     //   content.style.display = "none";
//     // } else {
//     //   content.style.display = "block";
//     // }

//     if (content.style.maxHeight){
//         content.style.maxHeight = null;
//       } else {
//         content.style.maxHeight = content.scrollHeight + "px";
//       } 
//   });

  
// } 

for (i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function() {
    // this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

for (i = 0; i < subitem.length; i++) {
  subitem[i].addEventListener("click", function() {
    // this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

