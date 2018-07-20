$(function () {
    $(".card").on("click", function () {
        $(this).toggleClass("card--open");
    });
    $(".card__like").on("click", function (e) {
        $(this).toggleClass("card__like--red");
        e.stopPropagation();
    });
    $("a[href='#']").click(function (e) {
        e.preventDefault();
    });
    $(".card__follow-btn").on("click", function (e) {
        $(this).toggleClass("card__follow-btn--following");
        e.stopPropagation();
    });
    $("#image").on("change", function () {
        $(".create__image img").attr("src", "assets/images/squared/" + $(this).val());
    });
    $("#author").on("change", function () {
        $(".create__profile img").attr("src", "assets/images/profiles/" + $(this).val());
    })

})