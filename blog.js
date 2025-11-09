// Simple blog functionality - no dependencies on other scripts
document.addEventListener('DOMContentLoaded', function() {
    console.log('Blog page loaded');
    
    // Initialize blog
    initBlog();
});

function initBlog() {
    console.log('Initializing blog with', blogPosts.length, 'posts');
    
    // Get DOM elements
    const blogGrid = document.getElementById('blogGrid');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');
    const blogModal = document.getElementById('blogModal');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.querySelector('.close-btn');
    
    // Current language
    let currentLanguage = 'tr';
    
    // Load blog posts
    function loadBlogPosts(posts = blogPosts) {
        console.log('Loading', posts.length, 'blog posts');
        blogGrid.innerHTML = '';
        
        if (posts.length === 0) {
            blogGrid.innerHTML = `
                <div class="no-results">
                    <h3>${currentLanguage === 'tr' ? 'Sonuç bulunamadı' : 'No results found'}</h3>
                    <p>${currentLanguage === 'tr' ? 'Arama kriterlerinize uygun makale bulunamadı.' : 'No articles matching your search criteria were found.'}</p>
                </div>
            `;
            return;
        }

        posts.forEach(post => {
            const blogCard = document.createElement('div');
            blogCard.className = 'blog-card';
            blogCard.innerHTML = `
                <div class="blog-image">
                    <span>⚖️</span>
                </div>
                <div class="blog-content">
                    <div class="blog-category">${post.category[currentLanguage]}</div>
                    <div class="blog-date">${post.date}</div>
                    <h3 class="blog-title">${post.title[currentLanguage]}</h3>
                    <p class="blog-excerpt">${post.excerpt[currentLanguage]}</p>
                    <div class="blog-tags">
                        ${post.tags[currentLanguage].map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <div class="read-more" data-post-id="${post.id}">
                        ${currentLanguage === 'tr' ? 'Devamını oku' : 'Read more'}
                    </div>
                </div>
            `;
            blogGrid.appendChild(blogCard);
        });

        // Add event listeners to "Read more" buttons
        document.querySelectorAll('.read-more').forEach(button => {
            button.addEventListener('click', (e) => {
                const postId = e.target.getAttribute('data-post-id');
                openBlogPost(postId);
            });
        });
    }

    // Open blog post in modal
    function openBlogPost(postId) {
        const post = blogPosts.find(p => p.id == postId);
        if (!post) return;

        modalContent.innerHTML = `
            <div class="blog-post-content">
                <div class="blog-post-header">
                    <div class="blog-post-category">${post.category[currentLanguage]}</div>
                    <h2 class="blog-post-title">${post.title[currentLanguage]}</h2>
                    <div class="blog-post-meta">
                        <div class="blog-post-date">${post.date}</div>
                        <div class="blog-post-tags">
                            ${post.tags[currentLanguage].map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="blog-post-body">
                    ${post.content[currentLanguage]}
                </div>
            </div>
        `;

        blogModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Close modal
    function closeModal() {
        blogModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Search functionality
    function searchBlogPosts(query) {
        if (!query.trim()) {
            loadBlogPosts();
            searchResults.innerHTML = '';
            return;
        }

        const searchTerm = query.toLowerCase();
        const results = blogPosts.filter(post => {
            const title = post.title[currentLanguage].toLowerCase();
            const excerpt = post.excerpt[currentLanguage].toLowerCase();
            const content = post.content[currentLanguage].toLowerCase();
            const category = post.category[currentLanguage].toLowerCase();
            const tags = post.tags[currentLanguage].join(' ').toLowerCase();

            return title.includes(searchTerm) || 
                   excerpt.includes(searchTerm) || 
                   content.includes(searchTerm) ||
                   category.includes(searchTerm) ||
                   tags.includes(searchTerm);
        });

        if (results.length === 0) {
            searchResults.innerHTML = `<p>${currentLanguage === 'tr' ? `'${query}' için sonuç bulunamadı.` : `No results found for '${query}'.`}</p>`;
        } else {
            searchResults.innerHTML = `<p>${currentLanguage === 'tr' ? `${results.length} sonuç bulundu` : `${results.length} results found`}</p>`;
        }
        
        loadBlogPosts(results);
    }

    // Language switching
    function switchLanguage(lang) {
        currentLanguage = lang;
        
        // Update language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Update page title
        const title = document.querySelector('title');
        const newTitle = title.getAttribute(`data-${lang}`);
        if (newTitle) title.textContent = newTitle;
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update navigation and other text
        document.querySelectorAll('[data-tr]').forEach(element => {
            const translation = element.getAttribute(`data-${lang}`);
            if (translation) element.textContent = translation;
        });
        
        // Update placeholders
        document.querySelectorAll('[data-tr-placeholder]').forEach(input => {
            const placeholder = input.getAttribute(`data-${lang}-placeholder`);
            if (placeholder) input.placeholder = placeholder;
        });
        
        // Reload blog posts with new language
        loadBlogPosts();
    }

    // Event listeners
    searchButton.addEventListener('click', () => {
        searchBlogPosts(searchInput.value);
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBlogPosts(searchInput.value);
        }
    });

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === blogModal) {
            closeModal();
        }
    });

    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.getAttribute('data-lang');
            if (selectedLang !== currentLanguage) {
                switchLanguage(selectedLang);
            }
        });
    });

    // Initial load
    loadBlogPosts();
    console.log('Blog initialization complete');
}
