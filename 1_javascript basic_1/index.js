// console log
var input = document.getElementById('username').value;
console.log(input);

// Event click
// Cach 1: onclick
// document.getElementById('btnNhanEmDi').onclick = function() {
//     document.getElementById("idBeforeText").innerHTML = 'Đã nhấn vào!';
// }

// cach 2 su dung function
/* <button id="btnNhanEmDi" class="btn btn-success" onclick="nhanEmDi()">
  Nhấn em đi
</button>;

function nhanEmDi() {  
    document.getElementById("idBeforeText").innerHTML = "Đã nhấn vào!";
} */

// Cach 3 su dung addEventListener
document.getElementById('btnNhanEmDi').addEventListener('click', function(){
    document.getElementById('idBeforeText').innerHTML = 'Đã nhấn vào!';
})

document.getElementById('btnChangeColor').addEventListener('click', function(){
    document.getElementById("txtTextChangeColor").innerHTML =
      "Text sau khi đổi màu";
    document.getElementById("txtTextChangeColor").style.color = "red";
    document.getElementById("txtTextChangeColor").style.backgroundColor =
      "blue";
})

var trangThaiAn = true;
document.getElementById("btnOnOff").addEventListener("click", function () {
  if (trangThaiAn === true) {
    document.getElementById("imgBulb").src = "./img/pic_bulbon.gif";
    this.style.backgroundColor = 'green';
    trangThaiAn = false;
  } else {
    document.getElementById("imgBulb").src = "./img/pic_bulboff.gif";
    this.style.backgroundColor = "gray";
    trangThaiAn = true;
  }
});



document.getElementById("btnHideText").addEventListener("click", function () {
  document.getElementById("txtHideText").style.display = "none";
});

document.getElementById("btnDisable").addEventListener("click", function () {
  document.getElementById("btnHideText").disabled = true;
});


document.getElementById("btnLogin").addEventListener("click", function () {
  var username = document.getElementById("txtUsername").value;
  var password = document.getElementById("txtPassword").value;

  if (username === "huy" && password === "huy") {
    // console.log("thanh cong");
    // document.getElementById("txtThongBao").style.display = "block";
    // document.getElementById("txtThongBao").innerHTML = "Login success";
    // document.getElementById("txtThongBao").style.backgroundColor = "green";
    // document.getElementById("txtThongBao").style.color = "white";
    ChangeStyleLogin("block", "Login success", "green", "white");
  } else {
    // document.getElementById("txtThongBao").style.display = "block";
    // document.getElementById("txtThongBao").innerHTML = "Login no success";
    // document.getElementById("txtThongBao").style.backgroundColor = "red";
    // document.getElementById("txtThongBao").style.color = "white";
    ChangeStyleLogin("block", "Login no success", "red", "white");
  }
});

function ChangeStyleLogin(display, text, bg, color) {
  document.getElementById("txtThongBao").style.display = display;
  document.getElementById("txtThongBao").innerHTML = text;
  document.getElementById("txtThongBao").style.backgroundColor = bg;
  document.getElementById("txtThongBao").style.color = color;
  document.getElementById("txtThongBao").style.fontSize = "30px";
}

// tinh tien tip
document
  .getElementById("btnTinhTienTip")
  .addEventListener("click", function () {
    var txtTongTong = document.getElementById("txtTongTien").value;
    var slPhanTramTip = document.getElementById("slPhanTramTip").value;
    var soNguoi = document.getElementById("txtSoNguoi").value;

    var total = (txtTongTong * slPhanTramTip) / 100 / soNguoi;
    console.log(total);

    document.getElementById("txtThongBaoTienTip").style.display = "block";
    document.getElementById("txtThongBaoTienTip").innerHTML =
    "<p>" + total + " $/nguoi </p>";
});