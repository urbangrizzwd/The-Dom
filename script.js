var myDemo = document.getElementById("tomorrow");

console.log(myDemo.childNodes.length);

var myTag = document.getElementsByTagName("li");

console.log("number of li links " + myTag.length);

var working = document.getElementById("working");

working.setAttribute("align", "right");

working.setAttribute("style", "color: blue")

var newItem = document.createElement("li");

var newText = document.createTextNode("This is a new rubric questions.");

myDemo.appendChild(newItem);

newItem.appendChild(newText);

function myclick() {
    document.getElementById("time").innerHTML = "You have 5 days left to complete Rubric 3";
    var time = document.getElementById("time");

    var newTextTime =document.createTextNode("You now have 3 days left to complete Rubric 3");
 
    time.appendChild(newItem);

    time.appendChild(newTextTime);

    var btn = document.createElement("BUTTON");
    btn.innerHTML = "cancle";
    document.body.appendChild(btn);
}



