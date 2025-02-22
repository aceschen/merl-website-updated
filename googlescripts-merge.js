function mergeMediaData() {
  var mediaNames = ["Euphoria", "Succession", "Pose", "Watchmen", "When They See Us", "BoJack Horseman", "Barry", "Fosse/Verdon", "Chernobyl", "Fleabag", "Mindhunter", "Russian Doll", "Unbelievable"] //2019 TV 
  //["The Lion King", "Toy Story 4", "Frozen 2", "Captain Marvel", "Star Wars: The Rise of Skywalker", "Spider-Man: Far From Home", "Joker", "It Chapter Two", "Aladdin", "Avengers: Endgame"]; //2019 movies
  
  // URLs of input spreadsheets. A - media metadata, B - blurbs, C - C&C, D - this one 
  var urls = {
    A: "https://docs.google.com/spreadsheets/d/1oahrRruhE05OQXqkULkHqNqr1efScgnrBJ7kOx33d8s/edit?gid=146150860#gid=146150860",
    B: "https://docs.google.com/spreadsheets/d/1ROGP1rZ4stFf5jkdvINIXUk4AfSns5aN_XtgDblZDtA/edit?gid=1413867230#gid=1413867230",
    C: "https://docs.google.com/spreadsheets/d/1pulEnD0ysodLxY_JV0sykx2Wk_FSRXw_PmQ9W4-leLA/edit?gid=2033779643#gid=2033779643",
    D: "https://docs.google.com/spreadsheets/d/1kjzSa1ppIFL_1ig-z-ZVhNv0utLFhKa9dHAOFaxwhxs/edit?gid=0#gid=0"
  };
  
  var sheets = {};
  for (var key in urls) {
    sheets[key] = SpreadsheetApp.openByUrl(urls[key]);
  }
  
  var sheetD = sheets.D;
  
 mediaNames.forEach(mediaName => {
    // Fetch Data from A
    var sheetA = sheets.A.getSheets()[0];
    var dataA = sheetA.getDataRange().getValues();
    var headerA = dataA[0].slice(3, 34); // D-AH
    var colRangeA = dataA[0].indexOf("property name (original)");
    
    // Find matching rows in A
    var rowsA = dataA.filter(row => row[colRangeA] === mediaName);
    
    // Fetch Data from B
    var sheetB = sheets.B.getSheets()[0];
    var dataB = sheetB.getDataRange().getValues();
    var headerB = dataB[0].slice(6, 14).concat(dataB[0].slice(15, 19)); // G-N, P-S
    var colRangeB = dataB[0].indexOf("property name (original)");
    
    var rowsB = dataB.filter(row => row[colRangeB] === mediaName);
    
    // Write to Sheet D (New Tab for Media Name)
    var newTab = sheetD.getSheetByName(mediaName) || sheetD.insertSheet(mediaName);
    newTab.appendRow(headerA.concat(headerB)); // Write header row
    
    rowsA.forEach((rowA, index) => {
      if (index < rowsB.length) {
        var selectedRowA = rowA.slice(3, 34); // D-AH
        var selectedRowB = rowsB[index].slice(6, 14).concat(rowsB[index].slice(15, 19)); // G-N, P-S
        newTab.appendRow(selectedRowA.concat(selectedRowB));
      }
    });
    
    // Fetch Data from C
    var sheetC = sheets.C.getSheets()[0];
    var dataC = sheetC.getDataRange().getValues();
    var headerC = dataC[0].slice(2, 37); // C-AK
    var colRangeC = dataC[0].indexOf("property name (original)");
    
    var rowsC = dataC.filter(row => row[colRangeC] === mediaName);
    
    if (rowsC.length === 0) {
      SpreadsheetApp.getUi().alert("No matching rows found in C for " + mediaName + ".");
      return;
    }
    
    // Write to Sheet D (New Tab for Media Name CC)
    var newTabCC = sheetD.getSheetByName(mediaName + "_CC") || sheetD.insertSheet(mediaName + "_CC");
    newTabCC.appendRow(headerC); // Write header row
    rowsC.forEach(row => newTabCC.appendRow(row.slice(2, 37))); // C-AK
  });
  
  SpreadsheetApp.getUi().alert("Data merge completed for all media names!");
}

function exportSheetsToJson() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  var folderUrl = "https://drive.google.com/drive/u/2/folders/1OgIWmus5OQJX4NmqTwJJM9bzHoD82cho"; // Set your Google Drive folder URL here
  
  var folder = getDriveFolderByUrl(folderUrl);
  
  sheets.forEach(sheet => {
    var data = sheet.getDataRange().getValues();
    if (data.length < 2) return; // Skip empty sheets or headers only
    
    var headers = data[0].map(header => formatHeader(header));
    var jsonData = data.slice(1).map(row => {
      var obj = {};
      headers.forEach((key, index) => {
        obj[key] = row[index];
      });
      return obj;
    });
    
    var jsonString = JSON.stringify(jsonData, null, 2);
    var fileName = sheet.getName().replace(/\s+/g, '-');
    saveJsonFile(jsonString, fileName, folder);
  });
  
  SpreadsheetApp.getUi().alert("JSON files have been exported.");
}

function formatHeader(header) {
  return header
    .replace(/[^a-zA-Z0-9 ]/g, "") // Remove special characters
    .replace(/\s+(.)/g, (match, group) => group.toUpperCase()) // Convert to camelCase
    .replace(/^./, match => match.toLowerCase()); // Lowercase first letter
}

function saveJsonFile(jsonString, fileName, folder) {
  var blob = Utilities.newBlob(jsonString, 'application/json', fileName + ".json");
  folder.createFile(blob);
}

function getDriveFolderByUrl(folderUrl) {
  var folderId = folderUrl.split("folders/")[1];
  return DriveApp.getFolderById(folderId);
}


