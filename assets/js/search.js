console.log(document.getElementById('is-search-enabled').value);
console.log('{{ site.search_enabled }}');

if (window.location.href.includes('/eng/')) {
    console.log(getTranslatedTitle('title.about'));
    console.log('English')
} else {
    console.log(getTranslatedTitle('title.about'));
    console.log('Korean')
}

function getTranslatedTitle(title) {
    switch (title) {
        case 'title.home':
            return document.getElementById('title-home').value;
        case 'title.faq':
            return document.getElementById('title-faq').value;
        case 'title.news':
            return document.getElementById('title-news').value;
        case 'title.contact':
            return document.getElementById('title-contact').value;

        case 'title.about':
            return document.getElementById('title-about').value;
        case 'title.motivation':
            return document.getElementById('title-motivation').value;
        case 'title.charter':
            return document.getElementById('title-charter').value;
        case 'title.members':
            return document.getElementById('title-members').value;
        case 'title.logo':
            return document.getElementById('title-logo').value;

        case 'title.guide':
            return document.getElementById('title-guide').value;
        case 'title.userTips':
            return document.getElementById('title-user-tips').value;
        case 'title.apiDoc':
            return document.getElementById('title-api-doc').value;
        case 'title.contributionGuide':
            return document.getElementById('title-contribution-guide').value;

        case 'title.license':
            return document.getElementById('title-license').value;
        case 'title.osoriLicenseAndNotice':
            return document.getElementById('title-osori-license-and-notice').value;
        case 'title.noticeOnUsageRestrictionByHeavyTraffic':
            return document.getElementById('title-notice-on-usage-restriction-by-heavy-traffic').value;
        case 'title.noWarranty':
            return document.getElementById('title-no-warranty').value;
        case 'title.docLicense':
            return document.getElementById('title-doc-license').value;
        case 'title.codeLicense':
            return document.getElementById('title-code-license').value;

        default:
            return title;
    }
}