document.addEventListener("DOMContentLoaded", function() {
  // Fonction pour la taille
  document.querySelectorAll('.gh-size').forEach(el => {
    const repo = el.getAttribute('data-repo');
    const path = el.getAttribute('data-path');
    fetch(`https://api.github.com/repos/${repo}/contents/${path}`)
      .then(response => response.json())
      .then(data => {
        if (data.size) {
          const sizeMB = (data.size / (1024 * 1024)).toFixed(2);
          el.innerText = `${sizeMB} Mo`;
        }
      })
      .catch(() => el.innerText = "n/a");
  });

  // Fonction pour la date
  document.querySelectorAll('.gh-date').forEach(el => {
    const repo = el.getAttribute('data-repo');
    const path = el.getAttribute('data-path');
    fetch(`https://api.github.com/repos/${repo}/commits?path=${path}&page=1&per_page=1`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const date = new Date(data[0].commit.committer.date);
          el.innerText = date.toLocaleDateString('fr-CH');
        }
      })
      .catch(() => el.innerText = "n/a");
  });
});
