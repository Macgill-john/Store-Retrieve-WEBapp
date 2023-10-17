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


  document.getElementById("loginform").addEventListener("submit",getdata);

  function getdata(e){

    e.preventDefault();
    
    let phno=document.getElementById("phno_login").value;
    let password=document.getElementById("password_login").value;


    if(phno==='' && password === ''){
        alert("Email or password Field is empty...please retry");
        document.getElementById("loginform").reset();

    }

    else{
        getItems(phno,password);

    }


  }


  const getItems=(phno,password) => {
    let data=[];

    let message=readUser.ref("Users/"+phno);
    message.on('value',function (snapsnot){
        data.push(snapsnot.val());
    })


    for(let i=0;i<data.length;i++){


        if(data[i].password === password && data[i].phno === phno){
            localStorage.setItem("phno",phno);
            document.getElementById("loginform").reset();
            window.open("home.html");
        }
        else{
            document.getElementById("loginform").reset();
            alert("Invalid Password or Phone No...Please try again");
        }

    }


  }
