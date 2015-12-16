$(document).ready(function () {
    $.getJSON("data/team.json", function (json) {
        var employee = "";
        var employeeid = "";

        $('body').on("click", "#emplist", function (e) {
            var employeestr = $(this).attr("class").split(" ")[0] - 1;
            employee = parseInt(employeestr);
            $("#empdetails-one").empty();
            employeeid = json.teammembers[employee].id;

            $("#empdetails-one").append(
                "<li>" + "<img src='" + json.teammembers[employee].imagepath + "'>" + "<h2>" + json.teammembers[employee].name + "</h2>" + "<p>" + json.teammembers[employee].title + "</p>" + "</li>"
            );
                      var reportcount = jQuery.grep(json.teammembers, function (val, index) {
                return val.reportsto == employeeid;
            });
            var managers = json.teammembers[employee].reportsto - 1;
            var managerName = json.teammembers[managers].name;
            var reports = reportcount.length;
            var appendid = "class='" + employeeid + "'";

            $("#empdetails-two").empty();
            $("#empdetails-two").append(
                "<li " + appendid + "><a>" + "<h2>View Manager</h2><p>" + managerName + "</p></a></li>" + "<li><a><h2>View Direct Reports</h2><p>" + reports + "</p></a></li>" + "<li>" + "<a href=" + "'tel:" + json.teammembers[employee].officenumber + "'>" + "<h2>Call Office</h2>" + "<p>" + json.teammembers[employee].officenumber + "</p></a></li>" + "<li>" + "<a href=" + "'tel:" + json.teammembers[employee].cellnumber + "'>" + "<h2>Call Cell</h2>" + "<p>" + json.teammembers[employee].cellnumber + "</p></a></li>" + "<li>" + "<a href=" + "'mailto:" + json.teammembers[employee].email + "'><h2>E-mail " + json.teammembers[employee].name + "</h2><p>" + json.teammembers[employee].email + "</p></a>" + "</li>"
            );
            
            $("#empdetails-one").listview("refresh");
            $('#empdetails-two').listview("refresh");
        });
    });
});