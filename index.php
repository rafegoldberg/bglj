<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Berkley Journal of Gender Law &amp; Justice</title>
  <script src="//unpkg.com/jquery@3.3.1/dist/jquery.min.js"></script>
  <script src="//unpkg.com/vue"></script>
  <?wp_head()?>
</head>
<body <?body_class()?> >

  <div id="app">
  <?if( have_posts() ) while( have_posts() ){
    the_post();
    the_title();
    the_content();
    ?><script>
      console.log(
        "%cPost%c: %o %O",
        'font-weight:bold', '',
        <?=json_encode(get_the_title())?>,
        <?=json_encode(get_post())?>
        )//log
      </script><?
    }?>
  </div>
  <? wp_footer() ?>
</body>
</html>