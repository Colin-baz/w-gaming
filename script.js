function showComposition(game) {
  // Hide all team compositions
  const teamMembers = document.getElementsByClassName("team-members");
  for (let i = 0; i < teamMembers.length; i++) {
    teamMembers[i].style.display = "none";
  }

  // Show the selected team composition
  const selectedComposition = document.getElementById(`${game}-composition`);
  selectedComposition.style.display = "grid";
}

// Set initial active game
const initialGame = "eva";
showComposition(initialGame);
