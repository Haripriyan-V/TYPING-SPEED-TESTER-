const sentences = [
  "Machine learning helps computers learn from data without being explicitly programmed.",
  "Success is not the key to happiness, happiness is the key to success.",
  "A strong foundation in logic and problem-solving is essential for programmers.",
  "Hard work beats talent when talent doesn't work hard.",
  "Artificial intelligence will shape the future of every industry.",
  "Debugging is like solving a mystery with logic and patience.",
  "Typing accurately is more important than typing fast.",
  "Consistency and practice are the real keys to mastering any skill."
];

let startTime, selectedSentence;

function startTest() {
  document.getElementById("welcome-screen").classList.add("hidden");
  document.getElementById("test-screen").classList.remove("hidden");

  selectedSentence = sentences[Math.floor(Math.random() * sentences.length)];
  document.getElementById("sentence").textContent = selectedSentence;
  document.getElementById("inputText").value = "";
  document.getElementById("inputText").focus();
  startTime = new Date().getTime();
}

function handleKey(event) {
  if (event.key === "Enter") {
    calculateResult();
  }
}

function calculateResult() {
  const endTime = new Date().getTime();
  const elapsed = (endTime - startTime) / 1000;
  const input = document.getElementById("inputText").value.trim();
  
  const typedWords = input.split(" ");
  const originalWords = selectedSentence.split(" ");

  const wpm = (typedWords.length / elapsed) * 60;
  let correct = 0;

  for (let i = 0; i < typedWords.length; i++) {
    if (typedWords[i] === originalWords[i]) {
      correct++;
    }
  }

  const accuracy = (correct / typedWords.length) * 100;

  document.getElementById("test-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  document.getElementById("time").textContent = `⏱️ Time: ${elapsed.toFixed(2)}s`;
  document.getElementById("wpm").textContent = `📄 WPM: ${wpm.toFixed(2)}`;
  document.getElementById("accuracy").textContent = `✅ Accuracy: ${accuracy.toFixed(2)}%`;
}

function resetTest() {
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("welcome-screen").classList.remove("hidden");
}
