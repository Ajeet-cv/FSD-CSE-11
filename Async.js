function registerSync() {
    setTimeout(()=>{
        console.log("registerr here");
    }, 1000);
}
function login() {
    setTimeout(()=>{
        console.log("login here");
    }, 2000);
}
function getdata() {
    setTimeout(()=>{
        console.log("fetch data from DB");
    }, 3000);
}
function displaydata() {
    setTimeout(()=>{
        console.log("display data");
    }, 4000);
}

registerSync();
login();
getdata();
displaydata();
console.log("this is async code");



