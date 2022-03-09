$(function () {
  $('.onText').on('mouseover', function () {
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
  $(document).ready(function () {
    $('.drawer').drawer({
      class: {
        nav: 'drawer-nav',
        toggle: 'drawer-toggle',
        overlay: 'drawer-overlay',
        open: 'drawer-open',
        close: 'drawer-close',
        dropdown: 'drawer-dropdown'
      },
      iscroll: {
        // Configuring the iScroll
        // https://github.com/cubiq/iscroll#configuring-the-iscroll
        mouseWheel: true,
        preventDefault: false
      },
      showOverlay: true
    });
  });

  //   スライド
  let index = 0;
  let slideMax = $('.slide').length
  $('.right-arrow').on('click', function () {
    if (index !== slideMax - 1) {
      index++;
      num = index * -1 * 100;
      $('.slide-container').css({ 'transform': `translateX(${num}%)` })
    }
  })

  $('.left-arrow').on('click', function () {
    if (index !== 0) {
      index--;
      num = index * -1 * 100;
      $('.slide-container').css({ 'transform': `translateX(${num}%)` })
    }
  })
  // アコーディオン
  $('.question').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('on')
  })

  $(".topBtn").on("click", function () {
    $("body,html").animate({ "scrollTop": 0 }, 1000)
  })
})

//load画面の表示
$(window).on('load', function () {
  $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});