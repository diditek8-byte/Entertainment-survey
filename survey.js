document.addEventListener('DOMContentLoaded', function () {
  console.log("Hello from JavaScript!");

  const radios = document.querySelectorAll('input[type="radio"]');

  radios.forEach(radio => {
    radio.addEventListener('change', function () {
      const name = this.name;

      // Remove 'active' class from all labels in the same group
      document.querySelectorAll(`input[name="${name}"]`).forEach(input => {
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (label) label.classList.remove('active');
      });

      // Add 'active' class to the clicked label
      const selectedLabel = document.querySelector(`label[for="${this.id}"]`);
      if (selectedLabel) selectedLabel.classList.add('active');
    });
  });

  // ✅ Attach submit event only once
  const form = document.getElementById('my-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const formData = new FormData(form);
      const actionUrl = form.action;
      const method = form.method || 'POST';

      fetch(actionUrl, {
        method: method,
        body: formData
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })
        .then(data => {
          console.log('Success:', data);
          alert('Form submitted successfully!');
          form.reset();
        })
        .catch(error => {
          console.error('Error:', error);
          alert('An error occurred during submission.');
        });
    });
  }
});


      
  
