var sections = $('section'), 
nav = $('nav'),
button = $('button');


$( document ).ready(function(){
 $( "div" ).hover(function(){ // задаем функцию при наведении курсора на элемент 
   if($(this).hasClass("intro-btn")){
      $(this).addClass( "span-hover" );
    }
   if($(this).hasClass("slider-item")){
      $(this).find('button').css( "display", "block" );
    }
    if($(this).hasClass("list-2-item")){
      $(this).addClass( "list-hover" );
    }
    if($(this).hasClass("list-1")){
      $(this).addClass( "list-hover" );
    }
   }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента  
   if($(this).hasClass("intro-btn")){
     $(this).removeClass( "span-hover" );
    }
    if($(this).hasClass("slider-item")){
      $(this).find('button').css( "display", "none" );
    }
    if($(this).hasClass("list-2-item")){
      $(this).removeClass( "list-hover" );
    }
    if($(this).hasClass("list-1")){
      $(this).removeClass( "list-hover" );
    }
  });
});