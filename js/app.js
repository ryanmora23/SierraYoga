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

    $.when(
        this.loadTemplate("Home")
        // this.loadTemplate("Portfolio"),
        // this.loadTemplate("About"),
        // this.loadTemplate("Media"),
        // this.loadTemplate("Schedule"),
        // this.loadTemplate("Contact"),
        // this.loadTemplate("Products")
    ).then(function() {
        Path.listen();
    })
}

SierraYoga.prototype.setupRouting = function() {
    var self = this;

    Path.map("#/").to(function() {});

    Path.map("#/Home").to(function() {
        self.drawHome();
    });

    Path.map("#/Portfolio").to(function() {
        self.drawPortfolio();
    });

    Path.map("#/About").to(function() {
        self.drawAbout();
    });

    Path.map("#/Media").to(function() {
        self.drawMedia();
    });

    Path.map("#/Schedule").to(function() {
        self.drawSchedule();
    });

    Path.map("#/Contact").to(function() {
        self.drawContact();
    });
    Path.map("#/Products").to(function() {
        self.drawProducts();
    });

    Path.root("#/");
}

SierraYoga.prototype.loadTemplate = function(name) {
    return $.get("./templates/" + name + ".html").then(function() {
        return arguments[0];
    });
}

SierraYoga.prototype.drawHome = function() {
    console.log("Home");
    var grid = document.querySelector("#page-content-wrapper");
    var htmlString = _.template("Home");
    grid.innerHTML = htmlString;
}
SierraYoga.prototype.drawPortfolio = function() {
    console.log("Portfolio");
}
SierraYoga.prototype.drawAbout = function() {
    console.log("About");
}
SierraYoga.prototype.drawMedia = function() {
    console.log("Media");
}
SierraYoga.prototype.drawSchedule = function() {
    console.log("Schedule");
}
SierraYoga.prototype.drawContact = function() {
    console.log("Contact");
}
SierraYoga.prototype.drawProducts = function() {
    console.log("drawProducts");
}
