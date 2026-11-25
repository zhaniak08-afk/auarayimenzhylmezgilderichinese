// ===== Тестті тексеру =====
function checkTest() {
  var questions = document.querySelectorAll(".q");
  var score = 0;
 
  for (var i = 0; i < questions.length; i++) {
    var q = questions[i];
    var answer = q.getAttribute("data-answer");          // дұрыс жауап
    var chosen = q.querySelector("input:checked");       // таңдалған жауап
 
    q.classList.remove("right", "wrong");
    var labels = q.querySelectorAll("label");
    for (var j = 0; j < labels.length; j++) labels[j].classList.remove("correct");
 
    if (chosen && chosen.value === answer) {
      score++;
      q.classList.add("right");
    } else {
      q.classList.add("wrong");
      var good = q.querySelector('input[value="' + answer + '"]');
      if (good) good.parentNode.classList.add("correct");
    }
  }
 
  var total = questions.length;
  var percent = Math.round(score / total * 100);
  var grade = percent >= 85 ? "5 (өте жақсы) 🏆" :
              percent >= 65 ? "4 (жақсы) 👍" :
              percent >= 50 ? "3 (қанағаттанарлық) 🙂" : "2 (қайта тапсырыңыз) 📚";
 
  var box = document.getElementById("result");
  box.style.display = "block";
  box.innerHTML = "Нәтиже: " + score + " / " + total + " (" + percent + "%)<br>Баға: " + grade;
  box.scrollIntoView({ behavior: "smooth" });
}
 
// ===== Тестті қайта бастау =====
function resetTest() {
  location.reload();
}
