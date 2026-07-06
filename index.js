/* ==========================================================================
   GS Dog Kannel JavaScript Logic
   Includes interactive breed filtering, consultation modal flow, 
   header scroll transformation, and WhatsApp integration generators.
   ========================================================================== */

// 1. Breeds Database
const breedsData = [
    {
        id: "alaskan-malamute",
        name: "Alaskan Malamute",
        category: "working",
        description: "A large, powerful Arctic dog breed built for strength and endurance. Highly affectionate, loyal, and friendly.",
        priceRange: "₹50,000 - ₹80,000",
        lifespan: "10 - 14 Years",
        image: "assets/Alaskan Malamute.jpeg"
    },
    {
        id: "beagle",
        name: "Beagle",
        category: "companion",
        description: "Merry, sweet-natured scent hounds. Energetic explorers that bring laughter and positive vibes into any home environment.",
        priceRange: "₹18,000 - ₹30,000",
        lifespan: "12 - 15 Years",
        image: "assets/Beagle.jpeg"
    },
    {
        id: "black-pug",
        name: "Black Pug",
        category: "toy",
        description: "A gorgeous black variant of the classic Pug. Loyal, loving, and brings joy and fun to any household.",
        priceRange: "₹18,000 - ₹28,000",
        lifespan: "12 - 15 Years",
        image: "assets/Black Pug.jpeg"
    },
    {
        id: "boxer",
        name: "Boxer",
        category: "working",
        description: "Playful, energetic, and highly protective. Outstanding companions for active families requiring security surveillance.",
        priceRange: "₹22,000 - ₹35,000",
        lifespan: "10 - 12 Years",
        image: "assets/Boxer.jpeg"
    },
    {
        id: "cane-corso",
        name: "Cane Corso",
        category: "guard",
        description: "An ancient Italian mastiff breed. Peerless protectors, powerful stature, yet gentle and loving with their immediate families.",
        priceRange: "₹60,000 - ₹95,000",
        lifespan: "10 - 12 Years",
        image: "assets/Cane Corso.avif"
    },
    {
        id: "cocker-spaniel",
        name: "Cocker Spaniel",
        category: "companion",
        description: "Charming, gentle, and happy breed with beautiful silky ears. Highly trainable and eager family companion.",
        priceRange: "₹22,000 - ₹38,000",
        lifespan: "10 - 14 Years",
        image: "assets/Cocker spaniel.jpeg"
    },
    {
        id: "doberman-pinscher",
        name: "Doberman Pinscher",
        category: "guard",
        description: "Sleek, incredibly fast, and alert. The ultimate personal protection companion with unmatched responsiveness.",
        priceRange: "₹22,000 - ₹38,000",
        lifespan: "10 - 13 Years",
        image: "assets/Doberman.jpeg"
    },
    {
        id: "dogo-argentino",
        name: "Dogo Argentino",
        category: "guard",
        description: "Strong, athletic pack-hunting dog bred for big-game hunting. Extremely protective and fiercely loyal to their family.",
        priceRange: "₹50,000 - ₹85,000",
        lifespan: "10 - 12 Years",
        image: "assets/Dogo Argentino.jpeg"
    },
    {
        id: "english-mastiff",
        name: "English Mastiff",
        category: "guard",
        description: "Majestic, giant breed combining grandeur with good nature. Brave yet docile, making them superb guardians.",
        priceRange: "₹55,000 - ₹90,000",
        lifespan: "6 - 10 Years",
        image: "assets/English Mastiff.jpeg"
    },
    {
        id: "french-bulldog",
        name: "French Bulldog",
        category: "companion",
        description: "Compact, muscular companion dog with signature bat ears. Extremely affectionate, playful, and perfect for apartment living.",
        priceRange: "₹35,000 - ₹60,000",
        lifespan: "10 - 12 Years",
        image: "assets/French Bulldog.jpeg"
    },
    {
        id: "german-shepherd",
        name: "German Shepherd",
        category: "guard",
        description: "Known for their intelligence, courage, and guard pedigree. Excellent championship lineage with direct KCI registrations.",
        priceRange: "₹25,000 - ₹45,000",
        lifespan: "10 - 13 Years",
        image: "assets/German Shepherd.jpeg"
    },
    {
        id: "golden-retriever",
        name: "Golden Retriever",
        category: "companion",
        description: "Intelligent, friendly, and exceptionally eager to please. Beautiful long golden double-coats with soft temperaments.",
        priceRange: "₹25,000 - ₹45,000",
        lifespan: "10 - 12 Years",
        image: "assets/Golden Retriever.jpeg"
    },
    {
        id: "labrador-retriever",
        name: "Labrador Retriever",
        category: "companion",
        description: "The most popular family companion globally. Playful, loving, and extremely patient with children. Microchipped.",
        priceRange: "₹20,000 - ₹35,000",
        lifespan: "10 - 12 Years",
        image: "assets/Labrador.jpeg"
    },
    {
        id: "maltese",
        name: "Maltese",
        category: "toy",
        description: "Gentle, playful, and affectionate toy dog with a glamorous white coat. A classic lap dog with a lively personality.",
        priceRange: "₹25,000 - ₹45,000",
        lifespan: "12 - 15 Years",
        image: "assets/Maltese.jpeg"
    },
    {
        id: "maltipoo",
        name: "Maltipoo",
        category: "toy",
        description: "A popular crossbreed of Maltese and Toy Poodle. Active, affectionate, and low-shedding companion dog.",
        priceRange: "₹30,000 - ₹55,000",
        lifespan: "10 - 13 Years",
        image: "assets/Maltipoo.jpeg"
    },
    {
        id: "neapolitan-mastiff",
        name: "Neapolitan Mastiff",
        category: "guard",
        description: "An ancient guardian breed with a distinctive loose skin and wrinkled coat. Protective, imposing, and deeply loyal.",
        priceRange: "₹65,000 - ₹1,10,000",
        lifespan: "7 - 9 Years",
        image: "assets/Neapolitan Mastiff.jpeg"
    },
    {
        id: "poodle",
        name: "Poodle",
        category: "toy",
        description: "Extremely intelligent, elegant, and proud breed. Low-shedding curly coat, highly adaptable and active companion.",
        priceRange: "₹28,000 - ₹50,000",
        lifespan: "12 - 15 Years",
        image: "assets/Poodle.jpeg"
    },
    {
        id: "pug",
        name: "Pug",
        category: "toy",
        description: "Charming, mischievous, and loving. Adaptable companion with an expressive face, perfect for apartment living.",
        priceRange: "₹15,000 - ₹25,000",
        lifespan: "12 - 15 Years",
        image: "assets/Pug.jpeg"
    },
    {
        id: "rottweiler",
        name: "Rottweiler",
        category: "guard",
        description: "Robust, confident, and intensely loyal guardians. Championship bloodline import lineages with extreme bone density.",
        priceRange: "₹30,000 - ₹50,000",
        lifespan: "8 - 10 Years",
        image: "assets/Rottweiler.jpeg"
    },
    {
        id: "shih-tzu",
        name: "Shih Tzu",
        category: "toy",
        description: "Known as the lion dog. Affectionate, outgoing, with a beautiful long flowing coat. Loves to cuddle and play.",
        priceRange: "₹25,000 - ₹40,000",
        lifespan: "10 - 16 Years",
        image: "assets/Shih Tzu.jpeg"
    },
    {
        id: "husky",
        name: "Siberian Husky",
        category: "working",
        description: "Beautiful striking blue or bi-colored eyes. Playful, energetic working dogs with elegant wolf-like dense coat profiles.",
        priceRange: "₹35,000 - ₹55,000",
        lifespan: "12 - 15 Years",
        image: "assets/Siberian Husky.jpeg"
    },
    {
        id: "tibetan-mastiff",
        name: "Tibetan Mastiff",
        category: "guard",
        description: "An ancient, massive breed native to the Himalayas. Highly independent and protective with a thick, lion-like double coat.",
        priceRange: "₹80,000 - ₹1,50,000",
        lifespan: "10 - 14 Years",
        image: "assets/Tibetan Mastiff.jpeg"
    },
    {
        id: "toy-pomeranian",
        name: "Toy Pomeranian",
        category: "toy",
        description: "Tiny, fluffy, and highly intelligent toy dogs. Full of personality, active, and extremely loving house companions.",
        priceRange: "₹15,000 - ₹28,000",
        lifespan: "12 - 16 Years",
        image: "assets/Toy Pomeranian.jpeg"
    }
];

// 2. DOM Elements Selection
document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const navMenu = document.getElementById("navMenu");
    const mobileNavToggle = document.getElementById("mobileNavToggle");
    const filterTabsContainer = document.getElementById("filterTabs");
    const breedsGrid = document.getElementById("breedsGrid");
    const featuredBreedsGrid = document.getElementById("featuredBreedsGrid");
    
    // Modal Selectors
    const consultationModal = document.getElementById("consultationModal");
    const closeBtn = document.getElementById("modalCloseBtn");
    const consultationForm = document.getElementById("consultationForm");
    const bookConsultBtnTop = document.getElementById("btnBookConsultationTop");
    
    // Contact page specific form
    const contactPageForm = document.getElementById("contactPageForm");

    // Phone / WhatsApp target variables
    const kannelWhatsAppNumber = "919780051311";

    // 3. Scroll Header Effect
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                const isHomePage = window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/") || window.location.pathname === "";
                if (isHomePage && window.scrollY <= 50) {
                    header.classList.remove("scrolled");
                }
            }
        });
        
        // Initial header check
        const isHomePage = window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/") || window.location.pathname === "";
        if (!isHomePage) {
            header.classList.add("scrolled");
        } else if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    // 4. Mobile Menu Toggle
    if (mobileNavToggle && navMenu) {
        mobileNavToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            const icon = mobileNavToggle.querySelector("i");
            if (navMenu.classList.contains("open")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });
    }

    // Close mobile menu on clicking any navigation link
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navMenu) navMenu.classList.remove("open");
            if (mobileNavToggle) {
                const icon = mobileNavToggle.querySelector("i");
                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            }
        });
    });

    // Helper: Create Breed Card HTML
    function createBreedCardHTML(breed) {
        const whatsappMsg = `Hi GS Dog Kannel, I'm interested in booking a consultation for a ${breed.name} puppy. Please share lineage information and availability.`;
        const encodedMsg = encodeURIComponent(whatsappMsg);
        const whatsappLink = `https://wa.me/${kannelWhatsAppNumber}?text=${encodedMsg}`;
        const fallbackImage = `https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=400`;
        const imageSrc = breed.image;

        return `
            <div class="breed-image-wrapper">
                <img class="breed-image" src="${imageSrc}" alt="${breed.name} Puppy" onerror="this.onerror=null; this.src='${fallbackImage}';">
                <span class="breed-category">${breed.category}</span>
                <div class="breed-glass-overlay"></div>
            </div>
            <div class="breed-content">
                <h3 class="breed-name">${breed.name}</h3>
                <p class="breed-desc">${breed.description}</p>
            </div>
            <button class="btn btn-primary btn-full breed-card-btn book-consult-btn" data-breed="${breed.name}">
                Book Consultation
            </button>
        `;
    }

    // 5. Render Breed Cards System (For Breeds Page)
    function renderBreeds(filterCategory = "all") {
        if (!breedsGrid) return;
        breedsGrid.innerHTML = "";
        
        const searchInput = document.getElementById("breedSearchInput");
        const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";
        
        let filteredData = filterCategory === "all" 
            ? breedsData 
            : breedsData.filter(breed => breed.category === filterCategory);
            
        if (searchTerm) {
            filteredData = filteredData.filter(breed => 
                breed.name.toLowerCase().includes(searchTerm) || 
                breed.description.toLowerCase().includes(searchTerm)
            );
        }
            
        if (filteredData.length === 0) {
            breedsGrid.innerHTML = `<p class="no-breeds-msg">No breeds currently listed in this category. Contact us for custom inquiries.</p>`;
            return;
        }

        filteredData.forEach((breed, index) => {
            const breedCard = document.createElement("div");
            breedCard.className = "breed-card";
            breedCard.setAttribute("data-id", breed.id);
            breedCard.style.opacity = "0";
            breedCard.style.transform = "translateY(20px)";
            
            breedCard.innerHTML = createBreedCardHTML(breed);
            breedsGrid.appendChild(breedCard);

            // Staggered fade-in dynamic transition
            setTimeout(() => {
                breedCard.style.transition = "all 0.5s ease";
                breedCard.style.opacity = "1";
                breedCard.style.transform = "translateY(0)";
            }, index * 80);
        });
    }

    // 6. Render Featured Breeds (For Homepage)
    function renderFeaturedBreeds() {
        if (!featuredBreedsGrid) return;
        featuredBreedsGrid.innerHTML = "";
        
        // Select German Shepherd, Rottweiler, Golden Retriever, and Labrador Retriever
        const featuredList = breedsData.filter(breed => 
            breed.id === "german-shepherd" || breed.id === "rottweiler" || breed.id === "golden-retriever" || breed.id === "labrador-retriever"
        );

        featuredList.forEach((breed, index) => {
            const breedCard = document.createElement("div");
            breedCard.className = "breed-card";
            breedCard.setAttribute("data-id", breed.id);
            breedCard.style.opacity = "0";
            breedCard.style.transform = "translateY(20px)";
            
            breedCard.innerHTML = createBreedCardHTML(breed);
            featuredBreedsGrid.appendChild(breedCard);

            setTimeout(() => {
                breedCard.style.transition = "all 0.5s ease";
                breedCard.style.opacity = "1";
                breedCard.style.transform = "translateY(0)";
            }, index * 100);
        });
    }

    // Initial renders depending on present elements
    if (breedsGrid) {
        renderBreeds();
    }
    if (featuredBreedsGrid) {
        renderFeaturedBreeds();
    }

    // Attach Filter Tab Click Event (For Breeds Page)
    if (filterTabsContainer && breedsGrid) {
        const filterButtons = filterTabsContainer.querySelectorAll(".filter-btn");
        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                filterButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");
                
                const selectedFilter = button.getAttribute("data-filter");
                renderBreeds(selectedFilter);
            });
        });
        
        // Setup Search Input Listener
        const searchInput = document.getElementById("breedSearchInput");
        if (searchInput) {
            searchInput.addEventListener("input", () => {
                const activeBtn = document.querySelector(".filter-btn.active");
                const activeCategory = activeBtn ? activeBtn.getAttribute("data-filter") : "all";
                renderBreeds(activeCategory);
            });
        }
    }

    // 7. Consultation Modal Operations (Global)
    const openModal = (defaultBreed = "General Inquiry") => {
        if (!consultationModal) return;
        const selectElement = document.getElementById("selectedBreed");
        if (selectElement) {
            selectElement.value = defaultBreed;
        }
        consultationModal.classList.add("open");
        document.body.style.overflow = "hidden"; // Disable background scrolling
    };

    const closeModal = () => {
        if (!consultationModal) return;
        consultationModal.classList.remove("open");
        document.body.style.overflow = ""; // Re-enable background scrolling
        if (consultationForm) consultationForm.reset();
    };

    if (bookConsultBtnTop) {
        bookConsultBtnTop.addEventListener("click", () => openModal("General Inquiry"));
    }

    // Event delegation for dynamically generated "Book Consultation" buttons
    document.addEventListener("click", (e) => {
        const btn = e.target.closest(".book-consult-btn");
        if (btn) {
            e.preventDefault();
            const breedName = btn.getAttribute("data-breed");
            openModal(breedName || "General Inquiry");
        }
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    // Close modal on outside backdrop click
    window.addEventListener("click", (e) => {
        if (e.target === consultationModal) {
            closeModal();
        }
    });

    // Close modal on ESC press
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && consultationModal && consultationModal.classList.contains("open")) {
            closeModal();
        }
    });

    // 8. Consultation Form Submit WhatsApp Dispatcher
    if (consultationForm) {
        consultationForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const name = document.getElementById("clientName").value.trim();
            const phone = document.getElementById("clientPhone").value.trim();
            const email = document.getElementById("clientEmail").value.trim();
            const breed = document.getElementById("selectedBreed").value;

            const clientMsg = `Hi GS Dog Kannel,\n\nI want to book a kannel consultation:\n- *Name*: ${name}\n- *Phone*: ${phone}\n- *Email*: ${email}\n- *Interested Breed*: ${breed}\n\nPlease confirm availability. Thank you!`;
            const encodedClientMsg = encodeURIComponent(clientMsg);
            
            const submitBtn = consultationForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
            submitBtn.style.opacity = '0.8';

            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Redirecting...';
                submitBtn.style.backgroundColor = 'var(--clr-whatsapp)';
                
                setTimeout(() => {
                    const consultationUrl = `https://wa.me/${kannelWhatsAppNumber}?text=${encodedClientMsg}`;
                    window.open(consultationUrl, "_blank");
                    closeModal();
                    
                    // Reset
                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.style.opacity = '1';
                        submitBtn.style.backgroundColor = '';
                    }, 500);
                }, 800);
            }, 1000);
        });
    }

    // 9. Contact Page Form Submit WhatsApp Dispatcher
    if (contactPageForm) {
        contactPageForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const name = document.getElementById("contactName").value.trim();
            const phone = document.getElementById("contactPhone").value.trim();
            const email = document.getElementById("contactEmail").value.trim();
            const breed = document.getElementById("contactBreed").value;

            const clientMsg = `Hi GS Dog Kannel,\n\nI want to book a kannel consultation:\n- *Name*: ${name}\n- *Phone*: ${phone}\n- *Email*: ${email}\n- *Interested Breed*: ${breed}\n\nPlease confirm availability. Thank you!`;
            const encodedClientMsg = encodeURIComponent(clientMsg);
            
            const submitBtn = contactPageForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
            submitBtn.style.opacity = '0.8';
            
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Redirecting...';
                submitBtn.style.backgroundColor = 'var(--clr-whatsapp)';
                
                setTimeout(() => {
                    const consultationUrl = `https://wa.me/${kannelWhatsAppNumber}?text=${encodedClientMsg}`;
                    window.open(consultationUrl, "_blank");
                    contactPageForm.reset();
                    
                    // Reset
                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.style.opacity = '1';
                        submitBtn.style.backgroundColor = '';
                    }, 500);
                }, 800);
            }, 1000);
        });
    }

    // ==========================================================================
    // 10. Premium Animation Engine
    // ==========================================================================

    // 10a. Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('anim-visible');
                
                // Trigger counter if it or a child has data-counter attribute
                const counterElem = entry.target.hasAttribute('data-counter') ? entry.target : entry.target.querySelector('[data-counter]');
                if (counterElem) {
                    const targetText = counterElem.getAttribute('data-counter');
                    const targetNum = parseInt(targetText.replace(/[^0-9]/g, ''));
                    if (!isNaN(targetNum) && !counterElem.classList.contains('counted')) {
                        animateCounter(counterElem, targetNum, targetText.replace(/[0-9]/g, ''));
                        counterElem.classList.add('counted');
                    }
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach(el => {
        const animType = el.getAttribute('data-animate');
        el.classList.add('anim-hidden', animType);
        scrollObserver.observe(el);
    });

    // Number Counter Logic
    function animateCounter(element, target, suffix) {
        let current = 0;
        const duration = 2000;
        const stepTime = Math.max(10, Math.floor(duration / target));
        const increment = target / (duration / 10);
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.innerText = target + suffix;
                clearInterval(timer);
            } else {
                element.innerText = Math.floor(current) + suffix;
            }
        }, 10);
    }

    // 10b. Custom Cursor
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let isHovering = false;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Use requestAnimationFrame for smooth cursor trailing
    function renderCursor() {
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(${isHovering ? 1.5 : 1})`;
        requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Hover states for cursor
    const interactiveElements = document.querySelectorAll('a, button, input, select, .google-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            isHovering = true;
            cursor.classList.add('hovering');
        });
        el.addEventListener('mouseleave', () => {
            isHovering = false;
            cursor.classList.remove('hovering');
        });
    });

    // 10c. Scroll Progress Bar
    const progressContainer = document.createElement('div');
    progressContainer.classList.add('scroll-progress-container');
    const progressBar = document.createElement('div');
    progressBar.classList.add('scroll-progress-bar');
    progressContainer.appendChild(progressBar);
    document.body.appendChild(progressContainer);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    });

    // 10d. Parallax Hook
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        parallaxElements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax') || 0.1);
            el.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });

    // 10e. Button Ripple Effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = `${size}px`;
            
            btn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
});

// 9. Animated Paw Particles
function createPawParticles() {
    const container = document.createElement('div');
    container.id = 'paw-particles-container';
    document.body.appendChild(container);

    const numPaws = 15;
    for (let i = 0; i < numPaws; i++) {
        const paw = document.createElement('div');
        paw.className = 'paw-particle';
        
        // Random size between 40px and 100px
        const size = Math.random() * 60 + 40;
        paw.style.width = `${size}px`;
        paw.style.height = `${size}px`;
        
        // Random starting position
        paw.style.left = `${Math.random() * 100}vw`;
        paw.style.top = `${Math.random() * 100}vh`;
        
        // Random animation paths (up to 400px drift)
        const tx = (Math.random() - 0.5) * 600;
        const ty = (Math.random() - 0.5) * 600;
        const tr = (Math.random() - 0.5) * 180;
        paw.style.setProperty('--tx', `${tx}px`);
        paw.style.setProperty('--ty', `${ty}px`);
        paw.style.setProperty('--tr', `${tr}deg`);
        
        // Fast motion (2x motion requested: duration between 8s and 15s)
        const duration = Math.random() * 7 + 8;
        const delay = Math.random() * -20;
        
        paw.style.animation = `driftPaws ${duration}s infinite alternate ease-in-out ${delay}s`;
        
        container.appendChild(paw);
    }
}
document.addEventListener('DOMContentLoaded', createPawParticles);
