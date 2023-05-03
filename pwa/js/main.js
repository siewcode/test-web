// Fix Safari 100vh issue
function setViewportHeight() {
  const doc = document.documentElement
  const vh = `${window.innerHeight}px`
  doc.style.setProperty('--viewport-height', vh)
}

function generateSampleText(parentEl, n) {
  let content = ''
  for (let i=0; i<n; i++) {
    content += `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.
    </p>
    `
  }
  parentEl.innerHTML = content
  console.log(`Generated ${n} sample text`)
}

// PWA service worker
function installServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./sw.js')
      .then(() => console.log('Service worker registered'))
  }
}

// Init script
function init() {
  // Fix Safari 100vh issue
  window.addEventListener('resize', setViewportHeight)
  setViewportHeight()

  // Generate sample text for demo
  const loremContainer = document.getElementById('lorem')
  if (loremContainer) {
    generateSampleText(lorem, 40)
  } else {
    console.log('lorem id not found')
  }
}

window.addEventListener('load', init)