var projects = 49;
var $windowWidth = $(window).width() - 16;
var animating = false;
var noOfPages
var pagePosition = 0;
var pageIndex = 0;

$( document ).ready(function() {

  // for(var i = 0; i <= projects; i++){
  //   $( "#content" ).append( "<div class='column'>"+"column " + i +"</div>" );
  // }

  $(window).on("resize", function(event){
    $('.page').remove();
    $windowWidth = $(window).width() - 16;
    createProjects();
    goToPage(pagePosition)
    console.log(pageIndex)

  });
  createProjects();
  navigation();  
});

function createProjects(){
  var columnMarginRight = parseInt( $('.column').css('marginRight').slice(0, -2));
  var columnWidth = parseInt( $('.column').css('min-width').slice(0, -2));
  var screenWidth =  $(window).width();
  var projectsPerPage = Math.floor(( screenWidth / (columnMarginRight + columnWidth) ));
  var numberOfPages = Math.ceil(projects / projectsPerPage);
  var columnWidth = screenWidth / projectsPerPage - 16;
  noOfPages = numberOfPages

  for (var i = 0; i < numberOfPages; i++){
    $( "#pageWrapper" ).append( "<div class='page'></div>" )  
  }

  var page_index = -1

  $(".column").each(function(i){
    if(i % projectsPerPage === 0){
      page_index ++
      $( "div :last-child" ).css("margin", "0")
    }
    var page = $('.page').eq(page_index);
    $(this).clone().appendTo(page);
  });
  changeColumnSize(columnWidth);  
}

function navigation() {
  $('#rightButton').on('click', function (e) {
    e.preventDefault();
    if ( pagePosition +2  <= noOfPages){
      goToPage(pagePosition+1)
      console.log("rightClick", pagePosition)
    }
  });

  $('#leftButton').on('click', function (e) {
    e.preventDefault();
    if ( pagePosition -1 >= 0){
      goToPage(pagePosition-1)
      console.log("left click", pagePosition)
    }
  });

  $('#leftButton, #rightButton').mouseenter(function() {
         $(this).animate({
             width: '+=25px'
         });
     });

  $('#leftButton, #rightButton').mouseleave(function() {
      $(this).animate({
          width: '-=25px'
      }); 
  });

}

function goToPage(pageIndex){
  var transformx = pageIndex * $windowWidth
  $('#pageWrapper').stop().css({
    'transition': 'transform 1s',
    'transform': 'translatex( -' + transformx +'px )'
  });
  pagePosition = pageIndex
}



function changeColumnSize(columnWidth){
  $('.column').css('width', columnWidth );
  $('.post').css({'height': columnWidth});
}



