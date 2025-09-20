
    // Initialize particles.js
    document.addEventListener('DOMContentLoaded', function() {
      particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#00ff88" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#00ff88",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true
          }
        },
        retina_detect: true
      });
    });

    // Certificate data
    const certificates = {
      course: [
        { id: 'cisco', title: 'Introduction to Cyber-Security', provider: 'Cisco', img: 'image/cisco_cys_fundamental.jpeg', desc: 'Cisco\'s Intro to Cyber Security covers core cybersecurity principles, threats, and best practices.',link:'https://www.credly.com/earner/earned/badge/b4b255dc-d42b-456b-8af9-cd35f057e645' },
        { id: 'thm1', title: 'Pre-Security', provider: 'TryHackMe', img: 'image/thm_pre_security.jpeg', desc: 'TryHackMe\'s Pre-Security path teaches networking, Linux, and basic cybersecurity concepts.',link:'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-VCBMRPRMHI.pdf' },
        { id: 'thm_101', title: 'Cyber Security 101', provider: 'TryHackMe', img: 'image/thm_cyber_security_101.jpeg', desc: 'Learned all the fundamentals needed for "Red" and "Blue" teaming.',link:'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-D7WROLE3LW.pdf' },
        { id:'thm_jr_pen_test' ,title:'Junior Penetration Testing' , provider: 'Tryhackme', img:'image/Jr_pen_test.jpeg', desc:'Learned and practiced core skills in Networking , Web exploitation, Privilege escalation & Security tools used in the industry' , link:'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-DLGDLQUQDB.pdf' }
      ],
      participation: [
        { id: 'ec_council_hackerverse_25', title: 'HackerVerse CTF', provider: 'EC Council', img: 'image/hacker_verse_ctf_particiaption.jpeg', desc: 'Learned how to solve real-time OSINT and Reverse Engineering challenges without AI.' },
        { id: 'compec24', title: 'Compec 2024', provider: 'NUST', img: 'image/compec_25.jpeg', desc: 'A worthy experience at NUST where I met professionals and learned from them & their projects.' },
        { id: 'chc', title: 'CHC CTF', provider: 'COMSATS', img: 'image/ctf_comsat.jpeg', desc: 'CHC CTF was a great experience where I learned about CTF. Our team ranked in top 10.' },
        { id: 'saylor_cs', title: 'CS 107 C++ Programming', provider: 'Saylor Academy', img: 'image/cscourse_107.jpeg', desc: 'Refreshed my knowledge of C++ programming Fundamentals and OOP, valuable for reverse engineering.', link: 'https://example.com/hackerverse-cert' }
      ],
      professional: [
        { id: 'intro_to_cip', title: 'Introduction to CIP', provider: 'OPSWAT', img: 'image/introduction_to_cip.jpeg', desc: 'Gained foundational knowledge in Critical Infrastructure Protection (CIP).',link:'https://learn.opswatacademy.com/certificate/q-xgAa2VMg' }
      ]
    };

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      menuToggle.innerHTML = nav.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
    
    // Back to top button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Certificate tabs functionality
    const certTabs = document.querySelectorAll('.cert-tab');
    const certList = document.getElementById('certificate-list');
    
    function showCertificates(category) {
      certList.innerHTML = '';
      
      certificates[category].forEach(cert => {
        const li = document.createElement('li');
        li.textContent = `${cert.provider} - ${cert.title}`;
        li.setAttribute('data-id', cert.id);
        li.addEventListener('click', () => displayCertificate(cert));
        certList.appendChild(li);
      });
      
      // Activate the first certificate by default
      if (certificates[category].length > 0) {
        displayCertificate(certificates[category][0]);
        certList.children[0].classList.add('active');
      }
    }
    
    function displayCertificate(cert) {
      const certImg = document.getElementById('cert-img');
      const certTitle = document.getElementById('cert-title');
      const certDesc = document.getElementById('cert-desc');
      const certLink = document.getElementById('cert-link');
      if (cert.img) {
        certImg.src = cert.img;
        certImg.style.display = 'block';
      } else {
        certImg.style.display = 'none';
      }
      
      certTitle.textContent = `${cert.provider} - ${cert.title}`;
      certDesc.textContent = cert.desc;

        
  
if (cert.link) {
  certLink.innerHTML = `
    <a href="${cert.link}" target="_blank" class="cert-link">
      Verify Certificate <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </a>
  `;
} else {
  certLink.innerHTML = '';
}

      
      // Update active class in list
      document.querySelectorAll('#certificate-list li').forEach(li => {
        li.classList.remove('active');
        if (li.getAttribute('data-id') === cert.id) {
          li.classList.add('active');
        }
      });
    }
    
    // Initialize with course certificates
    showCertificates('course');
    
    // Tab switching
    certTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const category = tab.getAttribute('data-tab');
        
        certTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        showCertificates(category);
      });
    });
    
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('theme-alternate');
      
      if (document.body.classList.contains('theme-alternate')) {
        document.documentElement.style.setProperty('--primary-color', '#ff2a6d');
        document.documentElement.style.setProperty('--secondary-color', '#ff8a00');
        document.documentElement.style.setProperty('--glow', '0 0 15px rgba(255, 42, 109, 0.4)');
        themeToggle.innerHTML = '<i class="fas fa-palette"></i> Default Theme';
        
      } else {
        document.documentElement.style.setProperty('--primary-color', '#00ff88');
        document.documentElement.style.setProperty('--secondary-color', '#00d0ff');
        document.documentElement.style.setProperty('--glow', '0 0 15px rgba(0, 255, 136, 0.4)');
        themeToggle.innerHTML = '<i class="fas fa-palette"></i> Alternate Theme';
      }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Animation on scroll
    const animateSections = document.querySelectorAll('.animate-section');
    
    function checkScroll() {
      animateSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;
        
        if (sectionTop < triggerPoint) {
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
        }
      });
    }
    
    // Initialize section opacity
    animateSections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);
    
    // Section indicator functionality
    const sectionIndicators = document.querySelectorAll('.indicator-dot');
    const sections = document.querySelectorAll('section');
    
    function updateSectionIndicator() {
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 200)) {
          currentSection = section.getAttribute('id');
        }
      });
      
      sectionIndicators.forEach(indicator => {
        indicator.classList.remove('active');
        if (indicator.getAttribute('data-section') === currentSection) {
          indicator.classList.add('active');
        }
      });
    }
    
    window.addEventListener('scroll', updateSectionIndicator);
    
    
    
    // NEW: Add typing animation to hero title
    window.addEventListener('load', () => {
      const heroTitle = document.querySelector('.hero-title');
      const originalText = heroTitle.textContent;
      heroTitle.textContent = '';
      heroTitle.classList.add('typing-animation');
      
      setTimeout(() => {
        heroTitle.textContent = originalText;
        heroTitle.classList.remove('typing-animation');
      }, 3500);
    });
 