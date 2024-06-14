document.addEventListener('DOMContentLoaded', function() {
    const lines = [
        'Currently an SDET at 7EDGE.',
        'web developer, designer',
        'android app developer',
        'designer'
    ];

    const typingTextElement = document.getElementById('typing-text');
    let lineIndex = 0;
    let isTyping = true;

    function typeLine(line, callback) {
        let charIndex = 0;
        const typingInterval = setInterval(() => {
            if (charIndex < line.length) {
                typingTextElement.textContent += line[charIndex];
                charIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(callback, 2000); // Pause before removing
            }
        }, 100);
    }

    function removeLine(callback) {
        const removingInterval = setInterval(() => {
            if (typingTextElement.textContent.length > 0) {
                typingTextElement.textContent = typingTextElement.textContent.slice(0, -1);
            } else {
                clearInterval(removingInterval);
                setTimeout(callback, 500); // Pause before typing next line
            }
        }, 50);
    }

    function startTypingEffect() {
        typeLine(lines[lineIndex], () => {
            removeLine(() => {
                lineIndex = (lineIndex + 1) % lines.length;
                startTypingEffect();
            });
        });
    }

    startTypingEffect();
});

document.addEventListener('DOMContentLoaded', function() {
    // List of projects
    const projects = [
        { id: 'postal_info', name: 'Postal Info' },
        { id: 'firewise', name: 'FireWise Fire Detection' },
        { id: 'pacman', name: 'Pacman Game using python' },
        { id: 'mindcare', name: 'MindCare' }
    ];

    // Get references to elements
    const searchInput = document.querySelector('.search__bar');
    const searchForm = document.getElementById('event-search-form');
    const searchResults = document.createElement('ul');
    searchResults.classList.add('search-results');
    searchForm.appendChild(searchResults);

    // Handle input event
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        searchResults.innerHTML = ''; // Clear previous results

        if (query.length > 0) {
            const filteredProjects = projects.filter(project => project.name.toLowerCase().includes(query));

            if (filteredProjects.length > 0) {
                searchResults.style.display = 'block';
                filteredProjects.forEach(project => {
                    const li = document.createElement('li');
                    li.textContent = project.name;
                    li.addEventListener('click', () => {
                        window.location.hash = `#${project.id}`;
                        searchResults.style.display = 'none';
                    });
                    searchResults.appendChild(li);
                });
            } else {
                searchResults.style.display = 'none';
            }
        } else {
            searchResults.style.display = 'none';
        }
    });

    // Hide results when clicking outside the search bar or results
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
});


// document.addEventListener('DOMContentLoaded', function() {
//     const projects = [
//         { id: 'postal_info', name: 'Postal Info' },
//         { id: 'firewise', name: 'FireWise Fire Detection' },
//         { id: 'pacman', name: 'Pacman Game using python' },
//         { id: 'mindcare', name: 'MindCare' }
//     ];

//     const searchInput = document.querySelector('.search__bar');
//     const searchResults = document.getElementById('search-results');

//     searchInput.addEventListener('input', function() {
//         const query = this.value.toLowerCase();
//         searchResults.innerHTML = '';
//         if (query.length > 0) {
//             const filteredProjects = projects.filter(project => project.name.toLowerCase().includes(query));
//             searchResults.style.display = filteredProjects.length ? 'block' : 'none';
//             filteredProjects.forEach(project => {
//                 const li = document.createElement('li');
//                 li.textContent = project.name;
//                 li.addEventListener('click', () => {
//                     window.location.hash = `#${project.id}`;
//                     searchResults.style.display = 'none';
//                 });
//                 searchResults.appendChild(li);
//             });
//         } else {
//             searchResults.style.display = 'none';
//         }
//     });

//     document.addEventListener('click', function(e) {
//         if (!searchInput.contains(e.target)) {
//             searchResults.style.display = 'none';
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.dropbtn').addEventListener('click', function() {
        document.querySelector('.dropdown-content').classList.toggle('show');
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(function(dropdown) {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    });
});
