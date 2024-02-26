let scrollToTopBtn = document.querySelector(".floatingBtn");


let rootElement = document.documentElement


function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  console.log('scroll',scrollTotal)
  if ((rootElement.scrollTop / scrollTotal ) > 0.05 ) {
    scrollToTopBtn.classList.add("showBtn")
  } else {
    scrollToTopBtn.classList.remove("showBtn")
  }
}


document.addEventListener("scroll", handleScroll)