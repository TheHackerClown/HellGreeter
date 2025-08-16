document.addEventListener("DOMContentLoaded", function() {
    const techQuotes = [
        "Security is not a product, it's a process. \n Bruce Schneier",
        "The best code is no code at all. \n Jeff Atwood",
        "Only amateurs attack machines; professionals target people. \n Bruce Schneier",
        "First, solve the problem. Then, write the code.\n John Johnson",
        "The quieter you become, the more you can hear.\n Ram Das",
        "Encryption works. Properly implemented strong crypto systems are one of the few things you can trust. \n Edward Snowden",
        "Programs must be written for people to read, and only incidentally for machines to execute. \n Harold Abelson",
        "If you think technology can solve your security problems, then you don't understand the problems and you don't understand the technology. \n Bruce Schneier",
        "In God we trust. All others must bring data. \n W. Edwards Deming",
        "Hacking is not about the technology, it's about the mindset. \n Anonymous",
        "Good code is its own best documentation. \n Steve McConnell",
        "There's no patch for human stupidity. \n Author Unknown",
        "Don't comment bad code - rewrite it. \n Brian Kernighan",
        "A secure system is one that does what it's supposed to. \n Gene Spafford",
        "Testing shows the presence, not the absence, of bugs. \n Edsger W. Dijkstra",
        "Think like a hacker, defend like a guardian. \n Anonymous",
        "Premature optimization is the root of all evil. \n Donald Knuth",
        "Passwords are like underwear: change them often, don't share them, and don't leave them lying around. \n Anonymous",
        "The most dangerous phrase in the language is: 'We've always done it this way.' \n Grace Hopper",
        "It's not a bug - it's an undocumented feature. \n Anonymous"
    ];

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * techQuotes.length);
        return techQuotes[randomIndex];
    }

    document.getElementById('title').innerText = getRandomQuote();
    document.body.addEventListener("keydown", function(event) {
        document.getElementById('search-input').focus();
    });
});
