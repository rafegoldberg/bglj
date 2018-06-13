<?function SocialMeta() {
  if( !is_callable('get_field') ) return;
  
  $context = get_field("metacard");
  $markup  = SocialMeta_MarkupGenerator( $context );
  
  return $markup;
}?>

<?function SocialMeta_MarkupGenerator($context){
  $context = (object) $context;
  ob_start()
  ?>
  <script> console.log(<?=json_encode(is_home())?>) </script>
  
  <!-- essential tags -->
  <meta property="og:title" content="<?=is_home() ? '' : get_the_title()." // " ?><?=get_bloginfo('name')?>">
  <meta property="og:description" content="<?=is_string($context->text) ? $context->text : get_the_excerpt()?>">
  <meta property="og:image" content="<?=$context->image['url']?>">
  <meta name="twitter:card" content="summary_large_image">
  
  <?
  return ob_get_clean();
}?>

<? return SocialMeta() ?>