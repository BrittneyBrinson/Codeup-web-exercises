//$(function() {
//    window.onload = function () {
//        alert("The DOM has loaded");
//    }
    //By adding the ".html" to the selected element (after grabbing the element by CLASS) it shows the first elements content with that CLASS name
    // Don't forget to add the () after the ".html" method to "activate it"
   // alert($('h1').html());
   // $('*').css('color', 'hotpink');

//});

$('h1').click(
    function(){
        $(this).css('background-color', 'lightpink')
    }
);
$('p').dblclick(
    function(){
        $(this).css('font-size', '18px')
    }
);
$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    }
);