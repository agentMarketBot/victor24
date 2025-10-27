import './style.css'

class CounterApp {
  constructor() {
    this.count = this.loadCount();
    this.init();
  }

  loadCount() {
    const savedCount = localStorage.getItem('counterValue');
    return savedCount ? parseInt(savedCount, 10) : 0;
  }

  saveCount() {
    localStorage.setItem('counterValue', this.count.toString());
  }

  init() {
    const app = document.querySelector('#app');
    app.innerHTML = `
      <div class="counter-container">
        <h1 class="app-title">Counter Application</h1>
        <div class="counter-display">
          <span id="count-value">${this.count}</span>
        </div>
        <div class="counter-controls">
          <button id="decrement-btn" class="btn btn-decrement" aria-label="Decrease count by one">-</button>
          <button id="reset-btn" class="btn btn-reset" aria-label="Reset count to zero">Reset</button>
          <button id="increment-btn" class="btn btn-increment" aria-label="Increase count by one">+</button>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const resetBtn = document.getElementById('reset-btn');

    incrementBtn.addEventListener('click', () => this.increment());
    decrementBtn.addEventListener('click', () => this.decrement());
    resetBtn.addEventListener('click', () => this.reset());

    // Keyboard navigation support
    document.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'ArrowUp':
        case '+':
          e.preventDefault();
          this.increment();
          break;
        case 'ArrowDown':
        case '-':
          e.preventDefault();
          this.decrement();
          break;
        case 'r':
        case 'R':
          if (e.ctrlKey || e.metaKey) return; // Don't interfere with browser refresh
          e.preventDefault();
          this.reset();
          break;
      }
    });
  }

  updateDisplay() {
    const countValue = document.getElementById('count-value');
    if (countValue) {
      countValue.textContent = this.count;
    }
  }

  increment() {
    this.count++;
    this.updateDisplay();
    this.saveCount();
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
      this.updateDisplay();
      this.saveCount();
    }
  }

  reset() {
    this.count = 0;
    this.updateDisplay();
    this.saveCount();
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new CounterApp();
});

// Also initialize immediately if DOM is already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new CounterApp();
  });
} else {
  new CounterApp();
}