const action = document.getElementById('action');
const tone = document.getElementById('tone');
const userText = document.getElementById('userText');

const genBtn = document.getElementById('genBtn');
const copyBtn = document.getElementById('copyBtn');
const saveBtn = document.getElementById('saveBtn');

const result = document.getElementById('result');
const savedItems = document.getElementById('savedItems');
let savedPrompts = [];

// Generate button click
genBtn.addEventListener('click', function() {
  let text = userText.value.trim();
  
  if (text === '') {
    alert('Please enter some text first!');
    return;
  }

  let prompt = '';
  
  // Custom prompt building logic
  if (action.value === 'rewrite') {
    prompt = 'Please rewrite the following text in a ' + tone.value + ' tone:\n\n' + text;
  } else if (action.value === 'summarize') {
    prompt = 'Summarize this content in bullet points using a ' + tone.value + ' tone:\n\n' + text;
  } else if (action.value === 'explain') {
    prompt = 'Explain this concept simply in a ' + tone.value + ' style:\n\n' + text;
  }

  result.innerText = prompt;
});

// Copy button click
copyBtn.addEventListener('click', function() {
  let outputText = result.innerText;
  
  if (outputText !== '' && outputText !== 'Your output will show up here...') {
    navigator.clipboard.writeText(outputText);
    alert('Copied to clipboard!');
  } else {
    alert('Nothing to copy yet!');
  }
});

// Save button click
saveBtn.addEventListener('click', function() {
  let outputText = result.innerText;

  if (outputText !== '' && outputText !== 'Your output will show up here...') {
    savedPrompts.push(outputText);
    showSavedList();
  }
})
function showSavedList() {
  savedItems.innerHTML = '';
  
  for (let i = 0; i < savedPrompts.length; i++) {
    let li = document.createElement('li');
    li.innerText = savedPrompts[i];
    savedItems.appendChild(li);
  }
}