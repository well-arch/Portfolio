try {
  if (localStorage.getItem("theme") === "light") {
    document.documentElement.dataset.theme = "light";
  }
} catch {
  // Stockage indisponible : le thème sombre par défaut s'applique.
}
