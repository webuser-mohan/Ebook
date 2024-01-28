var book_see = document.getElementsByClassName("book-see");
var pdf_reader = document.getElementById("pdf_reader");
var main_body = document.getElementById("main_body");


Array.from(book_see).forEach(function(element) {
    element.addEventListener('click', function(){
        main_body.style.display = "none"
        pdf_reader.style.display = "block";
    });
});