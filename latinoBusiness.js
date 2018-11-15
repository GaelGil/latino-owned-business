/*crazy function*/
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

/*all the functions */
var getAllrecords = function() {
$.getJSON('https://api.airtable.com/v0/app7wsmtFYHxb5dNF/Table%201?api_key=keyjQ3080rrDaCwO6',
  function(data){
    var html = [];
    $.each(data.records, function(index, record) {
      var id = record.id;
      console.log(id);
      var name = record.fields['Name'];
      var location = record.fields['Location'];
      var type = record.fields['Type'];
      var img = record.fields['Images'];
      var photos = record.fields['Photos'];
      html.push(listView(id,name, type, location, img));
    });
    $('.list').append(html);
  }
);
}

var getOneRecord = function(id) {
  $.getJSON(`https://api.airtable.com/v0/app7wsmtFYHxb5dNF/Table%201/${id}?api_key=keyjQ3080rrDaCwO6`, 
  function(record) {
    var html = [];
    var name = record.fields['Name'];
    var location = record.fields ['Location'];
    var type = record.fields['Type'];
    var img = record.fields['Images'];
    var photos = record.fields['Photos'];
    html.push(detailView(name,type,location,img));
    $('body').append(html);
  }
  );
}

/*the html stuff down here*/
var listView = function(id, name, type, location, img) {
  return `
  <div class="card" style="width: 18rem; display: inline-flex;">
  <img class="card-img-top" src="${img}" alt="Card image cap">
  <div class="card-body">
     <h5 class="card-title">${name}</h5>
      <p class="card-text">${type} <br> ${location}.</p>
      <a href="index.html?id=${id}" class="btn btn-primary">Explore</a>
  </div>
</div>
    `;
}

var detailView = function (name, type, location, img) {
    return `
    <div class"jumbotron">
      <div class="container">
        <img class="card-img-top" style="width: 300px; height: 300px;" src="${img}" alt="Card image cap">
       <h1>${name}<h1>
       <br>
        <p> ${type} <br>${location}</p>
        <p class="lead">
              <a href="index.html" class="btn btn-lg btn-secondary">Go Back</a>
              <br><br>
            </p>
      </div>
    </div>  
    `;
}


var id = getParameterByName('id');
if (id) {
  getOneRecord(id);
} else {
  getAllrecords();
}




      /*in case all fails use this */
      /*html.push(`<ul><li><div class="businesses"><h2><div class="img"><img style="width: 300px; height: 150px;"src="${img}" alt="photo">
      </div><div class="name">${name}</div> <div class="type">${type}</div> 
      <div class="location">${location}</div></h2></div></li></ul>`);*/
      /*in case all fails pt 2
      html.push(`<div class="container"><img style="width: 300px; height: 150px;"src="${img}" alt="photo">, ${name}, ${type}, ${location}</div>`);*/