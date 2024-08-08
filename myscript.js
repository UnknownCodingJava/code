
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


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      const formData = new FormData(this);

      fetch('database.php?action=insert', {
          method: 'POST',
          body: formData
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
      })
      .then(result => {
          if (result.status === 'success') {
            document.getElementById('msg_sent').style.display = 'block';
            clear_val();
          } else {
              alert("There was an error: " + result.message);
          }
      })
      .catch(error => {
          console.error('Error:', error); // Debug logging
      });
  });
});

function clear_val(event, company_name, date, email, phone, text_message) {
  document.getElementById('company_name').value = '';
  document.getElementById('date').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('text_message').value = '';
  document.getElementById('contactForm').style.display = 'block';
}
