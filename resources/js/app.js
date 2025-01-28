// CSS
import "../css/bootstrap.css";
import "../css/custom.css";
import "../css/jquery.dataTables.min.css";
import "../css/toast.css";
import "../css/select2.min.css";
import "../jquery-ui/jquery-ui.min.css";
import "../jquery-ui/jquery-ui.structure.min.css";
import "../jquery-ui/jquery-ui.theme.min.css";

// JS
import "./jquery.3.5.1.min.js";
import "../jquery-ui/jquery-ui.min.js";
import "./bootstrap.js";
import "./jquery.validate.min.js";
import "./jquery.dataTables.min.js";
import "./toast.min.js";
import "./select2.min.js";

$(document).ready(function () {
    // Initialize datepicker on inputs designated for dates
    $('input[type="date"]').datepicker({
        dateFormat: "yy-mm-dd", // ensures format is yyyy-MM-dd
    });

    // Iterate over each input designated for dates
    $('input[type="date"]').each(function () {
        var dateValue = $(this).datepicker("getDate"); // Get the Date object
        if (dateValue) {
            // Check if the date is not null
            var formattedDate = $.datepicker.formatDate("yy-mm-dd", dateValue); // Format to yyyy-MM-dd
            $(this).val(formattedDate); // Set the input value to the formatted date
        }
    });
});
