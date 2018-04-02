/**
 * @file    js/js.js
 * @desc    this will use jQuery and enquire to handle navigation
 */
// IIFE, read as iffy
( () => {
    let
        /*$               =   require("node_modules/jquery/dist/jquery.min"),
        enquire         =   require("node_modules/enquire.js/dist/enquire.min"),*/
        $menuBtn        =   $(".menuBtn"),/*
        $navContainer   =   $(".topNav .containerNav"),*/
        $bannerImg      =   $("#border_banner"),
        $bannerUl        =   $(".bannerNav .bannerUl")
    ;


    /***
     * @name : navMedia_query
     * @desc : this will use jQuery and enquire to manipulate navigation menu button and navlinks
     */
    navMedia_query = () => {
        enquire.register("screen and (min-width: 768px)", {

            match: function () {
                $bannerUl.hide();

            },

            unmatch: function () {
                $bannerUl.hide();
            }
        }); // enquire


        $menuBtn.on("click", () => {
            /*$bannerImg
                .fadeToggle('fast');*/
            $bannerUl
                .slideToggle();
        })// click
    }; //navMedia_query

    init = () => {
        navMedia_query();
    }; //init

    window.addEventListener("load", init);

})();
