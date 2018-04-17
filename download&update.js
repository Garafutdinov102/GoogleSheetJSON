function getData() { 
 
  var sheet = SpreadsheetApp.openById("key_of_sheet");
  
  var column = sheet.getRange('D:E');
  var values = column.getValues(); // get all data in one call

  var ct = 0;
  while ( values[ct] && values[ct][0] != "" ) {
    ct++;
  }
  
  
  var aUrl = "url_json";
  var response = UrlFetchApp.fetch(aUrl); // get feed
  var dataAll = JSON.parse(response.getContentText()); //
  
  var today = new Date();
  sheet.getRange('D'+(ct+1)).setValue(today);
  sheet.getRange('E'+(ct+1)).setValue(dataAll['totalUSD']);

  
}
