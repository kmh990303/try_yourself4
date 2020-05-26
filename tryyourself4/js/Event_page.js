function my_Function(){
  var w=window.outerWidth;
  var h=window.outerHeight;
  document.getElementById("demo").innerHTML = "RESIZE event";
}

function Click(){
  document.getElementById("demo").innerHTML = "CLICK event";
}

function MouseOver(){
  document.getElementById("demo").innerHTML = "MouseOver event";
}
