
function page_tab(evt, tab_name) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tab_name).style.display = "block";
  evt.currentTarget.className += " active";
}

function verify(evt, elementId) {
  if (elementId) {
      document.getElementById(elementId).style.display = 'block';
  }
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      const formData = new FormData(this);

      fetch('database.php?action=insert', {
          method: 'POST',
          body: formData
      })
      .then(response => response.json())
      .then(result => {
          if (result.status === 'success') {
              // Display the success message
              verify(null, 'msg_sent'); // Ensure 'msg_sent' is the correct ID

              // Optional: Hide contact form or update UI
              document.getElementById('contactForm').style.display = 'none';

              // Redirect to another page after a delay
              setTimeout(() => {
                  window.location.href = '/projects/code/index.html';
              }, 1000); // Adjust the delay if needed
          } else {
              alert("There was an error: " + result.message);
          }
      })
      .catch(error => {
          console.error('Error:', error);
      });
  });
});


function clear_val(event, company_name, date, email, phone, text_message) {
  document.getElementById('msg_sent').style.display = "none";
  document.getElementById('company_name').value = '';
  document.getElementById('date').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('text_message').value = '';
}
