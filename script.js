$(function(){
    console.log("test");
    $('.onText').on('mouseover',function(){
        // var testText =document.createElement("p");
        // testText.classList.add("test");
        // testText.textContent ="test"
        // $(".onText").append(testText);
        // $('onText_p').append('<p class = "ontext_p">テキスト</p>');
    })
    $('.js-modal-open').each(function () {
        $(this).on('click', function () {
          var target = $(this).data('target');
          var modal = document.getElementById(target);
          $(modal).fadeIn();
          return false;
        });
      });
      $('.js-modal-close').on('click', function () {
        $('.js-modal').fadeOut();
        return false;
      })

    //   スライド
      let index = 0;
      let slideMax = $('.slide').length
      $('.right-arrow').on('click',function () {
        if (index !== slideMax-1) {
          index++;
          num = index * -1 * 100;
          $('.slide-container').css({'transform':`translateX(${num}%)`})
        }
      })
    
      $('.left-arrow').on('click',function () {
        if (index !== 0) {
          index--;
          num = index * -1 * 100;
          $('.slide-container').css({'transform':`translateX(${num}%)`})
        }
      })





































// アコーディオン
$('.question').on('click',function(){
    $(this).next().slideToggle();
    $(this).toggleClass('on')
})

    $(".topBtn").on("click",function(){
      $("body,html").animate({"scrollTop":0},1000)
    })
})
