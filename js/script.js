function calculateAge() {
  // Get user's date of birth
  const dobInput = document.getElementById('dob');
  const dob = new Date(dobInput.value);
  const today = new Date();
  
  // Validate input
  if (!dobInput.value) {
    alert('Please enter your date of birth!');
    return;
  }
  
  if (dob > today) {
    alert('Date of birth cannot be in the future!');
    return;
  }
  
  // Calculate age
  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();
  
  // Adjust months and days
  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }
  
  if (days < 0) {
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += lastMonth.getDate();
    months--;
  }
  
  // Calculate totals
  const timeDiff = today - dob;
  const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const totalMonths = years * 12 + months;
  const totalWeeks = Math.floor(totalDays / 7);
  const totalHours = totalDays * 24;
  
  // Prepare result display
  const resultDiv = document.getElementById('result');
  let message = '';
  
  // Generate different messages based on age
  if (years < 1) {
    if (months < 1) {
      message = `You're just ${totalDays} days young! 🌟`;
    } else {
      message = `Wow! You're ${months} month${months !== 1 ? 's' : ''} old! 👶`;
    }
  } else if (years < 5) {
    message = `You're ${years} year${years !== 1 ? 's' : ''} young! 🧸`;
  } else if (years < 13) {
    message = `${years} amazing years! Keep growing! 🌈`;
  } else if (years < 20) {
    message = `Teenage years! ${years} years of awesome! 🎸`;
  } else if (years < 30) {
    message = `${years} years of adventure! The world is yours! 🌍`;
  } else if (years < 50) {
    message = `${years} years of wisdom and experience! 💼`;
  } else if (years < 70) {
    message = `${years} golden years! 🏆`;
  } else {
    message = `${years} magnificent years! True legend! 👑`;
  }
  
  // Update result display
  resultDiv.innerHTML = `
    <div class="age-display">Your age is: ${years} years, ${months} months, ${days} days</div>
    
    <div class="age-breakdown">
      <div class="age-unit">
        <span class="number">${totalDays.toLocaleString()}</span>
        <span class="label">Total Days</span>
      </div>
      <div class="age-unit">
        <span class="number">${totalWeeks.toLocaleString()}</span>
        <span class="label">Total Weeks</span>
      </div>
      <div class="age-unit">
        <span class="number">${totalMonths.toLocaleString()}</span>
        <span class="label">Total Months</span>
      </div>
      <div class="age-unit">
        <span class="number">${totalHours.toLocaleString()}</span>
        <span class="label">Total Hours</span>
      </div>
    </div>
    
    <div class="message">${message}</div>
  `;
  
  // Show result
  resultDiv.style.display = 'block';
  
  // Add animation effect
  resultDiv.style.animation = 'none';
  setTimeout(() => {
    resultDiv.style.animation = 'slideUp 0.5s ease-out';
  }, 10);
}

// Add keyboard support (press Enter to calculate)
document.getElementById('dob').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    calculateAge();
  }
});

// Set maximum date as today
window.onload = function() {
  const today = new Date();
  const maxDate = today.toISOString().split('T')[0];
  document.getElementById('dob').max = maxDate;
  
  // Optional: Set default date to 20 years ago
  const defaultDate = new Date();
  defaultDate.setFullYear(today.getFullYear() - 20);
  document.getElementById('dob').value = defaultDate.toISOString().split('T')[0];
};
