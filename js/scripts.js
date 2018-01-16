$(document).ready(function(){
  $("#icecream").submit(function(event) {

  var anything = ["result1","result2","result3"];


  anything.forEach(function(anything) {
    var userInput = $("input#" + anything).val();
    $("."+anything).text(userInput);

});
$("#hidden").show();
event.preventDefault();
});
});
