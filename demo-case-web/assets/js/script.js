'use strict'

// change language
let languagesArea = document.querySelector('.languages');
let languages = document.querySelectorAll(".languages ul li");

document.querySelector('.lang').addEventListener("click", function () {
    languagesArea.classList.toggle("hidden")
})

languages.forEach(language => {
    language.addEventListener("click", function (e) {
        let langName = e.target.innerText;
        document.querySelector('.lang').previousElementSibling.innerText = langName
    })
});


//watchlist
let watchlist = document.querySelector('.watchlist');
let watchlistArea = document.querySelector('.watchlist-area');

watchlist.addEventListener("click", function () {
    watchlistArea.classList.toggle('hidden');
})


//signin
let signinButton = document.querySelector('.sign-in');
let signinArea = document.querySelector('.signin-modal');
let overlay = document.querySelector('.overlay');

signinButton.addEventListener("click", function () {
    signinArea.classList.toggle('hidden');
    overlay.style.opacity = '1'
    overlay.style.visibility = 'visible'
})



//close buttons
let watchlistCloseButton = document.querySelector('.close-button');
let signinCloseButton = document.querySelector('.close-icon');

watchlistCloseButton.addEventListener("click", function () {
    watchlistArea.classList.toggle('hidden');
    signinArea.classList.add('hidden');
})

signinCloseButton.addEventListener("click", function () {
    signinArea.classList.add('hidden');
    overlay.style.opacity = "0"
    overlay.style.visibility = 'hidden'
})



//mobile menu
let menuArea = document.querySelector('.navbar-menu-area');
let burgerMenu = document.querySelector('.hamburger-menu');
let line = document.querySelector('.hamburger-menu .de-active-line');

burgerMenu.addEventListener("click", function () {
    menuArea.classList.toggle('active');
    if(line.classList.contains('de-active-line')){
        line.classList.remove('de-active-line');
        line.classList.add('active-line');
        overlay.style.opacity = "1"
        overlay.style.visibility = 'visible'
    }
   else if(line.classList.contains('active-line')){
        line.classList.remove('active-line');
        line.classList.add('de-active-line');
        overlay.style.opacity = "0"
        overlay.style.visibility = 'hidden'
    }
})

//overlay
overlay.addEventListener("click", function () {
    signinArea.classList.toggle('hidden');
   
    if(!menuArea.classList.contains('active')){
        menuArea.classList.add('active');
    }
    overlay.style.opacity = "0"
    overlay.style.visibility = 'hidden'
    if(line.classList.contains('active-line')){
        line.classList.remove('active-line');
        line.classList.add('de-active-line');
    }

})

//click the body
document.addEventListener("click", function (e) {
    if (!e.target.closest('.lang')) {
        if (!languagesArea.classList.contains('hidden')) {
            languagesArea.classList.add("hidden")
        }
    }
    if (!e.target.closest('.watchlist')) {
        if (!watchlistArea.classList.contains('hidden')) {
            watchlistArea.classList.add("hidden")
        }
    }
})

