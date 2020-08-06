const pinBtn = document.getElementById("pinBtn");
pinBtn.addEventListener("click", function(){
          
          
          const newPin =  Math.floor(Math.random() * (2000 - 1001)) +  1001;
          document.getElementById("pinInput").value = newPin;
          let fail = document.getElementById("fail");
          fail.style.display = " none";
          let success = document.getElementById("success");
          success.style.display = "none";       
          
});
 document.getElementById("pinInput").value = "";
         
function showValue(data) {
          let submitInput = document.getElementById("submitInput");
          switch (data) {
                    case 'c':
                              submitInput.value = "";
                              break;
                    case '<':
                              submitInput.value = submitInput.value.substr(0, submitInput.value.length - 1);
                              break;
          
                    default:
                              submitInput.value += data;
                    
                              break;
          }
          


          
}
document.getElementById("submitInput").value = "";


const submitBtn =document.getElementById("apply");
submitBtn.addEventListener("click", function(){
          let pinInput =  document.getElementById("pinInput").value;
          let submitInput = document.getElementById("submitInput").value;
          if (submitInput === pinInput && submitInput.length > 0 && pinInput.length > 0 ) {
                    let success = document.getElementById("success");
                    success.style.display = "block";
                    document.getElementById("submitInput").value = "";
                    document.getElementById("pinInput").value = "";
                        
          }  else if (submitInput !== pinInput) {
                    let fail = document.getElementById("fail");
                    fail.style.display = " block";
                    document.getElementById("submitInput").value = "";
                    document.getElementById("pinInput").value = "";
                    
          }
          else { let success = document.getElementById("success");
                    success.style.display = "none";
                    let fail = document.getElementById("fail");
                    fail.style.display = "none";
                    
                   
          }
                   
          
          
});


