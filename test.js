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
    clone.querySelector("h2").textContent =aConcert.acf.price


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



fetchJazzConcerts()
