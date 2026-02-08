 function addstudent() {
    var projectInput = document.getElementById("newstudent").value;

    if (projectInput === "") {
      alert("ENTER THE STUDENT NAME");
      return;
    }

    var projectList = document.getElementById("newList");

    var li = document.createElement("li");
    li.textContent = projectInput;
    projectList.appendChild(li);

    document.getElementById("newstudent").value = "";
  }