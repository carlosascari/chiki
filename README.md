```
{{title}}(1)                     User Manual                     {{title}}(1)


NAME
     {{host}} - A tiny url shortener

SYNOPSIS
     GET {{host}}/
     GET {{host}}/add/URL_TO_SHORTEN...
     GET {{host}}/SHORTENED_URL_HASH...

DESCRIPTION
     {{host}} is a tiny open source url shortening service written
     in nodejs JavaScript. Shortening a url is fast & convinient
     as you don't spend your time visiting this site,   you  can
     just add the url after the endpoint: {{host}}/add and it will
     give you a smaller url.

OPTIONS

     /             Manual (this page)

     /add/:url     Shorten a new url, returns shortened link.
                   Returns status 400, if :url is invalid
                   Returns status 500, if something goes wrong
                   Returns status 200, if a shortened url was 
                   created. The shortened url can be found in
                   the body, copy & paste ready.

     /:hash        Where :hash is the returned hash after 
                   shortening a url.
                   Returns status 400, if :hash is invalid
                   Returns status 404, if hash was never created
                   Returns status 500, if something goes wrong
                   Returns status 302, and redirects to the
                   original shortened url if :hash is valid.

AUTHOR
     Carlos Ascari Gutierrez Hermosillo <carlos.ascari.x@gmail.com>

REPOSITORY
     github.com/carlosascari/chiki

COPYRIGHT
     MIT License. Copyright (c) 2016 Ascari 
      
     Permission is hereby granted, free of charge, to any person
     obtaining a copy of this software and associated documentation
     files (the "Software"), to deal in the Software without
     restriction, including without limitation the rights to use,
     copy, modify, merge, publish, distribute, sublicense, and/or
     sell copies of the Software, and to permit persons to whom the
     Software is furnished to do so, subject to the following
     conditions:

     The above copyright notice and this permission notice shall be
     included in all copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
     OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
     NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
     HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
     WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
     OTHER DEALINGS IN THE SOFTWARE.
```