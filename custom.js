// Test Dbclick
$("#push").click(function(){
    var cont = $('#content').contents().find("html").html();
    var block = document.getElementById("block");
    block.innerHTML = cont;
});




