//Macgill John - 17/10/2023

const firebaseConfig = {

    apiKey: "AIzaSyDi1JfkidCdUFQQyenwmcyrBR45AW-Xewo",

    authDomain: "webapp-be261.firebaseapp.com",

    databaseURL: "https://webapp-be261-default-rtdb.firebaseio.com",

    projectId: "webapp-be261",

    storageBucket: "webapp-be261.appspot.com",

    messagingSenderId: "666159373206",

    appId: "1:666159373206:web:e7ad263f744a1e877edbb7",

    measurementId: "G-HEW339E2QF"

  };

  firebase.initializeApp(firebaseConfig);

  const userDb=firebase.database().ref("Users");
  const readUser=firebase.database();
  let phno=localStorage.getItem("phno");
  let sno=0;
  let tbody=document.getElementById("tbody");
  function addItem(data,url_arr){
    console.log("data",data);
    console.log("data",url_arr);
    let trow=document.createElement('tr');
    let td1=document.createElement('td');
    let td2=document.createElement('td');
    let td3=document.createElement('td');

    //let button=document.createElement("button");
    //button.innerHTML="Download";
    td1.innerHTML=++sno;
    td2.innerHTML=data;
    td3.innerHTML=`<button><a href='${url_arr}' download='${data}'>Download File</a></button>`;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);

    tbody.appendChild(trow);
  }




  const getItems=(phno) => {

    let firebaseRef=firebase.storage().ref(`${phno}/`);

    firebaseRef.listAll().then(function (result) {
      result.items.forEach(function (item) {
        item.getDownloadURL().then(function (url) {
          addItem(item.name,url);
        }).catch(function (error) {
          console.error("Error getting download URL: " + error);
        });
      });
    }).catch(function (error) {
      console.error("Error listing files in the folder: " + error);
    });


  
  }

  window.onload=getItems(phno);