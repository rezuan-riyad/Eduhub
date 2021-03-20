export function scrollEffect(){
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if(window.innerWidth < 601){
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "-70px";
        }
        prevScrollpos = currentScrollPos;
    }
  }
}
