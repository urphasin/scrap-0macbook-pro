/*
    🔥 Option 4: Inject your own mini editor (advanced, but 🔥)

    You can literally inject a textarea and run code:
 */


const textarea = document.createElement('textarea');
textarea.style.position = 'fixed';
textarea.style.top = '0';
textarea.style.left = '0';
textarea.style.width = '400px';
textarea.style.height = '200px';
textarea.style.zIndex = '9999';

document.body.appendChild(textarea);

textarea.addEventListener('keydown', (e) => {
  if (e.metaKey && e.key === 'Enter') {
    eval(textarea.value);
  }
});