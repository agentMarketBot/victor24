# Counter Application

A simple, responsive counter application built with vanilla JavaScript, HTML5, and CSS3. This application allows users to increment, decrement, and reset a numerical counter with persistent storage.

## Features

- **Increment/Decrement**: Increase or decrease the counter value by 1
- **Reset**: Reset the counter to 0
- **Persistent Storage**: Counter value is saved in localStorage and persists between sessions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Accessibility**: Keyboard navigation and screen reader support
- **Modern UI**: Clean, minimalist design with smooth animations

## Technical Specifications

### Built With
- **HTML5**: Semantic structure
- **CSS3**: Modern styling with gradients, flexbox, and responsive design
- **JavaScript (ES6+)**: Application logic and localStorage integration
- **Vite**: Build tool and development server

### Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Installation and Setup

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd victor24
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Usage

### Basic Operations
- **Increment**: Click the "+" button or press the Up arrow key
- **Decrement**: Click the "-" button or press the Down arrow key
- **Reset**: Click the "Reset" button or press the "R" key

### Keyboard Shortcuts
- `↑` or `+`: Increment counter
- `↓` or `-`: Decrement counter  
- `R`: Reset counter to 0

### Data Persistence
The counter value is automatically saved to your browser's localStorage and will be restored when you return to the application.

## Architecture

The application follows a class-based architecture with clear separation of concerns:

```
src/
├── main.js      # Main application logic and CounterApp class
├── style.css    # All styling and responsive design
└── index.html   # HTML entry point

public/
└── counter-icon.svg  # Application icon
```

### Key Components

- **CounterApp Class**: Main application controller
  - `loadCount()`: Retrieves saved count from localStorage
  - `saveCount()`: Persists current count to localStorage  
  - `increment()`: Increases count by 1
  - `decrement()`: Decreases count by 1 (minimum 0)
  - `reset()`: Sets count to 0
  - `updateDisplay()`: Updates the UI with current count

## Accessibility Features

- **Keyboard Navigation**: Full keyboard support for all operations
- **ARIA Labels**: Descriptive labels for screen readers
- **High Contrast Support**: Adapts to user's contrast preferences
- **Reduced Motion**: Respects user's motion preferences
- **Focus Indicators**: Clear visual focus states

## Browser Support

### localStorage
This application uses the browser's localStorage API for data persistence. localStorage is supported in:
- IE 8+
- All modern browsers

### CSS Features
- CSS Grid and Flexbox
- CSS Custom Properties
- CSS Gradients
- CSS Transforms and Transitions

## Security Considerations

- No external dependencies for core functionality
- Client-side only (no server communication)
- localStorage data stays on user's device
- No sensitive data storage

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspired by modern minimalist UI principles
- Built following web accessibility guidelines (WCAG 2.1)
- Responsive design following mobile-first approach
