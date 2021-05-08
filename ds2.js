function newElement() {
    var button = document.createElement("button");
    var inputValue = document.getElementById("Input").value;
    var t = document.createTextNode(inputValue);
    button.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("btn").appendChild(li);
    }
    document.getElementById("Input").value = "";
  
    var span = document.createElement("new");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    button.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }