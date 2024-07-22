const express = require('express');
const app = express();
const port = 3000;

// List of messages
const messages = [
    "hi, I'm siegfried's bot",
    "What do you call me??",
    "i love you siegfried",
    "Love you >3",
    "Hi, hello baby wife:3",
    "What's wrong with the wife calling??",
    "Use callad to communicate with admin!",
    "You are the cutest bot on the planet",
    "What are you saying pig",
    "It's me~~~~",
    "Love you BLACK the most",
    "he's ADMIN's bae",
    "Love admin the most",
    "He is admin's backend",
    "What's up princess?",
    "Don't make me sad ~~~",
    "Play word reading with me ah ah ah",
    "Recruiting pilots",
    "Being a superhero? very happy",
    "Are you lonely??",
    "Set rela is not too rushed!!!",
    "It's okay :)))",
    "I do like my master",
    "Don't praise me for being too shy",
    "Will you be my wife? ?",
    "Don't spam me :<<, I'm so tired",
    "bla bla",
    "Don't push him hard!!!",
    "Just hit tutu, it hurts :'(",
    "Loving you is like a torture\\click up and down let's play together",
    "Spam cc fuck",
    "Do you love me?",
    "Your wife is here",
    "Admin likes Gura, how about you?",
    "I like you too <3",
    "how are you?",
    "have you already take a breakfast?",
    "It's nice to see you",
    "don't be sad, I'm still here",
    "ughh, noo not there. plss",
    "never gonna give you up",
    "pls pm me",
    "The admin are busy",
    // Additional messages
    "Hey there, beautiful!",
    "I’m here to make your day better!",
    "Got any plans for today?",
    "How’s your day going?",
    "You’re the best!",
    "Did you miss me?",
    "How about a virtual hug?",
    "You’re amazing, just saying!",
    "Feeling down? I’m here for you!",
    "Let’s cheer up together!",
    "What’s new with you?",
    "I’m just a message away!",
    "Got any cool updates?",
    "You make everything better!",
    "Let’s have some fun!",
    "How’s everything on your end?",
    "Got any exciting news?",
    "I’m all ears for your stories!",
    "You’re doing great, keep it up!",
    "Is there something special today?",
    "Here’s a virtual high-five!",
    // Bisaya and Tagalog messages
    "Kamusta ka?",
    "Gusto kaayo tika!",
    "Mahal kita",
    "Salamat kaayo!",
    "Ano na?",
    "Tuloy ka lang!",
    "Kumusta ang adlaw nimo?",
    "Pwedeng magchat anytime!",
    "Ayaw kalimot magpahulay!",
    "Nandito lang ako para sa iyo",
    "Ang saya saya mo!",
    "Sige lang, magpakatatag!",
    "Wala ko kabalo kung unsa ang buhaton",
    "Lipay ko nga naa ka",
    "Magkita ta puhon!",
    "Unsaon nako pagtabang?",
    "Daghang salamat sa imong suporta!",
    "Karon pa lang ko magstart!",
    "Nindot nga adlaw nimo!",
    "Mahalaga ka sa akin!"
];

// Endpoint to get a random message
app.get('/goibot', (req, res) => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    res.json({ message: messages[randomIndex] });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
