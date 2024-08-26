let state = document.getElementById('state');
let comment = document.getElementById('comment');
isOnline(() => {
    state.innerHTML = "Welcome back :)";
    comment.innerHTML = "I'm happy";
}, true, () => {
    state.innerHTML = "You're online :)";
    comment.innerHTML = "I'm happy";
})
isOffline(() => {
    state.innerHTML = "You're offline :(";
    comment.innerHTML = "I'm waiting for ya to back online"
}, true)

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("sw.js")
        .then((registration) => {
            console.log("Service worker registered");
            console.log(registration);
        })
        .catch((err) => {
            console.log("Sercvice worker registration failed");
            console.error(err);
        });
}
