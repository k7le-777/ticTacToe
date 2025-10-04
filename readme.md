# 🎮 Tic Tac Toe Game

Interactive two-player tic-tac-toe game built with vanilla JavaScript, featuring clean code architecture using the Module Pattern and Factory Functions.

[🎮 **Play Live Demo**](https://k7le-777.github.io/ticTacToe/) | [📝 **View Code**](https://github.com/k7le-777/ticTacToe)

---

## 📋 About This Project

Built as part of **The Odin Project's Full Stack JavaScript curriculum**, this project challenged me to implement advanced JavaScript design patterns for the first time. What started as a simple game became a 2-month deep dive into clean code architecture, teaching me that writing code that *works* is fundamentally different from writing code that's *maintainable*.

### 🌟 What Makes This Special

This was my **breakthrough project**—the moment I fell in love with truly understanding code, not just making it function. I refactored the entire codebase multiple times, each iteration teaching me more about:
- Separation of concerns
- Modular design patterns
- Why certain architectural decisions matter
- The difference between "it works" and "it's well-designed"

I spent 2 months on this project not because it was difficult to make it work, but because **I wanted to polish every skill** and understand the logic behind every approach. I love to marinate in topics I don't understand—and this project let me do exactly that.

---

## ✨ Features

- ✅ **Two-Player Gameplay** - Turn-based play with clear player indication
- ✅ **Win Detection Algorithm** - Automatically detects wins across rows, columns, and diagonals
- ✅ **Draw Detection** - Identifies tied games when board is full
- ✅ **Game State Management** - Clean separation between game logic and UI
- ✅ **Restart Functionality** - Play unlimited rounds without page refresh
- ✅ **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- ✅ **Visual Feedback** - Clear indication of current player and game outcomes

---

## 🛠️ Technologies Used

- **JavaScript (ES6+)** - Module Pattern, Factory Functions, IIFEs
- **HTML5** - Semantic markup and accessibility
- **CSS3** - Flexbox layout, custom styling, responsive design
- **Git/GitHub** - Version control and collaboration workflow

---

## 🧠 Key Learnings

### Design Patterns Mastered

**Module Pattern (IIFE)**
Learned to encapsulate game logic and create private variables/functions, exposing only what's necessary through a public API.

**Factory Functions**
Created reusable player objects without using classes, understanding the power of closures and function scope.

**Separation of Concerns**
Kept game logic completely separate from DOM manipulation, making the code more testable and maintainable.

### Technical Skills Developed

- Writing **win detection algorithms** that check all possible winning combinations
- Managing **complex game state** (current player, board state, game status)
- Implementing **event delegation** for efficient event handling
- Creating **modular, reusable code** that's easy to understand and extend
- **Refactoring** code multiple times to improve structure and readability

### Problem-Solving Approach

This project taught me to:
- **Break complex problems into smaller pieces** before diving into code
- **Plan architecture before implementation** instead of coding randomly
- **Embrace refactoring** as a learning tool, not a failure
- **Treat challenges as gifts** - every bug was an opportunity to understand deeper

---

## 💡 Code Highlights

### Module Pattern for Game Board
```javascript
const gameBoard = (() => {
  let board = ['', '', '', '', '', '', '', '', ''];
  
  const getBoard = () => board;
  
  const setMark = (index, mark) => {
    if (board[index] === '') {
      board[index] = mark;
      return true;
    }
    return false;
  };
  
  const reset = () => {
    board = ['', '', '', '', '', '', '', '', ''];
  };
  
  return { getBoard, setMark, reset };
})();
```

### Factory Function for Players
```javascript
const Player = (name, mark) => {
  return { name, mark };
};
```

### Win Detection Logic
```javascript
const checkWinner = () => {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];
  
  const board = gameBoard.getBoard();
  
  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return board[a] !== '' && 
           board[a] === board[b] && 
           board[a] === board[c];
  });
};
```

---

## 🚀 Getting Started

### Play Online
Simply visit the [**live demo**](https://k7le-777.github.io/ticTacToe/) to play immediately!

### Run Locally

1. **Clone the repository**
```bash
git clone https://github.com/k7le-777/ticTacToe.git
cd ticTacToe
```

2. **Open in browser**
```bash
open index.html
# Or simply double-click index.html
```

That's it! No build process, no dependencies—just pure vanilla JavaScript.

---

## 🎨 Screenshots

![Tic Tac Toe Gameplay](screenshot-game.png)
*Clean, intuitive interface with clear player indication*

![Win State](screenshot-win.png)
*Visual feedback when a player wins*

---

## 🔮 Future Enhancements

If I were to rebuild this project today, I would add:

- 🤖 **AI Opponent** using the minimax algorithm for single-player mode
- 📊 **Score Tracking** across multiple games with persistent storage
- 👥 **Player Customization** - choose names, symbols, and colors
- ✨ **Animations** for moves, wins, and transitions using CSS or JavaScript
- 🎚️ **Difficulty Levels** for AI (easy, medium, hard)
- 📱 **Progressive Web App** capabilities for offline play
- ♿ **Enhanced Accessibility** with ARIA labels and keyboard navigation

---

## 📚 Lessons Learned

### Technical Insights
> "This project taught me that there are multiple ways to write a function, but I wanted to polish every single skill from my foundations journey to be efficient and practical in future projects."

### The Refactoring Journey
I refactored this codebase at least **4 times**:
1. **First version:** Everything in global scope, spaghetti code that worked but was unmaintainable
2. **Second version:** Attempted to use objects, still coupled logic and display
3. **Third version:** Implemented Module Pattern, separated concerns properly
4. **Fourth version:** Refined variable names, improved readability, added comments

Each refactor was uncomfortable but invaluable. **The struggle wasn't a curse—it was a gift.**

### The Breakthrough Moment
> "I realized I love to marinate in topics I don't understand. This project wasn't frustrating—it was fascinating. Every bug was a puzzle, every refactor was a chance to understand *why*, not just *what*."

This was the project where I discovered that coding isn't just about making things work—it's about understanding deeply, building cleanly, and creating solutions that others can understand and extend.

---

## 🙏 Acknowledgments

- **[The Odin Project](https://www.theodinproject.com/)** - For the excellent curriculum and project guidance
- **The Odin Community** - For support and code review suggestions
- **My journey** - For teaching me that persistence and curiosity are just as important as technical skills

---

## 🤝 Connect With Me

This project represents a pivotal moment in my coding journey—the moment I stopped trying to just *complete* projects and started trying to *understand* them deeply.

Want to see more of my work or discuss web development?

- 💼 [LinkedIn](your-linkedin-url)
- 🌐 [Portfolio](https://k7le-777.github.io/ryan-burns-portfolio-DEMO-/)
- 📧 [Email](mailto:kyleburns7.kb@yahoo.com)
- 💻 [GitHub](https://github.com/k7le-777)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Part of my self-taught developer journey**

[The Odin Project](https://www.theodinproject.com) → Full Stack JavaScript Path

*From asking "How is a page fundamentally made?" to building solutions that matter.*

⭐ Star this repo if you found it helpful!

</div>