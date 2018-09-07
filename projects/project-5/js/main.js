lightbox.option ({
     'resizeDuration': 300,
     'wrapAround': true,
     'fitImagesInViewport': true
});

const $images = $('.picture a');
const $search = $('#search');

$search.on('keyup', function() {
  const $input = $search.val().toLowerCase();
  console.log($input);

  $images.each(function(index, caption) {
    const $cap = $(caption).attr('data-title').toLowerCase();
    console.log($cap);

    if ($cap.includes($input)) {
      caption.style.display = "flex";
      console.log("found");
    } else {
      caption.style.display = "none";
      console.log("nothing");
    }
  });

});
