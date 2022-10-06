
  let myrequest = new XMLHttpRequest();
  myrequest.open('GET','http://127.0.0.1:5500/ajax%20and%20json/1.js');
  myrequest.send();



  myrequest.onreadystatechange = function(){
    
    if(this.readyState===4 && this.status===200)
    {
      let mainData = JSON.parse(this.responseText);
      console.log(mainData.length);

      let div_data = document.createElement('div');
      div_data.id="data";
    for(let i=0;i<mainData.length;i++)
    {
      let div_item = document.createElement('div');

      // h2  title 
      let title = document.createElement('h2');
      let title_text = document.createTextNode(`${mainData[i]['title']}`);
      title.appendChild(title_text);

      // body 
      let body = document.createElement('p');
      let body_text = document.createTextNode(`${mainData[i]['body']}`);
      body.appendChild(body_text);

      // author 
      let author = document.createElement('p');
      let author_text = document.createTextNode(`${mainData[i]['author']}`);
      author.appendChild(author_text);

      // category 
      let category = document.createElement('p');
      let category_text = document.createTextNode(`${mainData[i]['category']}`);
      category.appendChild(category_text);

      // add title to div
      div_item.appendChild(title);
      // add body to div
      div_item.appendChild(body);
      // add author to div
      div_item.appendChild(author);

      // add category to div
      div_item.appendChild(category);


      div_data.appendChild(div_item);

      document.body.appendChild(div_data);
    }     

    }

  };