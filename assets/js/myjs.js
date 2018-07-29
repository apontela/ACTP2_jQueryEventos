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
    });
    $(".create__form").submit(function(e) {
        let name = $("#name").val();
        let followers = $("#followers").val();
        let likes = $("#likes").val();
        let following = $("#following").val();
        let image = $(".create__image img").attr("src");
        let author_name = $('#author').children(':selected').text();
        let author_image = $(".create__profile img").attr("src");
        console.log(image)
        e.preventDefault();
        let new_card = $("#invisible-card").clone().css("display", "list-item");
        new_card.find("card__title h2").html(name);
        $("ul").append(new_card);
    })
})