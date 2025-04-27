export const typewriterEffect = (
  element: HTMLElement | null, 
  text: string, 
  speed: number = 100
): Promise<void> => {
  if (!element) return Promise.reject('Element not found');
  
  return new Promise((resolve) => {
    let i = 0;
    element.textContent = '';
    
    const typing = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
        resolve();
      }
    }, speed);
  });
};

export const fadeIn = (
  element: HTMLElement | null, 
  duration: number = 1000
): Promise<void> => {
  if (!element) return Promise.reject('Element not found');
  
  return new Promise((resolve) => {
    element.style.opacity = '0';
    element.style.transition = `opacity ${duration}ms ease-in-out`;
    
    setTimeout(() => {
      element.style.opacity = '1';
      setTimeout(resolve, duration);
    }, 10);
  });
};