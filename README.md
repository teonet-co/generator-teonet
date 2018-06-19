# Teonet server native C/C++ application generator [![NPM version][npm-image]][npm-url]

Yeoman generator to create new Teonet server native C/C++ application. The Teonet 
Server application can execute under Linux or Mac OS only. This readme file 
shows terminal commands for Debian, Ubuntu or Linux Mint.

## Dependences


*To install global npm components without sudo change node modules folders ownership:

    sudo chown -R $USER /usr/local/lib/node_modules

### Install the Yeoman:

    npm install -g yo


### Install teonet library

### Ubuntu

    http://repo.ksproject.org/ubuntu/

#### Add repository

Add repository key:  

    sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 8CC88F3BE7D6113C
    
Add repository:    

    sudo apt-get install -y software-properties-common
    sudo add-apt-repository "deb http://repo.ksproject.org/ubuntu/ teonet main"
    
or add the following line to your /etc/apt/sources.list:  

    deb http://repo.ksproject.org/ubuntu/ teonet main
    
Update repositories database:    
    
    sudo apt-get update

#### Install library

    sudo apt-get install -y libteonet-dev

#### Check installation

    teovpn -?


## Install this generator

    npm install -g generator-teonet


## Generate new Teonet application

    yo teonet


## Compile your application

    ./autogen.sh
    make


## Run your application

    src/APPNAME teo-APPNAME


<hr>

## Developer Notes

### Some Teonet documentation
  
Teonet developer documentation:  
http://repo.ksproject.org/docs/teonet/
  
Teonet events:  
http://repo.ksproject.org/docs/teonet/ev__mgr_8h.html#ad7b9bff24cb809ad64c305b3ec3a21fe


#### Publish project to NPM

If you haven't already set your NPM author info, now you should:

    npm set init.author.name "Your Name"
    npm set init.author.email "you@example.com"
    npm set init.author.url "http://yourblog.com"
    
    npm adduser

Publish project to NPM:

    npm publish ./


## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

Apache-2.0 © [Kirill Scherba](https://github.com/kirill-scherba)


[npm-image]: https://badge.fury.io/js/generator-teonet.svg
[npm-url]: https://npmjs.org/package/generator-teonet
[travis-image]: https://travis-ci.org//generator-teonet.svg?branch=master
[travis-url]: https://travis-ci.org//generator-teonet
[daviddm-image]: https://david-dm.org//generator-teonet.svg?theme=shields.io
[daviddm-url]: https://david-dm.org//generator-teonet
[coveralls-image]: https://coveralls.io/repos//generator-teonet/badge.svg
[coveralls-url]: https://coveralls.io/r//generator-teonet
