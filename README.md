```
CHIKI(1)                     User Manual                     CHIKI(1)


NAME
    chi.ki - A tiny url shortener

SYNOPSIS
    GET chi.ki/
    GET chi.ki/add/URL_TO_SHORTEN...
    GET chi.ki/SHORTENED_URL_HASH...

DESCRIPTION
     chi.ki is a tiny open source url shortening service written
     in nodejs JavaScript. Shortening a url is fast & convinient
     as you don't spend your time visiting this site,   you  can 
     just add the url after the endpoint: chi.ki/add and it will 
     give you a smaller url.

OPTIONS

     /              Manual (this page)

     /add/:url     Shorten a new url, returns shortened link.
                   Returns status 400, if :url is invalid
                   Returns status 500, if something goes wrong
                   Returns status 200, and the shortened url  in
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

LICENSE
     MIT
```