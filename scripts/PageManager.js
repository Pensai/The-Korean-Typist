"use strict"
var currentPageName = "";
// Builds a page from the ground up, including all basic scripts and css required for each page
// Also loads the content for the page from page_assets.
// TODO clean this promise hell up..
function BuildPage() {
    currentPageName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1).split(".html")[0];
    // Load the skeleton head scripts and css includes.
    $("head").load("/html_assets/base_assets/Header.html", function(response, status, xhr) {
        if (status == "success") {
            // Load body
            $("body").load("/html_Assets//base_assets/Body.html", function(response, status, xhr) {
                if (status == "success") {
                    // Load page content
                    $("#content").load("/html_assets/page_assets/" + currentPageName + "_content.html", function(response, status, xhr) {
                        // Load any page specific scripts
                        $.getScript("/scripts/" + currentPageName + ".js", function(response, status, xhr) {
                            if (status == "success") {

                            } else {
                                alert("there was an error: " + xhr.status + " " + xhr.statusText);
                            }
                        });
                        // Set the navigation highlight for the current page
                        $("#" + currentPageName).addClass("active");
                    });

                } else {
                    alert("there was an error: " + xhr.status + " " + xhr.statusText);
                }
            });
        }
    });
}