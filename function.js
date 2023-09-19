// Track scroll depth
function trackScrollDepth() {
    var scrollPercentages = [25, 50, 75, 100]; // Customize the scroll percentages you want to track
  
    // Track scroll depth when the page is scrolled
    window.addEventListener('scroll', function() {
      var scrollDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
  
      if (scrollPercentages.includes(scrollDepth)) {
        gtag('event', 'scroll_depth', {
          'event_category': 'Scroll Depth',
          'event_label': scrollDepth + '%',
          'value': scrollDepth
        });
      }
    });
  }
  
  // Call the function to track scroll depth
  trackScrollDepth();