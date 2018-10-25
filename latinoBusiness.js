var listView = function(type) {
 return '<button type="button" class="btn btn-light">${type}</button>'; 
};

$.getJSON('https://api.airtable.com/v0/app7wsmtFYHxb5dNF/Table%201?api_key=keyjQ3080rrDaCwO6',
  function(data){
    var html = [];
    $.each(data.records, function(index, record) {
      var name = record.fields['Name'];
      var location = record.fields['Location'];
      var type = record.fields['Type'];
      //html.push(`<div class="name"> ${name}</div>`);
      //html.push(`<div class="type">${type}<div>`);
      //html.push(`<div class="location">${location}</div>`);
      html.push(`<ul><li><div class="businesses"><h2><div class="name">${name},</div> <div class="type">${type},</div> 
      <div class="location">${location}</div></h2></div></li></ul>`);
    });
    $('.list').append(html);
  }
);
