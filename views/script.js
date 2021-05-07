
//adds a listening element with a callback to play the audio on the listened for event
window.addEventListener('keydown', (event)=>{
    const audio = document.querySelector(`audio[data-lat=${event.key}]`);
    if(!audio) return; //stop the audio from running altogether
        audio.currentTime = 0;//rewind to the start, probably won't need this in the end
        audio.play;
})
const mapLink = document.querySelector('#map-link');
function geoFindMe() {

    const status = document.querySelector('#status');
    

    mapLink.href = '';
    mapLink.textContent = '';

    function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }

    function error() {
    status.textContent = 'Unable to retrieve your location';
    }

    if(!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
    } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
    }

}
document.querySelector('#find-me').addEventListener('click', geoFindMe);
// Select the node that will be observed for mutations
//const targetNode = document.getElementById('some-id');
// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };
// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};
// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);
// Start observing the target node for configured mutations
observer.observe(mapLink, config);
// Later, you can stop observing
observer.disconnect();