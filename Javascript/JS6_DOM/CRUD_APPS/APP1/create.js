var userInfo = {
    university: "",
    institute: "",
    branch: "",
    degree: "",
    status: "",
    cgpa: "",
    experience: "",
    website: "",
    doj: "",
    subjects: [],
  };
  
  var users = JSON.parse(localStorage.getItem("Users"))
  if(users== null){
    users=[]
  }
  var gIndex = 0
  var allCheckBoxes = document.getElementsByName("subject");
  var allStatus = document.getElementsByName("status");
  
   var users = []
  function addUser() {
   for (a in user) {
    if (a !== "status" && a !== "subjects"){
      user[a] = document.getElementById(a).value;
    } else if (a == "subjects") {
      var allCheckBoxes = document.getElementsByName("subject");
      allCheckBoxes.forEach((element) => {
        if (element.checked) {
          user.subjects.push(element.value);
        }
      });
    }else if (a == "status") {
      var allCheckBoxes = document.getElementsByName("status");
      allStatus.forEach((element) => {
        if (element.checked) {
          user[a] = element.value;
        }
      });
   }
  }
    users.push(user);
  }
  
  
  function clearForm(){
    for (a in userInfo){
       if(a !== "status" && a !== "subjects"){
        document.getElementById(a).value = ""
       }else{
        var allCheckBoxes = document.getElementsByName("subject");
        var allStatus = document.getElementsByName("status");
        allCheckBoxes.forEach((cb)=>{
          cb.checked = false
        })
        allStatus.forEach((as)=>{
          as.checked = false
        })
       }
    }
  }
  
  function readUserFromForm(){
    var user = {...userInfo}
    for (a in user) {
      if (a !== "status" && a !== "subjects") {
        user[a] = document.getElementById(a).value;
      } else if (a == "subjects") {
        allCheckBoxes.forEach((element) => {
          if (element.checked) {
            user.subjects.push(element.value);
          }
        });
      } else if (a == "status") {
        allStatus.forEach((element) => {
          if (element.checked) {
            user[a] = element.value;
          }
        });
      }
    }
  
    return user
  }