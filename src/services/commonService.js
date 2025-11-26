document.addEventListener('click', (e) => {
  const linkButton = e.target.closest("button[role='link']");
  if (!linkButton) return;

  const href = linkButton.dataset.href;
  if (!href) return;

  window.location.href = href;
});
