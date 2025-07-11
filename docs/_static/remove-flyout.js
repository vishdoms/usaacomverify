(function() {
  const killFlyout = () => {
    const badge = document.querySelector('.rst-versions');
    if (badge) {
      badge.remove();
      console.log("✅ ReadTheDocs flyout removed");
    }
  };

  // MutationObserver watches the body for new elements
  const observer = new MutationObserver(killFlyout);
  observer.observe(document.body, { childList: true, subtree: true });

  // Also run once on load (just in case)
  document.addEventListener("DOMContentLoaded", killFlyout);
})();
