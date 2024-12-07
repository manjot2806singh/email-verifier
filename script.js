function verifyEmails() {
    // Get the email list from textarea
    const emailList = document.getElementById("emailList").value.trim().split("\n");
    const resultDiv = document.getElementById("result");
  
    if (emailList.length === 0 || emailList[0] === "") {
      resultDiv.innerHTML = "Please enter emails to verify.";
      return;
    }
  
    // Clear previous results
    resultDiv.innerHTML = "Verifying emails...";
  
    const validEmails = [];
    const invalidEmails = [];
  
    // Simple email validation regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    emailList.forEach(email => {
      if (emailRegex.test(email.trim())) {
        validEmails.push(email.trim());
      } else {
        invalidEmails.push(email.trim());
      }
    });
  
    // Display results
    resultDiv.innerHTML = `
      <h3>Verification Result:</h3>
      <p><strong>Valid Emails:</strong></p>
      <ul>${validEmails.map(email => `<li>${email}</li>`).join('')}</ul>
      <p><strong>Invalid Emails:</strong></p>
      <ul>${invalidEmails.map(email => `<li>${email}</li>`).join('')}</ul>
    `;
  }
  