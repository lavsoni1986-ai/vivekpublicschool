/**
 * VIVEK PUBLIC HIGHER SECONDARY SCHOOL, SHAHDOL - MINIMAL JS ENGINE
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Sticky Navigation & Responsive Hamburger Menu
  // ==========================================
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      // Accessibility: toggle aria-expanded
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
    });

    // Close hamburger when link clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Highlight Active Link based on pathname
  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (pageName === href || (pageName === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });


  // ==========================================
  // 2. Scroll to Top Visibility
  // ==========================================
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  
  window.addEventListener('scroll', () => {
    if (scrollTopBtn) {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }


  // ==========================================
  // 3. Shared WhatsApp Submission Core Logic
  // ==========================================
  const labelMap = {
    name: "नाम (Name)",
    fatherName: "पिता का नाम (Father Name)",
    classApplying: "प्रवेश कक्षा (Class)",
    mobile: "मोबाइल नंबर (Mobile)",
    email: "ईमेल (Email)",
    message: "संदेश (Message)"
  };

  window.sendWhatsAppInquiry = function(formData, title) {
    let text = `*${title} - विवेक पब्लिक स्कूल, शहडोल*\n\n`;
    for (const [key, value] of Object.entries(formData)) {
      if (value && value.trim()) {
        const label = labelMap[key] || key;
        text += `🔹 *${label}:* ${value.trim()}\n`;
      }
    }
    text += `\n_यह संदेश विद्यालय की वेबसाइट से प्राप्त हुआ है।_`;
    
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919424648831?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };


  // ==========================================
  // 4. Admission Page Inquiry Form Handling
  // ==========================================
  const admissionForm = document.getElementById('admissionForm');
  if (admissionForm) {
    admissionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const studentName = document.getElementById('studentName').value;
      const fatherName = document.getElementById('fatherName').value;
      const classApplying = document.getElementById('classApplying').value;
      const mobile = document.getElementById('mobile').value;
      const message = document.getElementById('message').value;

      if (!studentName || !fatherName || !classApplying || !mobile) {
        alert('कृपया सभी आवश्यक फ़ील्ड्स (*) भरें।');
        return;
      }

      // Call common WhatsApp helper
      const formData = {
        name: studentName,
        fatherName: fatherName,
        classApplying: classApplying,
        mobile: mobile,
        message: message
      };

      window.sendWhatsAppInquiry(formData, 'नया प्रवेश पूछताछ फ़ॉर्म (Admissions Inquiry)');
      admissionForm.reset();
    });
  }


  // ==========================================
  // 5. Contact Page Form Handling
  // ==========================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const contactName = document.getElementById('contactName').value;
      const contactPhone = document.getElementById('contactPhone').value;
      const contactEmail = document.getElementById('contactEmail').value;
      const contactMessage = document.getElementById('contactMessage').value;

      if (!contactName || !contactPhone || !contactMessage) {
        alert('कृपया नाम, मोबाइल नंबर और संदेश (*) भरें।');
        return;
      }

      // Call common WhatsApp helper
      const formData = {
        name: contactName,
        mobile: contactPhone,
        email: contactEmail,
        message: contactMessage
      };

      window.sendWhatsAppInquiry(formData, 'नया संपर्क पूछताछ फ़ॉर्म (Contact Message)');
      contactForm.reset();
    });
  }


  // ==========================================
  // 6. Simple Lightbox Modal (gallery.html)
  // ==========================================
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  
  if (galleryItems.length > 0 && lightbox) {
    const lightboxContent = document.querySelector('.lightbox-content');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');

    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const title = item.querySelector('h3').textContent;
        const caption = item.querySelector('span').textContent;
        const desc = item.querySelector('p')?.textContent || '';

        // Inject HTML and show lightbox
        lightboxContent.innerHTML = `
          <div style="padding: 1rem;">
            <svg style="width:48px; height:48px; color:var(--accent); margin-bottom:10px;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <h3 style="font-size:1.5rem; color:var(--white);">${title}</h3>
            <span style="font-size:0.85rem; color:var(--accent); text-transform:uppercase; font-weight:600;">${caption}</span>
          </div>`;
        lightboxCaption.textContent = desc;
        lightbox.style.display = 'flex';
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', () => {
        lightbox.style.display = 'none';
      });
    }

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });
  }


  // ==========================================
  // 7. Leaflet OpenStreetMap Initialization (contact.html)
  // ==========================================
  const mapElement = document.getElementById('map');
  if (mapElement && typeof L !== 'undefined') {
    // School coordinates: [23.2941, 81.3615] (Balpurwa/Burhar Road near Ganesh Mandir)
    const schoolLocation = [23.2941, 81.3615];
    const map = L.map('map', {
      scrollWheelZoom: false
    }).setView(schoolLocation, 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Custom Marker details
    L.marker(schoolLocation).addTo(map)
      .bindPopup(`
        <div style="font-family: inherit; color: var(--primary);">
          <h4 style="margin:0 0 4px 0; font-size: 0.95rem; font-weight: 700;">विवेक पब्लिक सीनियर सेकेंडरी स्कूल</h4>
          <p style="margin:0; font-size: 0.8rem; color: var(--text-muted);">बुढ़ार रोड, बालपुरवा, शहडोल (म.प्र.)</p>
          <a href="https://maps.google.com/?q=23.2941,81.3615" target="_blank" rel="noopener noreferrer" style="display:inline-block; margin-top:6px; font-size:0.75rem; color:var(--accent); font-weight:700;">नक्शा गूगल मैप्स पर खोलें</a>
        </div>
      `)
      .openPopup();
  }

});
