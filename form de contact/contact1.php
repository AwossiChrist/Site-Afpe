<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fname = htmlspecialchars($_POST['fname']);
    $lname = htmlspecialchars($_POST['lname']);
    $email = htmlspecialchars($_POST['contactEmail']);
    $phone = htmlspecialchars($_POST['contactPhone']);
    $comment = htmlspecialchars($_POST['comment']);

    $to = "awossichrist@gmail.com"; // Remplacez par l'adresse e-mail de l'administrateur
    $subject = "Nouveau message de contact";
    $message = "Nom: $fname $lname\nEmail: $email\nTéléphone: $phone\nMessage: $comment";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi de votre message.";
    }
}
?>