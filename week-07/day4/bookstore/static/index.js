

let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', 'http://localhost:3000/books', true);
  httpRequest.send();
  httpRequest.onload = (data) => {
    console.log(JSON.parse(data.srcElement.response));
    let table = JSON.parse(data.srcElement.response);
    for (let i=0; i<table.length; i++){
      table[i].book_name;
      table[i].aut_name;
      table[i].cate_descrip;
      table[i].pub_name;
      table[i].book_price;
    }
    
  }
