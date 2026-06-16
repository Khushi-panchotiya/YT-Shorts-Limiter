# 🚫 Shorts Limiter

A lightweight Chrome Extension that helps users reduce YouTube Shorts consumption while preserving long-form video recommendations.

Instead of disabling YouTube watch history or blocking YouTube completely, Shorts Limiter allows users to set a daily Shorts limit and automatically restricts access once the limit is reached.

---

## 🎯 Problem

YouTube Shorts are designed for endless scrolling.

Many users want to:

* Keep YouTube recommendations
* Discover educational content
* Watch long-form videos

But still avoid spending hours scrolling through Shorts.

Disabling watch history removes Shorts from recommendations, but it also hurts content discovery.

Shorts Limiter solves this by targeting Shorts only.

---

## ✨ Features

### 📌 Hide Shorts Navigation

Removes Shorts entry points from YouTube's interface.

### 📊 Daily Usage Tracking

Tracks the number of Shorts watched throughout the day.

### ⚙️ Custom Daily Limit

Set your own daily limit:

* 5 Shorts/day
* 10 Shorts/day
* 20 Shorts/day
* Any custom value

### 🚫 Automatic Blocking

When the daily limit is reached:

* Shorts URLs are blocked
* Users are redirected to YouTube Home
* Additional Shorts cannot be accessed

### 🔄 Daily Reset

Usage counters automatically reset every day.

---

## 🛠️ Built With

* JavaScript
* Chrome Extensions Manifest V3
* Chrome Storage API
* Chrome Tabs API
* MutationObserver

---

## 📂 Project Structure

```text
YT-Shorts-Limiter/
│
├── manifest.json
├── background.js
├── content.js
├── popup.html
└── popup.js
```

### manifest.json

Defines extension metadata, permissions, and script registration.

### background.js

Responsible for:

* Daily limit enforcement
* URL monitoring
* Redirect logic
* Daily counter reset

### content.js

Runs inside YouTube pages and:

* Hides Shorts buttons
* Handles dynamic page updates
* Observes DOM changes

### popup.html

Extension user interface.

### popup.js

Handles:

* Saving user limits
* Displaying usage statistics
* Loading stored settings

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/shorts-limiter.git
```

### 2. Open Chrome Extensions

Navigate to:

```text
chrome://extensions/
```

### 3. Enable Developer Mode

Turn on **Developer Mode** in the top-right corner.

### 4. Load the Extension

Click:

```text
Load unpacked
```

Select the project folder.

The extension is now active.

---

## 📖 How It Works

1. User sets a daily Shorts limit.
2. Extension tracks Shorts usage.
3. Once the limit is reached:

   * Shorts pages are blocked.
   * User is redirected to YouTube Home.
4. Counter automatically resets the next day.

---

## 💡 Why This Project?

I built this extension because I wanted to reduce YouTube Shorts consumption without losing personalized recommendations for long-form educational content.

Most existing solutions either:

* Disable watch history
* Block YouTube entirely

Both approaches negatively affect content discovery.

This extension focuses on limiting Shorts while keeping the rest of YouTube intact.

---

## 🔮 Future Improvements

* Time-based limits
* Weekly analytics dashboard
* Usage history
* Productivity insights
* Chrome Sync support
* Focus mode
* Streak tracking

---

## 🤝 Contributing

Suggestions, bug reports, and pull requests are welcome.

If you have ideas for improving the extension, feel free to open an issue.


Built to help users consume content intentionally instead of endlessly scrolling.
