export function createConsole() {
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.bottom = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.maxHeight = '200px';
  container.style.overflowY = 'auto';
  container.style.background = 'black';
  container.style.color = 'lime';
  container.style.fontFamily = 'monospace';
  container.style.padding = '10px';

  document.body.appendChild(container);

  return container;
}

const devConsole = createConsole();

// override console.log
const originalLog = console.log;

console.log = function (...args) {
  originalLog(...args); // still logs in devtools

  const line = document.createElement('div');
  line.textContent = args.map(a => JSON.stringify(a)).join(' ');
  devConsole.appendChild(line);
};