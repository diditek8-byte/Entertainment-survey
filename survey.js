
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
});

