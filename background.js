// Initialize extension data
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({
        shortsLimit: 10,
        shortsWatched: 0,
        lastResetDate: new Date().toDateString()
    });
});

// Check if a new day has started
function resetCounterIfNeeded(callback) {
    chrome.storage.local.get(
        ['shortsWatched', 'lastResetDate'],
        (data) => {

            const today = new Date().toDateString();

            if (data.lastResetDate !== today) {
                chrome.storage.local.set({
                    shortsWatched: 0,
                    lastResetDate: today
                }, () => {
                    console.log("Daily Shorts counter reset.");
                    callback(0);
                });
            } else {
                callback(data.shortsWatched || 0);
            }
        }
    );
}

// Watch URL changes
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

    if (
        changeInfo.url &&
        changeInfo.url.includes("youtube.com/shorts/")
    ) {

        resetCounterIfNeeded((watchedCount) => {

            chrome.storage.local.get(
                ['shortsLimit'],
                (data) => {

                    const limit = data.shortsLimit || 10;

                    if (watchedCount >= limit) {

                        chrome.tabs.update(tabId, {
                            url: "https://www.youtube.com"
                        });

                        console.log(
                            "Daily Shorts limit reached."
                        );

                    } else {

                        chrome.storage.local.set({
                            shortsWatched: watchedCount + 1
                        });

                        console.log(
                            `Short watched: ${watchedCount + 1}/${limit}`
                        );
                    }
                }
            );
        });
    }
});
