const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
mediaQuery.addEventListener('change', () => {
  console.log(mediaQuery.media, mediaQuery.matches);
  // Stop JavaScript-based animations.
});



function fetchClickHandler(){
    /*
    This click handler makes an AJAX (Asynchronous JS and XML) API call to public Weather API to fetch today's weather for Ann Arbor, MI (hard coded city in the URL)
    */

    // API key is included in the URL
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Ann%20Arbor?unitGroup=us&key=FJX64RHP5UA9LWX26R27Z8EWB&contentType=json", {
    method: 'GET',
            
    }).then(response => {
    if (!response.ok) {
        // Response code should be 2## to be considered ok
        throw response; 
    }
    
    // Parsing the result to JSON
    return response.json(); 

    }).then(response => {
    processWeatherData(response);

    }).catch((errorResponse) => {
    // In case of any unhandled error
    if (errorResponse.text) {
        errorResponse.text().then( errorMessage => {
        })
    }
    });
}
function processWeatherData(response) {
    var location=response.resolvedAddress;
    var days=response.days;
    var date=days[0].datetime;
    var tempMax=days[0].tempmax;
    var tempMin= days[0].tempmin;

    let toast = document.getElementById("toast");
    
    // Using relevant information from API response
    toast.innerText = "Today is "+date+" in "+location+". I live here, currently. The highest and lowest temperatures for today are "+tempMax+" and "+tempMin;
    
    toast.style.visibility = 'visible';
    setTimeout(function(){ toast.style.visibility = toast.style.visibility.replace("visible", "hidden"); }, 2100);
  }

let fetchButton = document.getElementById("weatherReport");
fetchButton.addEventListener("click", fetchClickHandler);