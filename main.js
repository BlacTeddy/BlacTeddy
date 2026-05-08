 <script>
    const words = [
      'skills',
      'projects',
      'toward my first role'
    ];

    let index = 0;
    const el = document.getElementById('rotating-word');

    setInterval(() => {
      index = (index + 1) % words.length;
      el.textContent = words[index];
    }, 2000); // change every 2 seconds
  </script>
