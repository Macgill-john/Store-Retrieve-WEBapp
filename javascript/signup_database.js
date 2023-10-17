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


  document.getElementById("signupform").addEventListener("submit",storedata);

  function storedata(e){

    e.preventDefault();
    
    let phno=document.getElementById("phno").value;
    let password=document.getElementById("password").value;
    let confirmpassword=document.getElementById("confirmpassword").value;

    if(phno===''){
        alert("Phone Number Field is empty...please retry");
    }

    else if(password !== confirmpassword){
        alert("Password not matching...please correct it and try again");
    }

    else{
        saveMessage(phno,password);
        alert("Account Creation Success....Please Login !");
        document.getElementById("signupform").reset();
    }


  }

  const saveMessage=(phno,password) => {
    let signupdb=userDb.child(phno);
    signupdb.set({
        phno: phno,
        password: password
    });
  }
