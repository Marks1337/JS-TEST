document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.querySelector(".btn");
  submitBtn.addEventListener("click", function () {
    let score = 0;

    // Проверка с несколькими ответами
    const label = document.querySelectorAll("label");
    const answers = document.querySelectorAll('input[type="checkbox"]');
    const answers2 = document.querySelectorAll('input[type="radio"]');
    const answers3 = document.querySelectorAll('input[type="text"]');
    console.log(answers3);
    const questionsAnswer = [
      ["10"],
      ["21"],
      ["30"],
      ["41"],
      ["50"],
      ["60"],
      ["70"],
      ["81"],
      ["91"],
      ["100"],
      ["111"],
      ["120"],
    ];

    // ПРОВЕРКА С НЕСКОЛЬКИМИ ОТВЕТАМИ
    if (answers[0].checked && answers[1].checked && !answers[2].checked) {
      score++;
    }
    // ПРОВЕРКА С 1 ОТВЕТОМ
    answers2.forEach(function (answer2) {
      questionsAnswer.forEach(function (index) {
        if (answer2.checked && index == answer2.id) {
          score++;
        }
      });
    });

    // ПРОВЕРКА VALUE
    if (answers3[0].value.toLowerCase() === "foreach") {
      score++;
    }
    if (answers3[1].value.toLowerCase() === "32154") {
      score++;
    }

    //Вывод результата
    alert(`Вы ответили правильно на ${score} вопросов из 15`);
  });
});
