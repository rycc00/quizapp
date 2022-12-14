function renderQuestionsTemp(i) {
    return `
      <img src="src/img/group.png" class="card-img-top" alt="..." />
      <h5 class="card-title">${questions[i].question}</h5>
      <p class="card-text">
          <button id="ans1" class="answer" onclick="checkAnswer(1)">
              <div class="answerChar">A</div>
              ${questions[i].answer1}
          </button>
          <button id="ans2" class="answer" onclick="checkAnswer(2)">
              <div class="answerChar">B</div>
              ${questions[i].answer2}
          </button>
          <button id="ans3" class="answer" onclick="checkAnswer(3)">
              <div class="answerChar">C</div>
              ${questions[i].answer3}
          </button>
          <button id="ans4" class="answer" onclick="checkAnswer(4)">
              <div class="answerChar">D</div>
              ${questions[i].answer4}
          </button>
      </p>
      <div class="navigation">
          <div>Question <b>${currentPage+1} of 7</b></div>
          <button id="nextBtn" class="btn btn-primary" onclick="nextPage()">NEXT</button>
      </div>
  `;
}

function renderEndScreenTemp(points) {
    return `
      <div class="endPage">
        <div>
          <span><h5>SCORE ${points}/${questions.length}</h5><span>
          <div><button class="restartBtn btn" onclick="renderContent()">RESTART</button></div>
        </div>  
      </div>
  `;
}