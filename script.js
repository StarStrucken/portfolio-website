//typewriter header
var typed = new Typed('.typewriter', {
    strings: ["High School Student", "Computer Programmer", "Game Enthusiast", "Soccer Athlete"],
    typeSpeed: 100,
    backSpeed: 125,
    loop: true
});



//switch between tabs in about section
const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}//opentab


//alerts for certain apps
function mediaAlert(application){
    if(application === 'discord'){
        alert("My Discord tag is: 𝗶𝘃𝗮𝗻.𝗰#𝟲𝟵𝟲𝟭");
    }
}//mediaAlert



//credit to jamiewilson on github from contact list to google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbz6UwW8w5U_NxByU7hu0Kf47q5njTVss_K1X3rgsAZ-Hr_XKsU4TaNZL9NybiA3NwN7yg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully."
            setTimeout(function(){
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})