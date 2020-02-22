chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ conversion: 'quantity' }, () => {
    console.log('storage.conversion initialised to "quantity"');
  });
});
