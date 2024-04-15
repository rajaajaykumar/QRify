document.addEventListener("DOMContentLoaded", function () {
  const generateCodeBtn = document.querySelector(".generate-btn");
  const downloadBtn = document.querySelector(".download-btn");
  let qrInputTxt = document.getElementById("inputText");
  let imgBox = document.getElementById("imgbox");

  generateCodeBtn.addEventListener("click", function () {
    if (qrInputTxt.value.length > 0) {
      imgBox.innerHTML = "";

      let apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInputTxt.value}`;
      let qrImg = document.createElement("img");
      qrImg.src = apiUrl;
      imgBox.appendChild(qrImg);
      imgBox.classList.add("show-img");
    } else {
      showError();
    }
  });

  function showError() {
    qrInputTxt.classList.add("error");

    setTimeout(() => {
      qrInputTxt.classList.remove("error");
    }, 500);
  }

  downloadBtn.addEventListener("click", function () {
    let qrImg = document.querySelector("#imgbox img");
    if (qrImg && qrImg.src) {
      let downloadLink = document.createElement("a");
      downloadLink.href = qrImg.src;
      downloadLink.download = "qrcode.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
    } else {
      showError();
    }
  });
});
