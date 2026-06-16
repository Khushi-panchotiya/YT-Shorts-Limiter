// Function to find and hide the Shorts buttons in the sidebar
function hideShortsButtons() {
  // Selectors for desktop sidebar, mini sidebar, and mobile bottom nav
  const shortsSelectors = [
    'a[title="Shorts"]',
    'ytd-mini-guide-entry-renderer[aria-label="Shorts"]',
    'ytd-guide-entry-renderer:has(> a[title="Shorts"])'
  ];

  shortsSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.style.display = 'none'; // Force hide it
    });
  });
}

// Run initially
hideShortsButtons();

// Set up the MutationObserver to handle YouTube's dynamic SPA routing
const observer = new MutationObserver(() => {
  hideShortsButtons();
});

// Start observing the entire document for changes
observer.observe(document.body, { childList: true, subtree: true });
