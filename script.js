var password;

do {
  password = prompt("What is the password?");
} while ( password !== "alakazam" );


var students = prompt("How many students are in the class?");

var names = "";
for (let i = 0; i < students; i++){
  var studentNames = prompt("Enter student's name.")
 console.log(studentNames);
}

var li = document.createElement("li");
li.textcontent = studentNames;

document.querySelector("li").innerHTML= studentNames;