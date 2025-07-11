document.addEventListener("DOMContentLoaded", function () {
  const observer = new MutationObserver(() => {
    const flyout = document.querySelector('.rst-versions');
    if (flyout) {
      flyout.remove();  // Remove it once it appears
      observer.disconnect();  // Stop checking
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
