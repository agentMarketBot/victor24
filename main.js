import './style.css'

class CounterApp {
  constructor() {
    this.count = 0;
    this.counterValueElement = document.getElementById('counter-value');
    this.incrementBtn = document.getElementById('increment-btn');
    this.decrementBtn = document.getElementById('decrement-btn');
    this.resetBtn = document.getElementById('reset-btn');
    
    this.init();
  }
  
  init() {
    this.loadCountFromStorage();
    this.bindEvents();
    this.updateUI();
  }
  
  loadCountFromStorage() {
    const savedCount = localStorage.getItem('counter-value');
    if (savedCount !== null) {
      this.count = parseInt(savedCount, 10);
      if (isNaN(this.count)) {
        this.count = 0;
      }
    }
  }
  
  saveCountToStorage() {
    localStorage.setItem('counter-value', this.count.toString());
  }
  
  updateUI() {
    this.counterValueElement.textContent = this.count;
    this.decrementBtn.disabled = this.count <= 0;
  }
  
  increment() {
    this.count++;
    this.updateUI();
    this.saveCountToStorage();
  }
  
  decrement() {
    if (this.count > 0) {
      this.count--;
      this.updateUI();
      this.saveCountToStorage();
    }
  }
  
  reset() {
    this.count = 0;
    this.updateUI();
    this.saveCountToStorage();
  }
  
  bindEvents() {
    this.incrementBtn.addEventListener('click', () => this.increment());
    this.decrementBtn.addEventListener('click', () => this.decrement());
    this.resetBtn.addEventListener('click', () => this.reset());
    
    // Keyboard accessibility
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case '+':
        case '=':
        case 'ArrowUp':
          event.preventDefault();
          this.increment();
          break;
        case '-':
        case '_':
        case 'ArrowDown':
          event.preventDefault();
          this.decrement();
          break;
        case 'r':
        case 'R':
          if (event.ctrlKey || event.metaKey) {
            return; // Don't interfere with browser refresh
          }
          event.preventDefault();
          this.reset();
          break;
        case ' ':
        case 'Enter':
          if (document.activeElement === this.incrementBtn) {
            event.preventDefault();
            this.increment();
          } else if (document.activeElement === this.decrementBtn) {
            event.preventDefault();
            this.decrement();
          } else if (document.activeElement === this.resetBtn) {
            event.preventDefault();
            this.reset();
          }
          break;
      }
    });
  }
}

// Initialize the app when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new CounterApp();
  });
} else {
  new CounterApp();
}