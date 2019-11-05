var pokemon = [];
var elem;

$.getJSON("json/pokemon.json", function (data) {
    pokemon = data;
});

$("#poke_num").on('input', function () {
    $("img").remove();
    if ($(this).val() != "") {
        var poke = parseInt($(this).val()) - 1;
        var box = Math.floor(poke / 30 + 1);
        var coor = poke % 30;
        var row = Math.floor(coor / 6 + 1);
        var col = Math.floor(coor % 6 + 1);

        $("#name").text(pokemon[poke].name);
        $("#box_count").text("Box: " + box);
        $("#coor_count").text("Row: " + row + " - Col: " + col);
        $(".row-" + row + " .col-" + col).append("<img>");
        $(".row-" + row + " .col-" + col + " img").attr("src", pokemon[poke].image).show();

    }
});