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

  function addItem(data){
    let trow=document.createElement('tr');
    let td1=document.createElement('td');
    let td2=document.createElement('td');

    td1.innerHTML=++sno;
    td2.innerHTML=data;

    trow.appendChild(td1);
    trow.appendChild(td2);

    tbody.appendChild(trow);
  }

  let data;
  const getItems=(phno) => {

    let firebaseRef=firebase.database().ref("Data").child(phno);
    firebaseRef.once('value',function(snapsnot){
        data=snapsnot.val();
        tbody.innerHTML="";
        for(let i in data){
            addItem(data[i]);
        }
    })


    

  }

  window.onload=getItems(phno);
