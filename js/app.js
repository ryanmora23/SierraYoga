window.onload = app;

// runs when the DOM is loaded
function app() {
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        //css
        {
            url: "./bower_components/normalize.css/normalize.css"
        }, {
            url: "./bower_components/typeplate-starter-kit/css/typeplate.css"
        }, {
            url: "./dist/style.css"
        },
        //js
        {
            url: "./bower_components/jquery/dist/jquery.min.js"
        }, {
            url: "./bower_components/lodash/dist/lodash.min.js"
        }, {
            url: "./bower_components/backbone/backbone.js"
        }, {
            url: "./bower_components/bootstrap/dist/js/bootstrap.min.js"
        }, {
            url: "./bower_components/pathjs/path.min.js"
        }
    ).then(function() {
        _.templateSettings.interpolate = /{([\s\S]+?)}/g;
        document.body.style.opacity = 1;
        // start app?
        var client = new SierraYoga();
    })

}

function SierraYoga() {
    this.init();
}

SierraYoga.prototype.init = function() {
    var self = this;
    this.setupRouting();
    Path.listen();
}

SierraYoga.prototype.setupRouting = function() {
    var self = this;

    Path.map("#/").to(function() {
        $.when(
            self.loadTemplate("home")
        ).then(function() {
            self.drawHome(arguments[0])
        });
    });

    Path.map("#/Home").to(function() {
        $.when(
            self.loadTemplate("home")
        ).then(function() {
            self.drawHome(arguments[0])
        });
    });

    Path.map("#/Portfolio").to(function() {
        $.when(
            self.loadTemplate("portfolio")
        ).then(function() {
            self.drawPortfolio(arguments[0])
        });
    });

    Path.map("#/About").to(function() {
        $.when(
            self.loadTemplate("about")
        ).then(function() {
            self.drawAbout(arguments[0])
        });
    });

    Path.map("#/Media").to(function() {
        $.when(
            self.loadTemplate("media")
        ).then(function() {
            self.drawMedia(arguments[0])
        });
    });

    Path.map("#/Schedule").to(function() {
        $.when(
            self.loadTemplate("schedule")
        ).then(function() {
            self.drawSchedule(arguments[0])
        });
    });

    Path.map("#/Contact").to(function() {
        $.when(
            self.loadTemplate("contact")
        ).then(function() {
            self.drawContact(arguments[0])
        });
    });
    Path.map("#/Products").to(function() {
        $.when(
            self.loadTemplate("products")
        ).then(function() {
            self.drawProducts(arguments[0])
        });
    });

    Path.root("#/");
}

SierraYoga.prototype.loadTemplate = function(name) {
    return $.get("./templates/" + name + ".html").then(function() {
        return arguments[0];
    });
}

SierraYoga.prototype.drawHome = function(template) {
    console.log("Home");
    var background = document.querySelector("#page-content-wrapper");
    background.innerHTML = template;
}
SierraYoga.prototype.drawPortfolio = function(template) {
    console.log("Portfolio");
    var background = document.querySelector("#page-content-wrapper");
    background.innerHTML = template;
}
SierraYoga.prototype.drawAbout = function(template) {
    console.log("About");
    var background = document.querySelector("#page-content-wrapper");
    background.innerHTML = template;
}
SierraYoga.prototype.drawMedia = function(template) {
    console.log("Media");
    var background = document.querySelector("#page-content-wrapper");
    background.innerHTML = template;
}
SierraYoga.prototype.drawSchedule = function(template) {
    console.log("Schedule");
    var background = document.querySelector("#page-content-wrapper");
    background.innerHTML = template;
}
SierraYoga.prototype.drawContact = function(template) {
    console.log("Contact");
    var background = document.querySelector("#page-content-wrapper");
    background.innerHTML = template;
}
SierraYoga.prototype.drawProducts = function(template) {
    console.log("drawProducts");
    var background = document.querySelector("#page-content-wrapper");
    background.innerHTML = template;
}
