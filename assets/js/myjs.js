$(function () {
    $(".card").on("click", function () {
        $(this).toggleClass("card--open");
    });
    $(".card__like").on("click", function (e) {
        $(this).toggleClass("card__like--red");
        e.stopPropagation();
    });

})