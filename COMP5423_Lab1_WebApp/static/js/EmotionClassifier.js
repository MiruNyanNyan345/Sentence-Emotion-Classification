$(document).ready(function () {
  $("#submitBTN").click(function (event) {
    // event.preventDefault();
    var sentence = $("#sentence").val();
    console.log(sentence);
    $("#sentence").prop("disabled", true);
    $("#submitBTN").prop("disabled", true);
    $("#submitBTN").prepend(
      $(
        "<span class='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span>"
      )
    );
    $("#submitBTN_lable").text("Loading...");
    $.ajax({
      url: "http://127.0.0.1:5000/predict",
      type: "GET",
      data: { sentence: sentence },
      contentType: "application/json; charset=utf-8",
      fail: function (response) {
        console.log("Failed");
        console.log(response);
      },
      success: function (response) {
        console.log(response.emotion_color);
        $("body").css("background-color", response.emotion_color);
        $(".guessingBox_result").append(
          "<span class='text-center'>The sentence emotion is ... </span>"
        );
        $(".submitBTN_container").css("display", "none");
        $(".resetBTN_container").css("display", "block");
        switch (response.emotion) {
          case "joy":
            $(".guessingBox_result").append(
              "<span class='text-center'> 🤩 Happy 😂 </span>"
            );
            break;
          case "anger":
            $(".guessingBox_result").append(
              "<span class='text-center'> 😾 Angry 😡 </span>"
            );
            break;
          case "love":
            $(".guessingBox_result").append(
              "<span class='text-center'> 😍 Love 🥰 </span>"
            );
            break;
          case "sadness":
            $(".guessingBox_result").append(
              "<span class='text-center'> 🥺 Sad 😢 </span>"
            );
            break;
          case "fear":
            $(".guessingBox_result").append(
              "<span class='text-center'> 😱 Scared 🙀 </span>"
            );
            break;
          case "surprise":
            $(".guessingBox_result").append(
              "<span class='text-center'> 🤯 Surprise 🤯 </span>"
            );
            break;
          default:
            break;
        }
      },
    });
  });
  $("#resetBTN").click(function () {
    location.reload();
  });
});
