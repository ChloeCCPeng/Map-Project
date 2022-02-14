const mapImg = document.querySelector("#map-image");
const cityName = document.querySelector("#city-name");

const getPOIs = () => {
    fetch("https://www.triposo.com/api/20220104/location.json?part_of=United_States&tag_labels=city&count=10&order_by=-score&fields=name,id,snippet,parent_id,score,type,images,coordinates&account=7GPWA5CT&token=8w8tduvc82ln7ebbx42bd1ugcd6hxbcw")
    .then(res => res.json())
    .then(data => renderCitiesNav(data.results));
}

const getPlacesToEat = cityID => {
    fetch(`https://www.triposo.com/api/20220104/poi.json?location_id=${cityID}&tag_labels=eatingout&count=10&fields=id,name,score,intro,tag_labels,best_for,images,snippet&order_by=-score&account=7GPWA5CT&token=8w8tduvc82ln7ebbx42bd1ugcd6hxbcw`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        return data;
    });
}

const getAttractions = () => {
    fetch("https://www.triposo.com/api/20220104/poi.json?location_id=New_York_City&tag_labels=!eatingout&count=10&fields=id,name,score,intro,tag_labels&order_by=-score&account=7GPWA5CT&token=8w8tduvc82ln7ebbx42bd1ugcd6hxbcw")
    .then(res => res.json())
    .then(data => console.log(data));
}

const getLocal = () => {
    fetch("https://www.triposo.com/api/20220104/poi.json?account=7GPWA5CT&token=8w8tduvc82ln7ebbx42bd1ugcd6hxbcw&location_id=New_York_City&tag_labels=character-Popular_with_locals&order_by=-character-Popular_with_locals_score&fields=id,name,snippet,images,coordinates")
    .then(res => res.json())
    .then(data => console.log(data));
}

const renderCitiesNav = cities => {
    console.log(cities);
    cities.forEach(city => {
        const cityDiv = document.createElement("div");
        const cityName = document.createElement("h1");
        const cityImg = document.createElement("img");
        
        cityName.textContent = city.name;
        cityImg.src = city.images[0].sizes.thumbnail.url;

        cityDiv.addEventListener("click", () => {
            console.log(city);
            mapImg.src = city.images[0].sizes.medium.url;
        })

        cityDiv.append(cityName, cityImg);
        document.body.append(cityDiv);
    })
}

getPOIs();
//getPlacesToEat();
//getAttractions();
//getLocal();

//account=7GPWA5CT&token=8w8tduvc82ln7ebbx42bd1ugcd6hxbcw --> my account and token, should be included in every API request