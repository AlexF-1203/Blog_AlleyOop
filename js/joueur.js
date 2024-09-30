document.getElementById('scrollDown').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le lien de sauter au haut de la page
  
    // Récupérer toutes les sections
    const sections = document.querySelectorAll('.section');
    let currentSectionIndex = 0;
  
    // Trouver la section actuelle
    sections.forEach((section, index) => {
      if (section.getBoundingClientRect().top === 0) {
        currentSectionIndex = index;
      }
    });
  
    // Déterminer la prochaine section
    const nextSection = sections[currentSectionIndex + 1] || sections[0]; // Boucle vers la première section si à la fin
  
    // Faire défiler vers la prochaine section
    nextSection.scrollIntoView({ behavior: 'smooth' });
  });