function filterCategory(category) {
    const contents = document.querySelectorAll('.category-content');
    contents.forEach(content => {
        if (content.getAttribute('data-category') === category) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
}
