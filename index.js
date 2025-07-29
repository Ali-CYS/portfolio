     // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Set last updated date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('last-updated').textContent = new Date().toLocaleDateString('en-US', options);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
        // Close mobile menu if open
        document.getElementById('main-nav').classList.remove('active');
      });
    });

    // Mobile menu toggle
    document.querySelector('.menu-toggle').addEventListener('click', () => {
      document.getElementById('main-nav').classList.toggle('active');
    });

    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('theme-alternate');
      
      // Change icon based on theme
      const icon = themeToggle.querySelector('.theme-icon');
      if (document.body.classList.contains('theme-alternate')) {
        icon.innerHTML = '<path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-12a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/>';
        themeToggle.innerHTML = '<svg class="theme-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-12a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/></svg>Theme';
      } else {
        icon.innerHTML = '<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1-8.313-12.454z"/>';
        themeToggle.innerHTML = '<svg class="theme-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1-8.313-12.454z"/></svg>Theme';
      }
    });

//     // Certificate display functionality
//    function showCertificate(certId) {
//   const certImage = document.getElementById(`${certId}-cert`);
//   if (!certImage) return;

//   // If this certificate is already active, hide it (toggle off)
//   if (certImage.classList.contains('active')) {
//     certImage.classList.remove('active');
//   } else {
//     // Hide all certificates first
//     document.querySelectorAll('.certificate-image').forEach(img => {
//       img.classList.remove('active');
//     });
//     // Show the selected certificate
//     certImage.classList.add('active');
//     certImage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
//   }
// }


    function showCertificate(certId, event) {
    const certImage = document.getElementById(certId + '-cert');
    const certInfo = document.getElementById(certId + '-info');

    if (!certImage || !certInfo) return;

    const isActive = certImage.classList.contains('active');

    // Hide all images and info
    document.querySelectorAll('.certificate-image').forEach(img => img.classList.remove('active'));
    document.querySelectorAll('.certificate-info').forEach(info => info.classList.remove('active'));

    // Remove active from all <li> buttons
    document.querySelectorAll('.certifications-list li').forEach(li => li.classList.remove('active'));

    // Toggle on if not already active
    if (!isActive) {
      certImage.classList.add('active');
      certInfo.classList.add('active');
      event.target.classList.add('active'); // highlight button
      // certImage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
       const yOffset = -20; // Adjust offset so info fits nicely in view
        const y = certImage.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }






    // Simulated GitHub stats (in a real implementation, you would fetch these from the GitHub API)
  // //  function simulateGitHubStats() {
  //     // These would be replaced with actual API calls in production
  //     document.getElementById('github-repos').textContent = Math.floor(Math.random() * 50) + 20;
  //     document.getElementById('github-commits').textContent = (Math.floor(Math.random() * 2000) + 1000).toLocaleString();
  //     document.getElementById('github-stars').textContent = Math.floor(Math.random() * 300) + 50;
  //     document.getElementById('github-contributions').textContent = (Math.floor(Math.random() * 5000) + 2000).toLocaleString();
  //   }

    // Initialize GitHub stats
    simulateGitHubStats();

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      const nav = document.getElementById('main-nav');
      if (nav.classList.contains('active')) {
        const isClickInsideNav = nav.contains(e.target);
        const isClickOnMenuToggle = e.target.closest('.menu-toggle');
        
        if (!isClickInsideNav && !isClickOnMenuToggle) {
          nav.classList.remove('active');
        }
      }
    });

