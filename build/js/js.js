/**
 * @file    js/js.js
 * @desc    this will use jQuery and enquire to handle navigation
 */
// IIFE, read as iffy
( () => {
    let
        /*$               =   require("node_modules/jquery/dist/jquery.min"),
        enquire         =   require("node_modules/enquire.js/dist/enquire.min"),*/
        $menuBtn        =   $(".menuBtn"),
        $navContainer   =   $(".topNav .containerNav")
    ;

    window.addEventListener("load", () => {
        enquire.register("screen and (min-width: 768px)", {

            match: function () {
                $navContainer.show();
            },

            unmatch: function () {
                $navContainer.hide();
            }
        }); // enquire

        $menuBtn.on("click", () => {
            $navContainer
                .toggleClass('open');
        });// click

        /*$("#nav-icon1").click(function () {
            $(this).toggleClass('open');
            $navContainer
                .slideToggle();
        });*/

        $menuBtn.on("click", () => {
            $navContainer
                .slideToggle();
        })// click
    });

})();
