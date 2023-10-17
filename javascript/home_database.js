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

  const userDb=firebase.database().ref("Data");
  let phno=localStorage.getItem("phno");
  let fileitem=localStorage.getItem('fileitem');
  let filename=localStorage.getItem('filename');


  document.getElementById("messageform").addEventListener("submit",storedata);
  document.getElementById("fileform").addEventListener("submit",uploadfiles);


  function redirect(){
    window.open("retrieve.html");
  }

  function storedata(e){

    e.preventDefault();
    
    let data=document.getElementById("message").value;
    

    if(data===''){
        alert("Data Field is empty...please retry");

    }

    else{
        saveMessage(phno,data);
        alert("Data Saved Successfully...!");
        document.getElementById("messageform").reset();
    }


  }

  const saveMessage=(phno,data) => {
    let signupdb=userDb.child(phno);
    signupdb.push(data);
  }

  function uploadfiles(e){
    e.preventDefault();
    const file=document.getElementById('fileinput');
    let fileitem=file.files[0];
    let flag=typeof fileitem;
    
    
    if(flag === 'undefined'){
      alert("Please Select File....!");
      document.getElementById("fileform").reset();
    }
    else{
      let filename=fileitem.name;
      let storageref=firebase.storage().ref(`${phno}/`+filename);
      let uploadtask=storageref.put(fileitem);
  
      alert("File Uploaded Successfully....!");
      document.getElementById("fileform").reset()
      
    }


  }
