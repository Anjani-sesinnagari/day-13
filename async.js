//console.log(10);
//console.log(20);
//setTimeout(()=>{
    //console.log(30);
    
//})
//console.log(40);
//console.log(50);

//promise

//let p1 = new Promise((resolve , reject)=>{});
//console.log(p1);

//let p2 = new Promise((resolve , reject)=>{
//    resolve("success");
//});
//console.log(p2);
//p2.then((res)=>{
  //  console.log(res);
//}).catch(err=>console.log(err))
//.finally(()=>console.log("final"))

//let p3 = new Promise((resolve , reject)=>{
//reject("failures");
//});
//p3
//.then(res=>console.log(res))
//.catch(err=>console.log(err))
//.finally(()=>console.log("final"))

//console.log(p3);

//API fetching

//function fetchUsers()
//{
   // let response = fetch("https://jsonplaceholder.typicode.com/users");
    //console.log(response);
    //response.then(res=>{
        //console.log(res);
        //console.log(res.json());
        //return res.json().then(data=>{
            //console.log(data);
            //data.map(users=>{
                //console.log(user);
                //Store.innerHTML +=
                //<tr>
                    //<td>user.id</td>
                //</tr>
            //})
        //})
    //})
    //.catch(err=>console.log(err))
//}
//fetchUsers();

//async & await
//function demo()
//{
  //  console.log("Start");
    //console.log(10);
    //console.log(20);
    //return;
    //console.log(30);
    //console.log("End");
//}
//demo();
//let p = new Promise((resolve , reject)=>{
    //setTimeout(()=>{
        //resolve("Success")
    //},4000);
//});

//async function demo(){
  //  console.log("start");
    //let x =await p;
    //console.log(x);
    //console.log("end");

//}

//demo();

//async function fetchUsers(){
  //  let response =await fetch("https://api.github.com/users");
    //let data =await response.json();
    //console.log(data);
//}
//fetchUsers()