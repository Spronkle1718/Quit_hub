let users = {};
let currentUser = null;
let streak = 0;
let xp = 0;

function showSignup() {
    document.getElementById('auth-section').style.display = 'none';
    document.getElementById('signup-section').style.display = 'block';
}

function showLogin() {
    document.getElementById('signup-section').style.display = 'none';
    document.getElementById('auth-section').style.display = 'block';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users[username] && users[username] === password) {
        currentUser = username;
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('quiz-section').style.display = 'block';
        document.getElementById('user-display').innerText = username;
    } else {
        alert('Invalid username or password!');
    }
}

function signup() {
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;

    if (users[username]) {
        alert('Username already exists!');
    } else {
        users[username] = password;
        alert('Account created successfully! Please log in.');
        showLogin();
    }
}

function submitQuiz() {
    const answer = document.getElementById('quiz-answer').value;
    if (answer) {
        document.getElementById('quiz-section').style.display = 'none';
        document.getElementById('goals-section').style.display = 'block';
        updateGoals();
    }
}

function updateGoals() {
    const goals = `
        <div>Daily Goals: 
            <ul>
                <li>Stay off porn for 1 day (5 XP)</li>
                <li>Stay off porn for 7 days (20 XP)</li>
                <li>Stay off porn for 30 days (50 XP)</li>
            </ul>
        </div>
    `;
    document.getElementById('goals').innerHTML = goals;
}

function resetStreak() {
    alert('Your streak has been reset!');
    streak = 0;
    document.getElementById('streak-count').innerText = streak;
}

function showPanicButton() {
    const quotes = [
        "You are stronger than your urges!",
        "Don't give up, keep fighting!",
        "Every day is a new chance!",
        "Believe in yourself!"
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('motivational-quote').innerText = randomQuote;
    document.getElementById('panic-message').style.display = 'block';
}

function hidePanicButton() {
    document.getElementById('panic-message').style.display = 'none';
}
