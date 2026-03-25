const modelViewer = document.querySelector("model-viewer");

// Helper function to handle the switching logic cleanly
const switchZone = (activeName) => {
  // Accessing model nodes requires the model to be loaded
  if (!modelViewer.model) return;

  const names = ['100-Button', '110-Button', '111-Button'];
  
  names.forEach(name => {
    const node = modelViewer.model.nodes.find(n => n.name === name);
    if (node) {
      node.isVisible = (name === activeName);
    }
  });
};

// Event Listeners
btn100.addEventListener('click', () => switchZone('100-Button'));
btn110.addEventListener('click', () => switchZone('110-Button'));
btn111.addEventListener('click', () => switchZone('111-Button'));