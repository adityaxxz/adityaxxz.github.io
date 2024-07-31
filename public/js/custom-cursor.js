document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
  
    let mouseMoveTimeout;
  
    const updateCursorPosition = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
  
    document.addEventListener('mousemove', (e) => {
      updateCursorPosition(e);
  
      clearTimeout(mouseMoveTimeout);
  
      mouseMoveTimeout = setTimeout(() => {
        cursor.style.transition = 'left 0.3s, top 0.3s';
      }, 50);
  
      cursor.style.transition = 'none';
    });
  
    document.addEventListener('mousedown', () => {
      cursor.classList.add('clicking');
    });
  
    document.addEventListener('mouseup', () => {
      cursor.classList.remove('clicking');
    });
  
    const interactiveElements = document.querySelectorAll('a, button, input[type="submit"], input[type="button"]');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
      });
      element.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
      });
    });
  
    // Check for color scheme changes
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateColorScheme = (e) => {
      if (e.matches) {
        document.documentElement.style.setProperty('--cursor-color', 'rgba(255, 255, 255, 0.5)');
      } else {
        document.documentElement.style.setProperty('--cursor-color', 'rgba(0, 0, 0, 0.5)');
      }
    };
    
    darkModeMediaQuery.addListener(updateColorScheme);
    updateColorScheme(darkModeMediaQuery);
  });