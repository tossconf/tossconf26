// Navbar Toggle Functionality
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close nav on link click
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close nav if clicking outside the menu
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-container')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  // Intersection Observer for Animation
  const sections = document.querySelectorAll('section');
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  // Schedule Tab Switching
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.schedule-day').forEach(day => day.classList.remove('active'));

      this.classList.add('active');
      const dayId = this.getAttribute('data-day');
      document.querySelector(`.${dayId}`).classList.add('active');
    });
  });

  // Timeline Day Switching
  const dayBtns = document.querySelectorAll('.day-btn');
  const timelines = document.querySelectorAll('.timeline');

  dayBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dayBtns.forEach(b => b.classList.remove('active'));
      timelines.forEach(timeline => timeline.classList.remove('active'));

      btn.classList.add('active');
      const day = btn.getAttribute('data-day');
      document.querySelector(`.timeline.${day}`).classList.add('active');
    });
  });

  // Timeline Popup
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach(item => {
    item.addEventListener('click', () => {
      const title = item.getAttribute('data-title');
      const time = item.querySelector('.time')?.textContent || '';
      const description = item.getAttribute('data-description');
      const imageSrc = item.getAttribute('data-image');

      const popup = document.querySelector('.popup');
      if (popup) {
        popup.querySelector('#popup-title').textContent = title;
        popup.querySelector('#popup-time').textContent = time;
        popup.querySelector('#popup-description').textContent = description;
        popup.querySelector('#popup-image').src = imageSrc;
        popup.classList.add('show');
      }
    });
  });

  // Close Popup
  document.addEventListener('click', (e) => {
    if (
      e.target.classList.contains('popup') ||
      e.target.classList.contains('popup-close')
    ) {
      document.querySelector('.popup')?.classList.remove('show');
    }
  });

  // Talks Track Switcher
  const trackTabs = document.querySelectorAll('.track-tab');

  if (trackTabs) {
    trackTabs.forEach(tab => {
      tab.addEventListener('click', function () {
        // Remove active class from all tabs
        trackTabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        this.classList.add('active');
        const selectedTrack = this.getAttribute('data-track');
        // Update all schedule grids
        document.querySelectorAll('.schedule-grid').forEach(grid => {
          grid.setAttribute('data-active-track', selectedTrack);
        });
      });
    });
  }



  const eventDetails = {
    keynote1: {
      image: "./images/schedule/scikit.png",
      title: "Scikit-Image பயன்படுத்தி படிமச் செயலாக்கம் ",
      speaker: "செந்தில்குமார்",
      time: "9:00 AM - 10:00 AM",
      location: "Main Auditorium",

      description: "இந்த இணைய உரையில், செந்தில்குமார் அவர்கள் Scikit-Image நூலகத்தின் மூலம் படிமங்களை எளிமையாகவும் திறமையாகவும் எவ்வாறு செயலாக்கலாம் என்பதைக் கற்பிப்பார். இது படிம வடிவமைப்பு, அம்ச சோதனை மற்றும் கணினிக் காட்சி பயில்வோருக்கான ஒரு சிறந்த வாய்ப்பாகும்."

    },


    workshop1: {
      image: "./images/schedule/inkscape.jpeg",
      title: "Inkscape மூலம் வடிவமைப்புகளை உருவாக்குதல் :ஆரம்பநிலைக்கு எளிதான வழிகாட்டி",
      speaker: "பரமேஷ்வர் அருணாசலம்",
      time: "10:30 AM - 12:00 PM",
      location: "Workshop Room A",
      description: "இந்த பணிமனைச் செய்முறைத் தொடரில், Inkscape மென்பொருள் பயன்படுத்தி எளிய மற்றும் ஈர்க்கக்கூடிய வடிவமைப்புகளை உருவாக்குவது கற்றுக்கொள்ளலாம். இது ஆரம்பநிலையர்களுக்கான சிறந்த வடிவமைப்பு பயிற்சி ஆகும்."
    },



    panel1: {
      image: "./images/schedule/ai_future.jpeg",
      title: "செயற்கை நுண்ணறிவுக் காலத்தில் கட்டற்ற மென்பொருட்களின் பங்கும் பயனும்",
      speaker: "மயூரன்",
      time: "1:00 PM - 2:30 PM",
      location: "Conference Hall B",
      description: "இந்த கலந்துரையாடலில், செயற்கை நுண்ணறிவின் வளர்ச்சியுடன் கட்டற்ற மென்பொருட்கள் எவ்வாறு முக்கிய பங்கு வகிக்கின்றன என்பதையும், அவற்றின் நன்மைகள் என்ன என்பதையும் விவாதிக்கப்படும். "
    },




    networking1: {
      image: "./images/schedule/golang.png",
      title: "Golang பற்றிய அறிமுகம்",
      speaker: "மோகன் ராமன்",
      time: "3:30 PM - 4:30 PM",
      location: "Networking Lounge",
      description: "இந்த நிகழ்வில், Golang மென்பொருள் மொழியின் அடிப்படை அம்சங்களை மற்றும் அதன் செயல்திறனையும் பயனாளர்களுக்காக எளிமையாக அறிமுகப்படுத்தப்படும். செயல்திறனும் நம்பகத்தன்மையும் தேடும் டெவலப்பர்களுக்கான சிறந்த தொடக்கவழிகாட்டி."

    },






    closing1: {
      image: "./images/schedule/games.jpeg",
      title: "லினக்ஸ் Games: ஒரு அறிமுகம உரை",
      speaker: "கலைஅரசன்",
      time: "5:00 PM - 5:30 PM",
      location: "Main Auditorium",
      description: "இந்த உரையில், லினக்ஸ் தளத்தில் விளையாட்டுகளை இயக்குவதற்கான விருப்பங்கள், சாதனைகள் மற்றும் அண்மைய முன்னேற்றங்கள் பற்றிய எளிய mutta சுவாரசியமான பார்வை வழங்கப்படும்."

    },




    keynote2: {
      image: "./images/schedule/ai_linux.jpeg",
      title: "செயற்கை நுண்ணறிவு பற்றிய சுருக்கமான அறிமுகம்",
      speaker: "ராஜவசந்தன்",
      time: "9:00 AM - 10:00 AM",
      location: "Main Auditorium",
      description: "இந்த தொடக்க உரையில், செயற்கை நுண்ணறிவு என்ன, அது எவ்வாறு செயல்படுகிறது மற்றும் அதன் பயன்பாடுகள் எதென்று எளிமையாக அறிமுகப்படுத்தப்படும். தொழில்நுட்ப உலகை புரிந்துகொள்ள விரும்புபவர்களுக்கு ஒரு சிறந்த ஆரம்பம்."

    },




    demo1: {
      image: "./images/schedule/docker.png",
      title: "Docker: புதியவர்களுக்கான எளிய அறிமுகம் மற்றும் பயன்பாட்டு விளக்கம்",
      speaker: "சாகில்",
      time: "10:30 AM - 12:00 PM",
      location: "Innovation Showcase Area",
      description: "இந்த அமர்வில், தொகுப்பு மற்றும் கொண்டெய்னர் மாடலில் பயன்படும் Docker குறித்த அடிப்படைக் கருத்துகள் மற்றும் நடைமுறை பயன்பாடுகள் தெளிவாக விளக்கப்படும். புதியவர்களுக்கு இது ஒரு நடைமுறை வழிகாட்டியாக அமையும்."

    },



    workshop2: {
      image: "./images/schedule/fastapi.png",
      title: "FastAPI - ஒரு அறிமுகம உரை்",
      speaker: "அதிபன்",
      time: "1:00 PM - 2:30 PM",
      location: "Workshop Room A",
      description: "இந்த அமர்வில், மேற்படிநிலை வலை சேவைகளை விரைவாக உருவாக்க உதவும் FastAPI பற்றிய அடிப்படை விளக்கங்களும், அதன் செயல்திறன் மற்றும் எளிதான நடைமுறைகளும் அறிமுகப்படுத்தப்படும். Python டெவலப்பர்களுக்கான ஒரு விரைவான தொடக்கவழிகாட்டி."

    },



    awards: {
      image: "./images/schedule/ml_scikit.jpeg",
      title: "Scikit Learn மூலம் கற்கும் கருவிகள் உருவாக்கம் - ஒரு அறிமுகம உரை",
      speaker: "பிரவீன் ஆர்",
      time: "3:30 PM - 4:30 PM",
      location: "Main Auditorium",
      description: "இந்த உரையில், இயந்திர கற்றலை (Machine Learning) Scikit Learn நூலகம் மூலம் எளிமையாக புரிந்து கொண்டு, கற்றல் மாடல்கள் உருவாக்கும் முறை பற்றிய அறிமுகம் வழங்கப்படும். ஆரம்ப நிலை ஆர்வலர்களுக்கு ஏற்ற தொடக்கமாக அமையும்."


    },



    closing2: {
      image: "./images/schedule/lambda.png",
      title: "லேம்டா (lambda functions) - ஓர் அறிமுகம்",
      speaker: "பிரித்திவிராஜ்",
      time: "5:00 PM - 6:00 PM",
      location: "Main Auditorium",
      description: "இந்த உரையில், Python இல் உள்ள லேம்டா செயல்பாடுகள் பற்றிய அடிப்படைகளை, அவை எப்போது மற்றும் எவ்வாறு பயன்படுத்தப்படுகின்றன என்பதை எளிதாக விளக்கும் தொடக்கவழிகாட்டி வழங்கப்படும். குறும்பணிகளை எழுத ஆர்வமுள்ளவர்களுக்கு இது பயனளிக்கும்."

    }



  };

  function switchDay(dayId, button) {
    // Hide all day contents
    document.querySelectorAll('.schedule-content').forEach(content => {
      content.style.display = 'none';
    });

    // Show selected day
    document.getElementById(dayId).style.display = 'block';

    // Update active tab
    document.querySelectorAll('.day-tab').forEach(tab => {
      tab.classList.remove('active');
    });
    button.classList.add('active');
  }

  function openModal(eventId) {
    const event = eventDetails[eventId];
    if (!event) return;

    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
                <div class="speaker-photo">
                    <img src= ${event.image} alt="Description of image">
              
                </div>
                <div class="event-details">
                    <h3>${event.title}</h3>
                    <div class="event-meta">
                        <p><strong>Speaker:</strong> ${event.speaker}</p>
                        <p><strong>Time:</strong> ${event.time}</p>
                        <p><strong>Location:</strong> ${event.location}</p>
                    </div>
                    <div class="event-description">
                        <h4>About this Session:</h4>
                        <p>${event.description}</p>
                    </div>
                </div>
            `;

    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(event) {
    if (event && event.target !== event.currentTarget) return;

    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  // Close modal with Escape key
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

  // Talk Description Mapping Database
  const talkDescriptions = {
    "workshop-otel": {
      title: "Getting Started with OpenTelemetry: Instrumenting an E‑commerce Application with SigNoz",
      speaker: "Vwake7",
      time: "10:00 AM - 12:00 PM",
      track: "Track 1 - Workshop",
      trackClass: "track-1",
      description: "Learn how to instrument a real-world e-commerce application using OpenTelemetry (OTel) to gain deep observability into its performance. This hands-on workshop covers manual and automatic instrumentation, collecting metrics and traces, and visualizing them in SigNoz to debug bottlenecks in real time.",
      prereq: "https://forums.tamillinuxcommunity.org/t/tossconf26-workshop/3315/7"
    },
    "workshop-ai-selfhost": {
      title: " Contributing to Frappe Framework",
      speaker: "Bowrna Prabhakaran",
      time: "10:00 AM - 12:00 PM",
      track: "Track 2 - Workshop",
      trackClass: "track-2",
      description: "Frappe Framework is a full-stack open-source web development framework to build business apps quickly. The primary aim of this workshop on the Frappe Framework is to help participants get started contributing to the project.",
      prereq: "https://forums.tamillinuxcommunity.org/t/tossconf26-workshop/3315/8"
    },
    "workshop-craft": {
      title: "The Art of Crafting Software",
      speaker: "Tamizhvendan S",
      time: "01:00 PM - 03:00 PM",
      track: "Track 1 - Workshop",
      trackClass: "track-1",
      description: "A deep dive into software engineering best practices, writing clean and maintainable code, and adopting a craftsman's mindset. This session covers foundational software design principles, testing strategies, and refactoring patterns to help developers write code that stands the test of time.",
    },
    "workshop-nix": {
      title: "Adopting Nix from Day 1 through Nix Shells for Absolute Beginners",
      speaker: "Vivekanandan KS",
      time: "01:00 PM - 03:00 PM",
      track: "Track 2 - Workshop",
      trackClass: "track-2",
      description: "An absolute beginner's guide to Nix and Nix Shells. Learn how Nix can solve the 'it works on my machine' problem by providing reproducible, isolated developer environments. This workshop will walk you through writing your first nix-shell configuration to manage project dependencies effortlessly.",
      prereq: "https://forums.tamillinuxcommunity.org/t/tossconf26-workshop/3315/5"
    },
    "talk-rag": {
      title: "Chatbot development using RAG & Vector Database",
      speaker: "Anand Sundaramoorthy",
      time: "10:30 AM - 11:10 AM",
      track: "Track 1 (Hall A)",
      trackClass: "track-1",
      description: "This session introduces AI chatbot development using Retrieval-Augmented Generation (RAG) and Vector Databases. It covers how data is converted into embeddings, stored in vector databases like Upstash, and retrieved through LLMs to generate context-aware responses. The talk also explains why RAG is often preferred over fine-tuning due to its scalability, lower cost, and easier knowledge updates. This is an introductory session focused on understanding the workflow and real-world possibilities of modern AI chatbots."
    },
    "talk-open-data": {
      title: "From Raw Maps to Real Impact: Building with Open Data in India",
      speaker: "Keerthana M G",
      time: "10:30 AM - 11:10 AM",
      track: "Track 2 (Hall B)",
      trackClass: "track-2",
      description: "Open data is often seen as a silver bullet for solving real-world problems. In reality, working with open datasets in India is far from straightforward. In this talk, I’ll share my experience building solar and civic-tech applications using open data sources such as OpenStreetMap, weather datasets, and geospatial APIs and the unexpected challenges that come with them. Rather than presenting an idealised view, this talk focuses on the messy reality of open data and how developers can still build meaningful, impactful solutions despite it."
    },
    "talk-injee": {
      title: "Rapid front end web development with Injee",
      speaker: "Karthikeyan A K",
      time: "11:10 AM - 11:50 AM",
      track: "Track 1 (Hall A)",
      trackClass: "track-1",
      description: "I will be giving a small demo, and demonstrate, how Injee automatically creates a backend for you, as you develop front end. To keep things simple, I will use HTMX, rather than ReactJS."
    },
    "talk-valkey": {
      title: "Neer Vazhvu - Urban water intelligence for Indian cities",
      speaker: "Sundaresh Prasanna Chandran",
      time: "11:10 AM - 11:50 AM",
      track: "Track 2 (Hall B)",
      trackClass: "track-2",
      description: "An open-source platform that turns public water data into actionable intelligence for Indian cities. Live for Chennai, Madurai, and Bengaluru today, with more cities on the way. Tracks reservoir levels, groundwater health, river water quality, flood risk, sewerage infrastructure, and water body loss across Indian cities. Each city’s dashboard reflects what’s actually knowable for that city - so Chennai surfaces CMWSSB-fed days-of-water-left + 5-factor ward risk, Madurai surfaces a Vaigai allocation hero + 3-factor ward risk because its dams are irrigation-primary. Bengaluru surfaces a Cauvery-pumping hero (BWSSB lifts treated water 100 km from T.K. Halli, so reservoir storage is not the right runway metric), layered on the IISc 80-ward stress overlay, since all 6 Bangalore Urban CGWB blocks are overexploited."
    },
    "talk-k8s": {
      title: "A Guide to Kubernetes Infrastructure Spend Management",
      speaker: "Vignesh Saravanan",
      time: "11:50 AM - 12:30 PM",
      track: "Track 1 (Hall A)",
      trackClass: "track-1",
      description: "This session covers how open-source cost monitoring provides real-time visibility into Kubernetes workloads to prevent overspending. You will discover why cloud cost tracking is vital for FinOps and get a step-by-step guide to setting it up in your cluster."
    },
    "talk-freebsd": {
      title: "Beyond Linux: The Power of FreeBSD",
      speaker: "Shane Cardoz Maria",
      time: "11:50 AM - 12:30 PM",
      track: "Track 2 (Hall B)",
      trackClass: "track-2",
      description: "Most developers know Linux, but FreeBSD offers a different approach to operating system design. This talk explores what makes FreeBSD unique, how it powers critical infrastructure, and why understanding it can broaden your perspective on systems engineering."
    },
    "talk-kafka": {
      title: "Building Event-Driven Systems with Kafka",
      speaker: "Yagapriyan Ganesh",
      time: "1:30 PM - 2:10 PM",
      track: "Track 1 (Hall A)",
      trackClass: "track-1",
      description: "Discover how Apache Kafka enables scalable, real-time communication between distributed applications using Event-Driven Architecture. This session covers Kafka fundamentals, key architectural concepts, and a live demonstration showcasing how event-driven systems work in practice."
    },
    "talk-prav": {
      title: "Prav: Creating a Community-Run Messaging Service",
      speaker: "S. Badri",
      time: "1:30 PM - 2:10 PM",
      track: "Track 2 (Hall B)",
      trackClass: "track-2",
      description: "Many people run Free Software on their computers but use online webapps and services which are proprietary. With more things moving online, it is important to use Free Software for online solutions as well. In this talk, I will share about our journey setting up Prav as a community-run messaging platform, where users (rather than only CEOs or developers) get to decide where the project goes. I will also talk about our community-driven volunteer and funding model."
    },
    "talk-ai-sec": {
      title: "Using AI Models OSS way with security in mind",
      speaker: "Ganesh Tiwari",
      time: "2:10 PM - 2:50 PM",
      track: "Track 1 (Hall A)",
      trackClass: "track-1",
      description: "AI models are the new to do thing and we should all try to utilise them as much as we can. In this chat, I am going to showcase the best and safest mechanism for running AI models in a sandboxed environment on your local machine using only OSS software. We are going to: Setup a VM using LimaCTL, Install OpenCode and startup a LLM on it."
    },
    "talk-containers": {
      title: "Replacing my Linux Desktop with Containers to play games",
      speaker: "Prasanth Baskar",
      time: "2:10 PM - 2:50 PM",
      track: "Track 2 (Hall B)",
      trackClass: "track-2",
      description: "I will show a demo using bootable containers, how my entire Linux desktop from the kernel to desktop applications, configs/dotfiles can be packaged, versioned, distributed, and updated/rollbacks as OCI artifacts using cloud-native workflows. This session we will find an answer for: What if setting up your laptop was as simple as pulling a container."
    },
    "talk-litert": {
      title: "The Last Mile of AI: Open Source On-Device Inference with LiteRT and the Edge Cloud Continuum",
      speaker: "Aakash Dhakshnamoorthy",
      time: "2:50 PM - 3:30 PM",
      track: "Track 1 (Hall A)",
      trackClass: "track-1",
      description: "Cloud native architectures solved distributed computing. Now frontier is the last mile: the device itself. LiteRT (formerly TensorFlow Lite, open sourced under Apache 2.0) is Google’s production-grade runtime powering on-device AI across 2.7 billion devices. In this talk, we’ll explore how LiteRT bridges the edge–cloud continuum: how models trained in the cloud (PyTorch, TensorFlow, JAX) are converted, quantized, and deployed to Android, iOS, web, and IoT with NPU acceleration no cloud call at every inference. We’ll cover the open source stack (LiteRT + LiteRT-LM + Gemma 4), real-world production patterns, and how cloud native teams can build privacy-first, offline-capable AI pipelines for the edge."
    },
    "talk-sql": {
      title: "SQL Components: Compile-Time Persistence for Modern Java Applications",
      speaker: "Hari Nikesh",
      time: "2:50 PM - 3:30 PM",
      track: "Track 2 (Hall B)",
      trackClass: "track-2",
      description: "Most Java developers rely on ORMs or SQL builders that introduce runtime complexity, boilerplate code, and hidden performance costs. This session explores SQL Components, a modern compile-time persistence framework that generates type-safe JDBC abstractions, embraces pure SQL, and enables developers to build high-performance Java applications with less code and greater control over database interactions. Live demonstrations will showcase code generation, type safety, and real-world database operations."
    },
    "talk-tokenizer": {
      title: "Ghilli Tokenizer: The Hidden Tax on Every Tamil Word You Type to an AI",
      speaker: "Manoj Mohan",
      time: "3:30 PM - 4:10 PM",
      track: "Track 1 (Hall A)",
      trackClass: "track-1",
      description: "There’s a hidden tax on every Tamil word you type to an AI — and most people don’t even know they’re paying it. It’s called tokenization, and it quietly makes Tamil eight times more expensive to process than English."
    },
    "talk-customandroid": {
      title: "Installing a Custom Android OS: From Bootloader to First Boot",
      speaker: "Prasanth",
      time: "3:30 PM - 4:10 PM",
      track: "Track 2 (Hall B)",
      trackClass: "track-2",
      description: "Many Android devices stop receiving software updates after just a few years, even though the hardware remains perfectly usable. This talk focuses on installing a Custom Android OS by covering Bootloader unlocking, Custom Recovery, and Custom ROMs, followed by a live demonstration of flashing a Custom ROM on a real Android device. Experience the benefits of newer Android versions, improved privacy, better performance, and extended device longevity."
    }
  };

  // Interactive Talk Modal Logic
  (function () {
    const talkCards = document.querySelectorAll('.talk-card');
    const talkModal = document.getElementById('talk-modal');
    const talkModalClose = document.querySelector('.talk-modal-close');

    if (talkCards && talkModal && talkModalClose) {
      const modalTrack = document.getElementById('talk-modal-track');
      const modalTitle = document.getElementById('talk-modal-title');
      const modalTime = document.getElementById('talk-modal-time');
      const modalSpeaker = document.getElementById('talk-modal-speaker');
      const modalDesc = document.getElementById('talk-modal-desc');
      const modalPreReq = document.getElementById('talk-modal-prereq');

      talkCards.forEach(card => {
        card.addEventListener('click', function () {
          const talkId = this.getAttribute('data-talk-id');
          const talk = talkDescriptions[talkId];
          console.log(talk);
          if (!talk) return;

          // Populate modal data
          modalTitle.textContent = talk.title;
          modalSpeaker.innerHTML = `👤 ${talk.speaker}`;
          modalTime.innerHTML = `🕒 ${talk.time}`;
          modalDesc.textContent = talk.description;
          if(talk.prereq){
            modalPreReq.setAttribute("href",talk.prereq);
            modalPreReq.style.display = 'inline';
            modalPreReq.textContent = "Pre-requistes"
          }
          
          // Track badge classes & text
          modalTrack.textContent = talk.track;
          modalTrack.className = 'talk-modal-track-badge'; // reset
          modalTrack.classList.add(talk.trackClass);

          // Show modal
          talkModal.classList.add('active');
          talkModal.setAttribute('aria-hidden', 'false');
          document.body.style.overflow = 'hidden';
        });
      });

      // Close modal function
      const closeTalkModal = function () {
        talkModal.classList.remove('active');
        talkModal.setAttribute('aria-hidden', 'true');
        modalPreReq.style.display = 'none';
        document.body.style.overflow = '';
      };

      // Close button click
      talkModalClose.addEventListener('click', closeTalkModal);

      // Click outside container to close
      talkModal.addEventListener('click', function (e) {
        if (e.target === talkModal) {
          closeTalkModal();
        }
      });

      // Close with Escape key
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && talkModal.classList.contains('active')) {
          closeTalkModal();
        }
      });
    }
  }());

});