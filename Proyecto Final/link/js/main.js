$(document).ready(function() {
    
    $("#sidebarCollapse").on("click", function () {
        console.log("Hola");
        $("#sidebar").toggleClass("active");
    });

});