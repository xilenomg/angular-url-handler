# Angular URL Handler

Node URL Handler help you to handle URL as strings for AngularJS. Once you have a URL stored as string, you can use this Module to get:
 - get/set Protocol
 - get/set Subdomain
 - get/set Domain
 - get/set Path
 - get/set Query
 - get/set Anchors
 - get Full URL

 ## How to use
 var myApp = angular.module('drLavaTudoApp', ['angular-url-handler']);
 
 myApp.controller('MyController',[ 'urlHandlerService', function(urlHandlerService){
 	var path = urlHandlerService.setURL('http://www.mydomain.com/path/to/folder?query=query#anchor').getPath();
 	var query = urlHandlerService.setURL('http://www.mydomain.com/path/to/folder?query=query#anchor').getQuery();
 	var anchor = urlHandlerService.setURL('http://www.mydomain.com/path/to/folder?query=query#anchor').getAnchor();
 	var protocol = urlHandlerService.setURL('http://www.mydomain.com/path/to/folder?query=query#anchor').getProtocol();
 	var subdomain = urlHandlerService.setURL('http://www.mydomain.com/path/to/folder?query=query#anchor').getSubdomain();
 	var domain = urlHandlerService.setURL('http://www.mydomain.com/path/to/folder?query=query#anchor').getDomain();
 }]);

 ## Feel free to use
 It's allowed for you to use in any case.

 ## Please send the bugs or Pull request them
Bugs may exist. Please send it to me or send your bug fix.

## Thank you

##### Author
- Luis Felipe Corrêa Pérez