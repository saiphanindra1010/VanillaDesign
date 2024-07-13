btnclick=document.querySelectorAll('.faqbtn')
panel=document.querySelectorAll('.answer')
console.log(btnclick.length)
console.log(panel.length)
const btnarr = Array.from(btnclick);
console.log("brtm ",btnarr[0])
const ansarr = Array.from(panel);
for (let i = 0; i < btnarr.length; i++) {

    btnarr[i].addEventListener("click", function() {
        console.log(i)
         if (ansarr[i].style.display === "block") {
            ansarr[i].style.display = "none";
      } else {
        ansarr[i].style.display = "block";
      }
    });
  }

