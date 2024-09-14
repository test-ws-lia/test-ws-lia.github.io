// blog.js
const blogEntries = [
    { title: "Titre de l'article 1", file: "entree_blog_1.html", date: "14 septembre 2024" },
    { title: "Titre de l'article 2", file: "entree_blog_2.html", date: "15 septembre 2024" },
    // Ajoutez d'autres entrées ici
];

function loadBlogEntries() {
    const blogEntriesDiv = document.getElementById('blog-entries');
    blogEntries.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.className = 'blog-entry';
        entryDiv.innerHTML = `
            <h3>${entry.title}</h3>
            <p>Publié le ${entry.date}</p>
            <a href="pages_blog/${entry.file}" class="read-more">Lire la suite</a>
        `;
        blogEntriesDiv.appendChild(entryDiv);
    });
}

document.addEventListener('DOMContentLoaded', loadBlogEntries);