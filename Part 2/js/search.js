$(document).ready(function () {
    $("input").focus();
    $("input").on("click", function () {
        $("#intro").hide();
    });
    
    $.getJSON("data/team.json", function (data) {
        $.each(data, function () {
            $.each(this, function (key, value) {
                var a = jQuery.grep(data.teammembers, function (val, index) {
                    return val.reportsto == empid;
                });
                var empid = value.id;
                var appendid = ' class="' + empid + '"';
                $("#results").append(
                    '<li id="emplist"' + appendid + '">' + '<a href="#employeepage"><img src="' + value.imagepath + '"><h2>' + value.name + "</h2><p>" + value.title + "</p></li>"
                );
                $("#results").listview("refresh");
            });
        });
    });
});
