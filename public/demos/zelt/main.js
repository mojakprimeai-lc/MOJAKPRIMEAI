/* =========================================================
   ZELT SOLAR & ELECTRICALS — MAIN JAVASCRIPT
   ========================================================= */

(function () {
  'use strict';

  /* -------------------------------------------------------
     NAVBAR — scroll-aware state + mobile menu
  ------------------------------------------------------- */
  const navbar   = document.getElementById('navbar');
  const hamburger = document.getElementById('navHamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay   = document.getElementById('mobileMenuOverlay');
  const closeBtn  = document.getElementById('mobileMenuClose');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const navLinks  = document.querySelectorAll('.nav-link');

  function updateNavbar () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  function openMenu () {
    mobileMenu.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu () {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

  /* Active nav link highlight on scroll */
  const sections = document.querySelectorAll('section[id]');
  function setActiveLink () {
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === '#' + current
      );
    });
  }
  window.addEventListener('scroll', setActiveLink, { passive: true });

  /* -------------------------------------------------------
     HERO PARTICLES
  ------------------------------------------------------- */
  const particleContainer = document.getElementById('heroParticles');
  function createParticles () {
    const count = 28;
    for (let i = 0; i < count; i++) {
      const dot = document.createElement('div');
      dot.className = 'particle';
      const size = Math.random() * 3 + 1.5;
      dot.style.cssText = `
        left: ${Math.random() * 100}%;
        bottom: ${Math.random() * 40}%;
        width: ${size}px;
        height: ${size}px;
        animation-duration: ${6 + Math.random() * 10}s;
        animation-delay: ${Math.random() * 8}s;
        opacity: 0;
      `;
      particleContainer.appendChild(dot);
    }
  }
  createParticles();

  /* -------------------------------------------------------
     INTERSECTION OBSERVER — AOS-like reveals
  ------------------------------------------------------- */
  const aosObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
          aosObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('[data-aos]').forEach(el => aosObserver.observe(el));

  /* -------------------------------------------------------
     AI CHATBOT — Intelligent response engine
  ------------------------------------------------------- */
  const chatMessages  = document.getElementById('chatMessages');
  const chatInput     = document.getElementById('chatInput');
  const chatSend      = document.getElementById('chatSend');
  const quickReplies  = document.getElementById('quickReplies');

  // Knowledge base — structured for Zelt Solar & Electricals
  const knowledgeBase = [
    {
      keywords: ['products', 'offer', 'sell', 'have', 'stock', 'range'],
      response: 'Zelt Solar & Electricals offers: Solar Floodlights (60W–800W from KES 4,500), Solar Street Lights (up to 1000W from KES 7,500), CCTV Solar Floodlights (KES 8,000), Solar Garden Lights (from KES 4,000), Home Backup Power Systems (LiFePO4 from KES 36,000), Inverters, Solar Panels (up to 350W), Chandeliers, Ceiling Lights, and 100% Copper KEBS-certified Electrical Cables. Which category interests you?'
    },
    {
      keywords: ['save', 'saving', 'bill', 'electricity', 'cost', 'reduce', 'zero', 'cheap', 'affordable'],
      response: 'Switching to solar with Zelt can reduce your electricity bills significantly — many clients achieve 70–100% reduction. A 60W solar floodlight replacing a grid-powered one saves approximately KES 800–1,200 per month. A full home backup system with a 350W panel can offset KES 3,000–8,000 per month depending on usage. The systems typically pay for themselves within 12–24 months. Want me to help calculate your specific savings?'
    },
    {
      keywords: ['backup', 'power', 'inverter', 'home system', 'battery', 'lifepo4', 'hithium'],
      response: 'Our HiTHIUM LiFePO4 Home Backup System (KES 36,000 for battery + extras) provides 1kWh (1004.8Wh) of storage with a built-in inverter. It powers: Lights up to 80 hours, TV up to 15 hours, Woofer up to 30 hours, and charges a phone 90 times. It features 2000+ charge cycles, a 2-year warranty, silent operation, and zero emissions. You can pair it with a 350W solar panel (KES 10,000) for fully off-grid operation. Shall I guide you to our contact team for a quote?'
    },
    {
      keywords: ['floodlight', 'flood light', 'security light', 'outdoor light', 'motion'],
      response: 'Our Solar Floodlights range from 60W (KES 4,500) to 800W. Key features: automatic dusk-to-dawn activation, motion sensor variants, IP65 weatherproof rating, and easy installation — no wiring needed. The CCTV Solar Floodlight (KES 8,000) adds 1080P HD live monitoring, WiFi app control, two-way audio, and motion alerts. Perfect for homes, compounds, and commercial properties.'
    },
    {
      keywords: ['street light', 'streetlight', 'road', 'compound', 'estate'],
      response: 'Zelt All-in-One Solar Street Lights are ideal for estate roads, driveways, and public spaces. Available from KES 7,500, with output up to 1000W. They feature integrated LiFePO4 batteries, smart motion-based brightness control, and a lifespan of over 50,000 hours. We handle full installation across Kenya. Want a site assessment and quote?'
    },
    {
      keywords: ['garden', 'lawn', 'pathway', 'driveway', 'walkway', 'outdoor'],
      response: 'Our Solar Garden Lights (from KES 4,000) beautifully illuminate pathways, driveways, and garden spaces. Options include lawn lamps (KES 6,000) and solar wall lights (from KES 1,000). They require zero wiring, charge automatically during the day, and provide reliable illumination through the night. Great for both residential and commercial landscaping.'
    },
    {
      keywords: ['install', 'installation', 'setup', 'mounting', 'fit', 'wire', 'wiring'],
      response: 'Zelt provides professional installation services across Kenya. Our certified technicians handle everything: solar panel mounting, battery connection, inverter setup, cable routing, and full testing. We also stock 100% copper KEBS-compliant cables from trusted brands (East African Cable, Coast Cable, ASL, HTG) — ideal for home and commercial wiring. Contact us at +254 701 884 358 to schedule an installation assessment.'
    },
    {
      keywords: ['price', 'pricing', 'cost', 'how much', 'ksh', 'kes'],
      response: 'Our current pricing:\n• 40W Solar Floodlight — KES 4,500\n• Solar Wall Light — from KES 1,000\n• CCTV Solar Floodlight — KES 8,000\n• Solar Garden Light — KES 4,000\n• Lawn Lamp — KES 6,000\n• Solar Motion Sensor Floodlight — KES 7,000\n• Solar Street Light (1000W) — KES 7,500\n• Solar Ceiling Light — KES 4,000\n• Chandelier — KES 10,500\n• LiFePO4 Battery — KES 36,000\n• 350W Solar Panel — KES 10,000\nAll prices are indicative — contact us for current stock and bulk discounts.'
    },
    {
      keywords: ['deliver', 'delivery', 'ship', 'shipping', 'nationwide', 'upcountry', 'send'],
      response: 'Yes! Zelt offers nationwide delivery across Kenya — whether you are in Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, Machakos, or upcountry. Products are packaged securely and shipped as parcels. Contact us at +254 701 884 358 or zeltmanufactures@gmail.com to arrange delivery and get a shipping quote for your location.'
    },
    {
      keywords: ['location', 'where', 'address', 'find', 'visit', 'shop', 'store'],
      response: 'You can visit us at two Nairobi locations:\n1. Mwangaza Arcade, Shop G7 — Charles Rubia Road, Nyamakima (near Sheikh Karume Rd)\n2. Jamii Business Centre, Shop G35 — Sheikh Karume Road, Nairobi\nOpen Monday–Saturday, 8:00 AM to 6:00 PM. Closed Sundays. You can also reach us by phone or email for remote consultations.'
    },
    {
      keywords: ['contact', 'phone', 'call', 'email', 'reach', 'whatsapp', 'number'],
      response: 'Get in touch with Zelt:\n• Call/WhatsApp: +254 701 884 358\n• Alternative: +254 702 316 628 | +254 724 234 588\n• Email: zeltmanufactures@gmail.com\n• Website: zeltsolarandelectricals.co.ke\n• Facebook: ZeltRenewableEnergy\nWe are available Monday–Saturday, 8AM–6PM and respond to emails within 2–4 hours.'
    },
    {
      keywords: ['warranty', 'guarantee', 'return', 'quality', 'certified', 'kebs'],
      response: 'All Zelt products come with manufacturer warranties. Our LiFePO4 backup systems carry a 2-year warranty. Our electrical cables are 100% copper and fully KEBS-compliant (Kenya Bureau of Standards), ensuring safety and performance. We partner only with certified brands and provide after-sales support for all products.'
    },
    {
      keywords: ['cctv', 'camera', 'security', 'monitor', 'surveillance', 'remote', 'wifi'],
      response: 'The Zelt CCTV Solar Camera Floodlight (KES 8,000) is a powerful 2-in-1 security solution:\n• 1080P Full HD video recording\n• Enhanced night vision\n• Motion detection & instant alerts\n• WiFi connected — app control on Android & iOS\n• Two-way audio communication\n• Solar powered with LiFePO4 battery\n• Real-time remote monitoring from anywhere\nPerfect for homeowners who travel or need to monitor their property remotely.'
    },
    {
      keywords: ['panel', 'solar panel', 'monocrystalline', 'pv'],
      response: 'Zelt stocks high-efficiency monocrystalline solar panels up to 350W (KES 10,000 for 350W). Monocrystalline panels offer superior efficiency — especially in Nairobi\'s climate — and perform well even in partial shade. They pair perfectly with our LiFePO4 batteries and inverters for a complete off-grid or hybrid home system. Want guidance on the right panel size for your needs?'
    },
    {
      keywords: ['ai', 'artificial intelligence', 'smart', 'technology', 'digital'],
      response: 'Zelt utilizes AI systems powered by MOJAK PRIME AI LIMITED (mojakprimeai@gmail.com). AI enables us to: (1) Provide instant product recommendations based on your power requirements, (2) Calculate exact solar savings projections, (3) Offer 24/7 client advisory chatbots, and (4) Optimize off-grid energy setups.'
    },
    {
      keywords: ['mojak', 'mojak prime', 'developer', 'who built', 'who made', 'creator', 'developed by', 'powered by'],
      response: 'This website and AI Advisor platform are powered and developed by MOJAK PRIME AI LIMITED.\n• Email: mojakprimeai@gmail.com\nMOJAK PRIME AI LIMITED specializes in cutting-edge web applications, conversational AI agents, and intelligent digital enterprise solutions.'
    }
  ];

  const defaultResponses = [
    'Thank you for your question. I can help with information about our solar products, pricing, installation services, and energy savings. Could you tell me more about what you need — a home backup system, security lighting, or something else?',
    'That\'s a great question! Our team specializes in solar energy solutions for homes and businesses. For specific queries, you can also reach us directly at +254 701 884 358 or send an email to zeltmanufactures@gmail.com.',
    'I want to make sure I give you the most accurate information. Could you clarify what you are looking for? For example: solar floodlights, backup power systems, street lights, or electrical supplies?'
  ];
  let defaultIndex = 0;

  function getAIResponse (query) {
    const q = query.toLowerCase();
    for (const entry of knowledgeBase) {
      if (entry.keywords.some(kw => q.includes(kw))) {
        return entry.response;
      }
    }
    const resp = defaultResponses[defaultIndex % defaultResponses.length];
    defaultIndex++;
    return resp;
  }

  function appendMessage (text, sender) {
    const wrapper = document.createElement('div');
    wrapper.className = `chat-msg chat-msg--${sender}`;
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    // Render newlines as line breaks
    bubble.innerHTML = text.replace(/\n/g, '<br/>');
    wrapper.appendChild(bubble);
    chatMessages.insertBefore(wrapper, quickReplies);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function showTypingIndicator () {
    const wrap = document.createElement('div');
    wrap.className = 'chat-msg chat-msg--bot chat-typing';
    wrap.id = 'typingIndicator';
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
    wrap.appendChild(bubble);
    chatMessages.insertBefore(wrap, quickReplies);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function removeTypingIndicator () {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.remove();
  }

  function sendUserMessage (text) {
    if (!text.trim()) return;
    appendMessage(text, 'user');
    chatInput.value = '';

    // Hide quick replies after first interaction
    if (quickReplies) quickReplies.style.display = 'none';

    showTypingIndicator();
    const delay = 900 + Math.random() * 700;
    setTimeout(() => {
      removeTypingIndicator();
      const response = getAIResponse(text);
      appendMessage(response, 'bot');
    }, delay);
  }

  chatSend.addEventListener('click', () => sendUserMessage(chatInput.value));
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendUserMessage(chatInput.value);
  });

  // Quick reply buttons
  document.querySelectorAll('.quick-reply').forEach(btn => {
    btn.addEventListener('click', () => sendUserMessage(btn.dataset.msg));
  });

  /* -------------------------------------------------------
     CONTACT FORM — client-side simulation
  ------------------------------------------------------- */
  const contactForm  = document.getElementById('contactForm');
  const submitBtn    = document.getElementById('submitBtn');
  const submitText   = document.getElementById('submitText');
  const submitSpinner = document.getElementById('submitSpinner');
  const formSuccess  = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('fullName').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('email').value.trim();

      if (!name || !phone || !email) {
        // Simple validation feedback
        [document.getElementById('fullName'), document.getElementById('phone'), document.getElementById('email')]
          .forEach(field => {
            if (!field.value.trim()) {
              field.style.borderColor = '#ef4444';
              setTimeout(() => field.style.borderColor = '', 2000);
            }
          });
        return;
      }

      // Simulate form submission
      submitBtn.disabled = true;
      submitText.textContent = 'Sending...';
      submitSpinner.classList.remove('hidden');

      setTimeout(() => {
        submitBtn.disabled = false;
        submitText.textContent = 'Send Inquiry';
        submitSpinner.classList.add('hidden');
        formSuccess.classList.remove('hidden');
        contactForm.reset();
        setTimeout(() => formSuccess.classList.add('hidden'), 6000);
      }, 1800);
    });
  }

  /* -------------------------------------------------------
     SMOOTH SCROLL for anchor links
  ------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });

        // If clicking the AI button or navigating to AI, focus the chat input
        if (targetId === '#ai-section' && chatInput) {
          setTimeout(() => {
            chatInput.focus();
            chatInput.parentElement.style.borderColor = 'rgba(61,155,74,0.6)';
            setTimeout(() => { chatInput.parentElement.style.borderColor = ''; }, 1500);
          }, 600);
        }
      }
    });
  });

  /* -------------------------------------------------------
     NUMBER COUNTER ANIMATION for hero stats
  ------------------------------------------------------- */
  function animateCounter (el, target, suffix, duration) {
    const start = Date.now();
    const update = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(ease * target);
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target.toLocaleString() + suffix;
    };
    requestAnimationFrame(update);
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statValues = document.querySelectorAll('.stat-value');
        statValues.forEach(el => {
          const text = el.textContent;
          if (text.includes('3,600')) animateCounter(el, 3600, '+', 1500);
          else if (text.includes('5.0')) {
            el.textContent = '5.0';
          } else if (text.includes('100%')) {
            el.textContent = '100%';
          }
        });
        statsObserver.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) statsObserver.observe(heroStats);

})();
