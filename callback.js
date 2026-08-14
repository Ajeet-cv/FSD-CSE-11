function registerSync(cb) {
    setTimeout(()=>{
        console.log("registerr here");
        cb();
    }, 10000);
}
function login(cb) {
    setTimeout(()=>{
        console.log("login here");
        cb();
    }, 5000);
}   

function getdata(cb) {
    setTimeout(()=>{
        console.log("fetch data from DB");
        cb();
    }, 3000);
}
function displaydata() {
    setTimeout(()=>{
        console.log("display data");
    }, 6000);
}
  //call back hell
registerSync(()=>{
    login(()=>{
        getdata(()=>{
            displaydata();
        })
    })
});
console.log("this is async code");


