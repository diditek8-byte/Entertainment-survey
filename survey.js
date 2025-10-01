
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

      document.getElementById('my-form').addEventListener('submit',function(event) {
        event.preventDefault(); 

        const form = event.target;
        const formData = new FormData(form);

        const actionUrl = form.action;
        const method = form.method;

        fetch(actionUrl, {
          method: method,
          body: formData
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Networkresponse was not ok');
          }
          return response.text();
        })
        .then(data => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })
        .then(data => {
          consol.log{'Success:', data);
                     alert('Form submitted successfully!');
                     form.reset();
                    })
        .catch(error => {
          console.error('Error:' error);
          allert('An error occurred during submission.');
        });
      });
      });
    });
  });
});

