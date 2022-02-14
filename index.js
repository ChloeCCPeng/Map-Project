const getPOIs = () => {
    fetch("https://www.triposo.com/api/20220104/location.json?part_of=United_States&tag_labels=city&count=10&order_by=-score&fields=name,id,snippet,parent_id,score,type,images,coordinates&account=7GPWA5CT&token=8w8tduvc82ln7ebbx42bd1ugcd6hxbcw")
    .then(res => res.json())
    .then(data => console.log(data));
}

const getPlacesToEat = () => {
    fetch("https://www.triposo.com/api/20220104/poi.json?location_id=New_York_City&tag_labels=eatingout&count=10&fields=id,name,score,intro,tag_labels,best_for,images&order_by=-score&account=7GPWA5CT&token=8w8tduvc82ln7ebbx42bd1ugcd6hxbcw")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.results.forEach(restaurant => document.body.append(restaurant.name))
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

//getPOIs();
//getPlacesToEat();
//getAttractions();
//getLocal();

//account=7GPWA5CT&token=8w8tduvc82ln7ebbx42bd1ugcd6hxbcw --> my account and token, should be included in every API request