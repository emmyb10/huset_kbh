function fetchJazzConcerts(){
    fetch("http://mintwood.dk/huset/WP/wp-json/wp/v2/jazz_concerts?_embed"
)
    .then(e => e.json ())
    .then (showconcert)
}


function showconcert (data){
    console.log(data);
    data.forEach(showSingleConcert)
}

function showSingleConcert(aConcert){
    console.log(aConcert);
    let template = document.querySelector("#jazzTemp").content;
    let clone = template.cloneNode(true);

    clone.querySelector("h1").textContent = aConcert.title.rendered;
    clone.querySelector(".descript").innerHTML = aConcert.content.rendered;
    clone.querySelector(".ticket").textContent =aConcert.acf.ticket_price;
    clone.querySelector(".venue").textContent =aConcert.acf.venue;
    clone.querySelector(".time").textContent =aConcert.acf.time;
    clone.querySelector(".date").textContent =aConcert.acf.date;


     if(aConcert._embedded["wp:featuredmedia"]){//img is there
     clone.querySelector("img").setAttribute("src", aConcert._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url)
  } else { // no img
      clone.querySelector("img").remove()
  }


    let jazzList = document.querySelector("#concertList");
    jazzList.appendChild(clone);



}

//found this stuff online

function bottomVisible() {
  const scrollY = window.scrollY
  const visible = document.documentElement.clientHeight
  const pageHeight = document.documentElement.scrollHeight
  const bottomOfPage = visible + scrollY >= pageHeight
  return bottomOfPage || pageHeight < visible
}


fetchJazzConcerts();

function myFunction(x) {
    x.classList.toggle("change");
}

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}



function fetchFood(){
    fetch("http://mintwood.dk/huset/WP/wp-json/wp/v2/food")
    .then(e => e.json ())
    .then (showFood)
}


function showFood(data){
    console.log(data)
    data.forEach(showSingleFood)
}

function showSingleFood(aFood){
    console.log(aFood);
    let template = document.querySelector("#foodTemp").content;
    let clone = template.cloneNode(true);

    clone.querySelector("h1").textContent = aFood.title.rendered;
    clone.querySelector(".price").textContent =aFood.acf.price;



    let foodlist = document.querySelector("#foodlist");
    foodlist.appendChild(clone);



}
fetchFood();

let clone = template.cloneNode(true);
            let day= aEvent.acf.date.substring(0,2);
            let month = aEvent.acf.date.substring(2,4);
            let year = aEvent.acf.date.substring(4,8);
            clone.querySelector(".date").textContent=day+"."+month+"."+year;

