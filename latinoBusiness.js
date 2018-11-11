var listView = function(location) {
 return '<button type="button" class="btn btn-light">${location}</button>';   
};

$.getJSON('https://api.airtable.com/v0/app7wsmtFYHxb5dNF/Table%201?api_key=keyjQ3080rrDaCwO6',
  function(data){
    var html = [];
    $.each(data.records, function(index, record) {
      var name = record.fields['Name'];
      var location = record.fields['Location'];
      var type = record.fields['Type'];
      var img = record.fields['Images'];
      var photos = record.fields['Photos'];
      html.push(listView(name, type, location, img,));
    });
    $('.list').append(html);
  }
); 

var listView = function(name, type, location, img) {
  return `
  <div class="card" style="width: 18rem; display: inline-flex;">
  <img class="card-img-top" src="${img}" alt="Card image cap">
  <div class="card-body">
     <h5 class="card-title">${name}</h5>
      <p class="card-text">${type} <br> ${location}.</p>
      <a href="#" class="btn btn-primary">Explore</a>
  </div>
</div>
    `;
}



      /*in case all fails use this */
      /*html.push(`<ul><li><div class="businesses"><h2><div class="img"><img style="width: 300px; height: 150px;"src="${img}" alt="photo">
      </div><div class="name">${name}</div> <div class="type">${type}</div> 
      <div class="location">${location}</div></h2></div></li></ul>`);*/
      /*in case all fails pt 2
      html.push(`<div class="container"><img style="width: 300px; height: 150px;"src="${img}" alt="photo">, ${name}, ${type}, ${location}</div>`);*/