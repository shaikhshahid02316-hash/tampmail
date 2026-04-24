// related.js – automatically shows related posts based on topic cluster
(function() {
    const clusters = {
        "Definition & Basics": ["/what-is-temporary-email", "/how-temp-mail-works", "/why-use-temp-mail", "/do-temp-mails-expire"],
        "How‑to / Creation": ["/how-to-get-temp-mail", "/create-temp-mail", "/generate-disposable-email", "/open-temp-inbox", "/use-temp-mail-online", "/temp-mail-free", "/start-temp-mail", "/instant-temp-mail", "/free-temp-mail", "/online-temp-mail", "/temp-mail-generator", "/disposable-inbox", "/free-temp-email-address", "/temp-email-generator-free", "/temp-mail-no-signup", "/temp-mail-for-verification", "/temp-mail-for-otp", "/temp-mail-for-signup", "/temp-mail-receive-online", "/temp-mail-no-registration", "/temp-inbox-online", "/can-i-use-temp-mail-for-verification", "/anonymous-temp-email", "/temp-mail-without-signup", "/free-temp-email-otp", "/instant-disposable-email"],
        "Safety & Legality": ["/temp-mail-avoid-spam", "/is-temp-mail-safe", "/is-temp-mail-legal", "/can-temp-mail-be-traced", "/temp-mail-privacy", "/temp-mail-anti-spam", "/temp-mail-no-logs", "/untraceable-email", "/anonymous-signup-temp-mail", "/private-temp-mail", "/secure-temp-mail", "/temp-mail-no-tracking"],
        "Platform Guides": ["/temp-mail-for-instagram", "/temp-mail-for-chatgpt", "/temp-mail-for-discord", "/temp-mail-for-facebook", "/temp-mail-for-telegram", "/temp-mail-for-gmail", "/temp-mail-for-amazon", "/temp-mail-for-netflix", "/temp-mail-for-website", "/temp-mail-for-app", "/best-temp-mail-for-social-media"],
        "Comparison & Reviews": ["/temp-mail-vs-real-email", "/temp-mail-vs-burner", "/temp-mail-vs-gmail", "/best-temp-mail-service", "/which-temp-mail-best", "/top-disposable-email-providers", "/free-vs-paid-temp-mail"],
        "Advanced Features": ["/temp-mail-custom-domain", "/temp-mail-with-password", "/temp-mail-attachments", "/temp-mail-inbox-refresh", "/temp-mail-auto-delete", "/temp-mail-long-duration", "/temp-mail-unlimited", "/temp-mail-multiple-inboxes", "/temp-mail-send-receive"],
        "Regional & International": ["/temp-mail-india", "/temp-mail-usa", "/temp-mail-uk", "/temp-mail-europe", "/temp-mail-global", "/temp-mail-worldwide", "/correo-temporal", "/email-temporal", "/correo-desechable", "/email-jetable", "/email-temporaire", "/temporare-email", "/email-temporanea", "/odnorazovaya-pochta", "/lin-shi-you-xiang", "/tsukaichigame-ru", "/imsi-imeil", "/al-bareed-al-muwaqqat"]
    };

    // Determine current page's cluster by checking URL against each cluster's list
    let currentCluster = null;
    let currentUrl = window.location.pathname;
    for (const [cluster, urls] of Object.entries(clusters)) {
        if (urls.includes(currentUrl)) {
            currentCluster = cluster;
            break;
        }
    }
    if (!currentCluster) return;

    const relatedUrls = clusters[currentCluster].filter(url => url !== currentUrl);
    if (relatedUrls.length === 0) return;

    const container = document.createElement('div');
    container.style.cssText = 'margin-top: 3rem; padding: 1.5rem; background: #f1f5f9; border-radius: 20px;';
    container.innerHTML = `<h3>📖 More from ${currentCluster}</h3><ul style="display: flex; flex-wrap: wrap; gap: 0.8rem; list-style: none;">` +
        relatedUrls.map(url => `<li><a href="${url}">${url.substring(1).replace(/-/g, ' ')}</a></li>`).join('') +
        `</ul>`;
    document.body.appendChild(container);
})();
