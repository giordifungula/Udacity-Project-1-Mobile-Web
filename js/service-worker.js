if('serviceWorker' in navigator) {
    
    navigator.serviceWorker
        .register('./service-worker.js', {scope: './'})
        .then(function(regitration){
            console.log("Service Worker Registration", registration);
    })
    .catch(function(err){
        console.log("Service Worker not registered");
    })
}