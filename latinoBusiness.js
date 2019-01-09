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
    var website = record.fields ['Website'];
    var ig = record.fields ['Instagram'];
    var type = record.fields['Type'];
    var img = record.fields['Images'];
    var photos = record.fields['Photos'];
    var long = record.fields['Long'];
    var lat = record.fields['Lat'];
    html.push(detailView(name,type,location,img,website,ig,long,lat));
    $('body').append(html);
  }
  );
}

/*the html stuff down here*/
var listView = function(id, name, type, location, img,) {
  return `
  <div class="card">
  <img class="card-img-top" src="${img}" alt="Card image cap">
  <div class="card-body">
     <h5 class="card-title">${name}</h5>
      <p class="card-text">${type} <br> ${location}.</p>
      <a href="index.html?id=${id}" class="btn btn-primary">Explore</a>
  </div>
</div>
    `;
}

/* style="width: 18rem; display: inline-flex;*/

var detailView = function (name, type, location, img, website, ig, long, lat) {
    return `
<div class="container">  
    <div class="card">
       <div class="card-header">
         ${name}
       </div>
         <div class="card-body">
         <img class="card-img-top float-left" src="${img}">
          <ul style="list-style: none;">
             <li><h3>Name: ${name}</h3></li>
             <hr>
             <li><h3>Type: ${type}</h3></li>
             <hr>
             <li><h3><img style="height: 15px; width: 15px;" src="https://img.icons8.com/metro/2x/marker.png">: ${location}</h3></li>
             <hr>
             <li><h3><h3><img style="height: 15px; width: 15px;" src="https://img.icons8.com/material/2x/internet.png">: ${website ? `<a href="${website}">${website}</a>` : `Nothing yet`} </h3></li> <hr>
             <hr
             <li><h3><img style="height: 25px; width: 25px;" src="https://png.icons8.com/windows/2x/instagram-new.png">:${ig ? `<a href="${ig}">${ig}</a>` : `Nothing yet`}</h3></li>
              <hr>
             <br>
             <br>
             <a href="https://www.google.com/maps/search/${name} ${location}">
              ${lat && long ? `<img style="padding: 10px;"class="img-fluid" alt="No location yet" src="https://api.mapbox.com/v4/mapbox.streets/${long},${lat},15/600x200.jpg?access_token=pk.eyJ1IjoibHVuYXJvamEiLCJhIjoiY2o4b2x1NXlmMDN6NDMzbWtpMzExM3ppdiJ9.M8L9FACjOXRrZWrkurNjTg" />` : `No location yet`}
             </a>
          </ul>
       <a href="index.html" class="btn btn-primary">Go Back</a>
     </div>
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