const textConfig = {
  text1: "Heluu Thảo!",
  text2: "Tớ có điều này muốn hỏi cậu, nhớ phải trả lời thật lòng nhaaa ^^",
  text3: "Cậu yêu tớ có phải không nào ._.",
  text4: "Nếu cậu ko trả lời mà thoát ra tức là muốn làm vợ tớ rùi đó nha :3",
  text5: "Cậu mơ à???",
  text6: "Yêu ơi là yêuuuuuu <3",
  text7: "Cậu nói lí do cậu yêu tớ đi hehe",
  text8: "Gửi cho tớ nào <3",
  text9: "Vì Hiếu đẹp try vlllll luôn ý !!!!",
  text10: "Tớ biết mà ^^ Yêu cậu 300.000",
  text11: "Bây giờ thì chờ gì nữa mà ko inbox cho tớ đi nàooo",
  text12: "Okii lunn <3",
  text13: "Không mơ được thì bấm vào đây =))",
  text14: "Tớ có điều muốn nói !",
  text15: "Heaven help the fool who fall in love <3",
  text16: "Đời tớ là đời buồn ! Nổi buồn nhiều hơn niềm vui. " +
      "Vây quanh tớ là sự cô độc. Hạnh phúc đối với tớ là " +
      "điều xa xỉ nên tớ chẳng dám mong cầu hay hi vọng mình " +
      "sẽ có được một tình yêu đẹp. Nhưng ... \"từ khi gặp cậu" +
      " tớ thấy cuộc sống vui nhiều, cứ cười tủm tìm từ sáng " +
      "cho đến chiều\".\n" +
      "Cậu đến như một món quà bất ngờ không có sự chuẩn bị trước. " +
      "Tớ cũng không ngờ được tình cảm của tớ xuất phát đột " +
      "ngột như vậy. Nếu giờ cậu hỏi tớ, vì sao tớ yêu cậu ? " +
      "Tớ không biết phải trả lời như thế nào ... vì trong khoảnh " +
      "khắc nào đó, tớ nhận ra mình đang nhớ cậu. Có lẽ tớ nhận ra " +
      "mình yêu cậu từ lúc đấy và lý do thì chắc đơn giản là ... tớ " +
      "yêu cậu. Cậu có thể nhắn tin cho tớ bất cứ khi nào cậu muốn.",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);
  const buttonLetter = $("#letter");
  buttonLetter.html(textConfig.text13);
  buttonLetter.css('background-color', '#F7B3CD');
  buttonLetter.click(function () {
    Swal.fire({
      title: textConfig.text14,
      width: 900,
      padding: "3em",
      html: textConfig.text16,
      background: '#fff url("img/iput-bg.jpg") ',
      backdrop: `
                    rgba(0,0,123,0.4)
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      confirmButtonClass: "confirm-text",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text15,
    })
  });

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/phuongthao.gif",
      imageWidth: 250,
      imageHeight: 400,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' autofocus required class='form-control' id='txtReason'  placeholder='Whyyy'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      confirmButtonClass: "confirm-text",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://fb.com/tranhieu1609";
          },
        });
      }
    });

    function checkEmpty() {
      let inputValue = $("#txtReason").val();
      if(inputValue) {
        $('.confirm-text.swal2-confirm').attr("disabled", false);
      } else {
        $('.confirm-text.swal2-confirm').attr("disabled", true);
      }
    }
    $('.confirm-text.swal2-confirm').attr("disabled", true);
    setInterval(function(){
      checkEmpty();
    }, 10);
    
    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
