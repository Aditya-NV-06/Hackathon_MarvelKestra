document.getElementById('search-button').addEventListener('click', async () => {
    const searchTerm = document.getElementById('search').value;
    if (!searchTerm) {
        console.log('Invalid input');
        return;
    }
    const results = await fetchMarvelCharacters(searchTerm);
    displayResults(results);
});

function displayResults(characters) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    characters.forEach(character => {
        const characterDiv = document.createElement('div');
        characterDiv.className = 'p-4 border-b';
        characterDiv.innerHTML = `
            <h2 class="font-bold">${character.name}</h2>
            <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}">
            <p>${character.description || 'No description available.'}</p>
        `;
        resultsDiv.appendChild(characterDiv);
    });
}

document.getElementById('menu-button').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('hidden');
});

const leaderboardData = [
    { rank: 1, character: 'Spider-Man', points: 1500 },
    { rank: 2, character: 'Iron Man', points: 1400 },
    { rank: 3, character: 'Captain America', points: 1300 },
    // Add more characters as needed
];

const leaderboard = document.getElementById('leaderboard');

leaderboardData.forEach(entry => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td class="py-2 px-4 border-b border-gray-700 text-center">${entry.rank}</td>
        <td class="py-2 px-4 border-b border-gray-700 text-center">${entry.character}</td>
        <td class="py-2 px-4 border-b border-gray-700 text-center">${entry.points}</td>
    `;
    leaderboard.appendChild(row);
});