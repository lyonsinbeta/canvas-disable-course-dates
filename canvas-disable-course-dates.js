/*
 * canvas-disable-course-dates.js
 * by: David Lyons hi@lyonsinbeta.com
 * Disable editing course start and end dates
 * for any user who is not an admin
 */

$(function() {
  if (window.location.pathname == "/courses/" + ENV.COURSE_ID + "/settings") {
    if($.inArray("admin", ENV.current_user_roles) == -1) {
        $("#course_start_at").prop("disabled", true);
        $("#course_conclude_at").prop("disabled", true);
        $(".ui-datepicker-trigger").prop("disabled", true);
    }
  }
});
