<?php include("backend.php"); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LearnIt Platform</title>
    <link rel="stylesheet" href="static/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>
<body>
    <!-- Navigation Bar -->
    <header>
        <div class="logo"><img class="logs" src="img/logo.jpg" width="100px"></div>
        <div class="menu-icon" onclick="toggleMenu()"></div>
        <nav>
            <ul id="nav-list">
                <li><a href="index.php"><i class="fas fa-home"></i> Home</a></li>
                <li><a href="contact.php"><i class="fas fa-user"></i> Contact</a></li>
                <li><a href="aboutus.php"><i class="fas fa-user"></i> About us</a></li>
            </ul>
        </nav>
    </header>

    <!-- Static content remains the same -->
    <!-- Add a contact form as an example interaction -->
    <section class="contact-form">
        <h2>Contact Us</h2>
        <form action="index.php" method="POST">
            <input type="text" name="name" placeholder="Your name" required>
            <input type="email" name="email" placeholder="Your email" required>
            <textarea name="message" placeholder="Your message" required></textarea>
            <button type="submit" name="submit">Send</button>
        </form>
        <?php if ($msg != ''): ?>
            <p class="form-response"><?= htmlspecialchars($msg) ?></p>
        <?php endif; ?>
    </section>

    <!-- Other sections as in your original HTML -->

    <!-- Footer content -->

    <script>
        function toggleMenu() {
            var navList = document.getElementById('nav-list');
            navList.classList.toggle('show');
        }
    </script>
</body>
</html>
