import { useEffect } from 'react';

const GoogleReview = () => {
  useEffect(() => {
    // Skapa en script-tagg
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.defer = true;

    // Lägg till skriptet till body
    document.body.appendChild(script);

    // Återställ när komponenten avmonteras
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Vänta 2 sekunder innan vi väljer och tar bort länken
    const timer = setTimeout(() => {
      const linksToRemove = document.querySelectorAll('.WidgetBackground__Content-sc-1ho7q3r-2.ciCnpO a');
      linksToRemove.forEach(link => {
        if (link.textContent.includes('Free Google Reviews widget')) {
          link.remove();
        }
      });
    }, 2000);

    // Rensa timern när komponenten avmonteras
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="elfsight-app-78e5a772-15a8-47a4-be19-93745616129a" data-elfsight-app-lazy></div>
  );
};

export default GoogleReview;
