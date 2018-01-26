if('serviceWorker' in navigator){
    
    navigator.serviceWorker 
    .register('/service-worker.js', {scope: './'})
    .then(function(registration) {
        console.log("serviceWorker is registered", registration);
    })
    .catch(function(err){
        console.log("serviceWorker is not registered" ,err);
    })
}