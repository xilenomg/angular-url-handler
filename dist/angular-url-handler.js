(function(window, angular, undefined) {
    'use strict';


    angular.module('angular-url-handler', [])
        .service('urlHandlerService', function UrlHandler() {
            this._protocol;
            this._subdomain;
            this._domain;
            this._path;
            this._query;
            this._anchor;
            this._originalURL;
            // this.setURL(url);

            this.reset = function() {
                this._protocol = null;
                this._subdomain = null;
                this._domain = null;
                this._path = null;
                this._query = null;
                this._anchor = null;
                this._originalURL = null;
            };

            this.setURL = function(url) {
                this.reset();

                //["https://www.globo/path/to/folder?query=param#test", "https", "www", "globo", undefined, "/path/to/folder", "query=param", "test"]
                //["https://www.globo.com/path/to/folder?query=param#test", "https", "www", "globo", "com", "/path/to/folder", "query=param", "test"]
                var expression = /(.*):\/\/([^\.]+)\.([^\.\/\?\#]+)\.?([^\/\?\#]+)?([^\?\#]*)?\??([^#]*)?\#?(.*)?/;
                var regex = new RegExp(expression);
                var regexResult = url.match(regex);
                if (regexResult) {
                    //Protocol
                    if (regexResult[1]) {
                        this.setProtocol(regexResult[1]);
                    } else {
                        this.setProtocol(null);
                    }

                    //subdomain
                    if (regexResult[2]) {
                        this.setSubdomain(regexResult[2]);
                    } else {
                        this.setSubdomain(null);
                    }

                    //domain
                    if (regexResult[3]) {
                        this.setDomain(regexResult[3] + (regexResult[4] ? '.' + regexResult[4] : ''));
                    } else {
                        this.setDomain(null);
                    }



                    //path
                    if (regexResult[5]) {
                        this.setPath(regexResult[5]);
                    } else {
                        this.setPath(null);
                    }

                    //query
                    if (regexResult[6]) {
                        this.setQuery(regexResult[6]);
                    } else {
                        this.setQuery(null);
                    }

                    //Anchor
                    if (regexResult[7]) {
                        this.setAnchor(regexResult[7]);
                    } else {
                        this.setAnchor(null);
                    }
                }

                return this;
            };

            this.getProtocol = function() {
                return this._protocol;
            };

            this.getSubdomain = function() {
                return this._subdomain;
            };

            this.getDomain = function() {
                return this._domain;
            };

            this.getPath = function() {
                return this._path;
            };

            this.getQuery = function() {
                return this._query;
            };

            this.getAnchor = function() {
                return this._anchor;
            };

            this.setProtocol = function(protocol) {
                this._protocol = protocol;
                return this;
            };

            this.setSubdomain = function(subdomain) {
                this._subdomain = subdomain;
                return this;
            };

            this.setDomain = function(domain) {
                this._domain = domain;
                return this;
            };

            this.setPath = function(path) {
                this._path = path;
                return this;
            };

            this.setQuery = function(query) {
                this._query = query;
                return this;
            };

            this.setAnchor = function(anchor) {
                this._anchor = anchor;
                return this;
            };

            this.printURL = function() {
                return this._protocol + '://' + this._subdomain + '.' + this._domain + (this._path ? this._path : '') + (this._query ? '?' + this._query : '') + (this._anchor ? '#' + this._anchor : '');
            };
            return this;
        });
})(window, window.angular);
