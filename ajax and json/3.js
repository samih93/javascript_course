
  let myrequest = new XMLHttpRequest();
  myrequest.open('GET','http://127.0.0.1:5500/ajax%20and%20json/1.js');
  myrequest.send();


  myrequest.onreadystatechange = function(){
    
    if(this.readyState===4 && this.status===200)
    {
      let mainData = JSON.parse(this.responseText);
      mainData.forEach(function(element){
        element['category'] = 'all';
      });
      console.log(mainData);
      
      let updatedData = JSON.stringify(mainData);
      console.log(updatedData);

    }

  };