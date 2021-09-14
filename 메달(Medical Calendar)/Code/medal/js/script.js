var sum = 0;
setInterval(function() {
    if (sum % 2 == 0) {
        document.getElementById("img_btn").src = "../img/qr-code.png";
    } else {
        document.getElementById("img_btn").src = "../img/touch.png";
    }
    sum += 1; // 매 1초마다 숫자 1을 sum 변수에 더합니다.
}, 2000); // 1000ms(1초)가 경과하면 이 함수가 실행합니다.

btn_1.addEventListener("click", function() {
    if (btn_1.style.backgroundColor == "rgb(241, 240, 134)")
        btn_1.style.backgroundColor = "#568857";
    else
        btn_1.style.backgroundColor = "rgb(241, 240, 134)";
    btn_1.style.border = "2px";
    btn_1.style.borderColor = "#568857";
});

btn_2.addEventListener("click", function() {
    if (btn_2.style.backgroundColor == "rgb(241, 240, 134)")
        btn_2.style.backgroundColor = "#568857";
    else
        btn_2.style.backgroundColor = "rgb(241, 240, 134)";
});
btn_3.addEventListener("click", function() {
    if (btn_3.style.backgroundColor == "rgb(241, 240, 134)")
        btn_3.style.backgroundColor = "#568857";
    else
        btn_3.style.backgroundColor = "rgb(241, 240, 134)";
});
btn_4.addEventListener("click", function() {
    if (btn_4.style.backgroundColor == "rgb(241, 240, 134)")
        btn_4.style.backgroundColor = "#568857";
    else
        btn_4.style.backgroundColor = "rgb(241, 240, 134)";
});
btn_5.addEventListener("click", function() {
    if (btn_5.style.backgroundColor == "rgb(241, 240, 134)")
        btn_5.style.backgroundColor = "#568857";
    else
        btn_5.style.backgroundColor = "rgb(241, 240, 134)";
});
btn_6.addEventListener("click", function() {
    if (btn_6.style.backgroundColor == "rgb(241, 240, 134)")
        btn_6.style.backgroundColor = "#568857";
    else
        btn_6.style.backgroundColor = "rgb(241, 240, 134)";
});

btn_7.addEventListener("click", function() {
    if (btn_7.style.backgroundColor == "rgb(241, 240, 134)")
        btn_7.style.backgroundColor = "#568857";
    else
        btn_7.style.backgroundColor = "rgb(241, 240, 134)";
});