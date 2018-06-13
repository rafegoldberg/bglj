<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <title>Berkley Journal of Gender Law &amp; Justice</title>
  <?= $SocialMeta = include "php/lib/meta.php" ?>
  
  <!-- Dependencies -->
  <script src="//unpkg.com/wpapi@1.1.2/browser/wpapi.min.js"></script>
  <script src="//unpkg.com/vue"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <?wp_head()?>
</head>
<body <?body_class()?>>

  <div id="app">
    <? if (have_posts()) while (have_posts()) {
      the_post();
      the_title();
      the_content();
    } ?>
  </div>

<?wp_footer()?>
</body>
</html>