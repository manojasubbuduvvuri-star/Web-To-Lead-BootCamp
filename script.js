let captchaChecked = false;
function beforeSubmit(event) {
  if (captchaChecked == true) {
    let inputDate = document.querySelector(".inputDate");
    let outputDate = document.querySelector(".outputDate");
    console.log("inputdate.value", inputDate.value); // string need to be converted to date -> en_IN

    let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
    outputDate.value = formattedDate;
    console.log(outputDate.value);
  } else {
    alert("Please check the recaptcha box to submit the Lead");
    event.preventDefault();
  }
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value,
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);

function captchasuccess() {
  captchaChecked = true;
}
