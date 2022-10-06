
  let myrequest = new XMLHttpRequest();
  myrequest.open('GET','http://127.0.0.1:5500/ajax%20and%20json/1.js');
  myrequest.send();


  myrequest.onreadystatechange = function(){
    
    if(this.readyState===4 && this.status===200)
    {
        console.log(this.responseText);
        console.log('Data Loaded');
    }

  };