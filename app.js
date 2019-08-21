
function myCreateEvent() {
var eventData =document.getElementById("feedDetail").value

var url = "http://35.238.77.19:9002/event/apis/events"
var query = "{\"eventName\":\"" + eventData + "\", \"date\":\""+ (new Date()).toString() +"\"}";
console.log("query is", query);    
const otherParams = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json; charset=utf-8',
        },
        body: query
    }
    fetch(url, otherParams)
        .then(data => {
           console.log(data)
        })
        .then(res => {
            console.log(res);
        })
        .then(error => {
            console.log(error);
        })

console.log("I am here")
}


