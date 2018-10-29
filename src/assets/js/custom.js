function init_plugins_menu() {
    $(document).ready(function() {
        $('.leftmenutrigger').on('click', function(e) {
            $('.side-nav').toggleClass("open");
            $('#wrapper').toggleClass("open");
            e.preventDefault();
        });
    });
}