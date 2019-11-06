//This function adds a clickable button to run the Automation
function onOpen() {
 SpreadsheetApp.getUi()
    .createMenu('Email Sheet')
    .addItem('Sheet 1', 'emailGoogleSpreadsheetAsPDF')
    .addToUi();
}



/* Email Google Spreadsheet as PDF */
function emailGoogleSpreadsheetAsPDF() {
  
  // Send the PDF of the spreadsheet to this email address
  var email = ['someone@random.com']; //Please add or remove email recipients
  
  // Get the currently active spreadsheet URL (link)
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  // Subject of email message
  var subject = "Random Name " + ss.getName(); 

  // Email Body can  be HTML too 
  var body = "Please find the PDF file attached to this email ";
  
  var blob = DriveApp.getFileById(ss.getId()).getAs("application/pdf");
  
  blob.setName(ss.getName() + ".pdf");
  
  // If allowed to send emails, send the email with the PDF attachment
               email.forEach(function(address) {
               GmailApp.sendEmail(address, subject, body, {
      htmlBody: body,
      attachments:[blob]     
    });  
  });
}