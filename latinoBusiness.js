console.log('whats up')
$.getJSON('https://api.airtable.com/v0/app7wsmtFYHxb5dNF/Table%201?api_key=keyjQ3080rrDaCwO6',
function(data){
    $.each(data.records, function(index, record){
    var name = record.fields['Name'];
    var type = record.fields['Type'];
    var html = '<p>${name}, ${type}</p>';
    $('body').append(html);
    });
  }
);