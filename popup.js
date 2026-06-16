document.addEventListener('DOMContentLoaded', () => {

    const limitInput = document.getElementById('limitInput');
    const watchedCount = document.getElementById('watchedCount');
    const saveBtn = document.getElementById('saveBtn');
    const resetBtn = document.getElementById("resetBtn");

    const today = new Date().toDateString();

    chrome.storage.local.get(
        ['shortsLimit', 'shortsWatched', 'lastResetDate'],
        (data) => {

            if (data.lastResetDate !== today) {

                chrome.storage.local.set({
                    shortsWatched: 0,
                    lastResetDate: today
                });

                watchedCount.innerText = 0;

            } else {

                watchedCount.innerText =
                    data.shortsWatched || 0;
            }

            if (data.shortsLimit !== undefined) {
                limitInput.value = data.shortsLimit;
            }
        }
    );

    saveBtn.addEventListener('click', () => {

        const newLimit =
            parseInt(limitInput.value, 10);

        chrome.storage.local.set({
            shortsLimit: newLimit
        }, () => {

            saveBtn.innerText = "Saved!";

            setTimeout(() => {
                saveBtn.innerText = "Save Limit";
            }, 1500);
        });
    });

    resetBtn.addEventListener("click", () => {
        chrome.storage.local.set({
            shortsWatched: 0
        });

        watchedCount.innerText = 0;
    });
});