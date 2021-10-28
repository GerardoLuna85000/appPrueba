//solo asume que ya se registro de manera correcta
if( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js')
    .then( reg => console.log('services worker registrado correctamente', 
                                                            reg.scope))
    .catch(err => {
        console.log('Fallo el registro del SW', err)
    });
//    console.log('Se puede usar el service worker')
}