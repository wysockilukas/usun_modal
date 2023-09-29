const currentDomain = window.location.hostname;

function removeUnwantedElement() {
    const unwantedElement = document.querySelector('.fc-ab-root');
    if (unwantedElement) {
      unwantedElement.remove();
    }
  }

  function removeOverflowHidden() {
    if (document.body.style.overflow === 'hidden') {
      document.body.style.overflow = '';
    }
  }


  function keepOnlyAppDiv() {
    const directChildDivs = document.body.querySelectorAll('body > div');
    for (const div of directChildDivs) {
      if (div.id !== 'app') {
        div.remove();
      }
    }
  }
  
  
  function replaceInStyles() {
    const styleElements = document.head.querySelectorAll('style');
    
    for (const styleElement of styleElements) {
      let cssText = styleElement.textContent;
  
      // Zamień "overflow" na "xxx"
      cssText = cssText.replace(/overflow/g, 'xxx');
      cssText = cssText.replace(/filter/g, 'xxx');
  
      styleElement.textContent = cssText;
    }
  }
  

  function keepOnlyAppDiv() {
    const directChildDivs = document.body.querySelectorAll('body > div');
    for (const div of directChildDivs) {
      if (div.id !== 'app') {
        div.remove();
      }
    }
  }
  
  
  function replaceInStyles() {
    const styleElements = document.head.querySelectorAll('style');
    
    for (const styleElement of styleElements) {
      let cssText = styleElement.textContent;
  
      // Zamień "overflow" na "xxx"
      cssText = cssText.replace(/overflow/g, 'xxx');
      cssText = cssText.replace(/filter/g, 'xxx');
  
      styleElement.textContent = cssText;
    }
  }
  
  
  
// Usuń element, jeśli jest już dostępny
removeUnwantedElement();

  // Usuń atrybut overflow, jeśli jest już ustawiony na hidden
removeOverflowHidden();


if (currentDomain.includes('wiadomosci.wp.pl')) {
  keepOnlyAppDiv();
  replaceInStyles();
  document.body.style.overflow = 'auto';
  document.documentElement.style.overflow = 'auto';
}
  
  // Ustaw obserwatora mutacji, aby monitorować zmiany w DOM
  const observer = new MutationObserver((mutationsList, observer) => {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        removeOverflowHidden();
        removeUnwantedElement();


        if (currentDomain.includes('wiadomosci.wp.pl')) {
          keepOnlyAppDiv();
          replaceInStyles();
          document.body.style.overflow = 'auto';
          document.documentElement.style.overflow = 'auto';
        }        



      }
    }
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
  