# Teonet server native C application generator [![NPM version][npm-image]][npm-url]

Yeoman generator to create new Teonet server native C application. The Teonet 
Server application can execute under Linux or Mac OS only. This readme file 
shows terminal commands for Debian, Ubuntu or Linux Mint.

## Dependences


*To install global npm components without sudo change node modules folders ownership:

    sudo chown -R $USER /usr/local/lib/node_modules

Install the Yeoman:

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

    npm install -g generator-teonet-node


## Generate new teonet-node application

    yo teonet

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

Apache-2.0 © [Kirill Scherba](https://gitlab.ksproject.org)


[npm-image]: https://badge.fury.io/js/generator-teonet-wk.svg
[npm-url]: https://npmjs.org/package/generator-teonet-wk
[travis-image]: https://travis-ci.org//generator-teonet-wk.svg?branch=master
[travis-url]: https://travis-ci.org//generator-teonet-wk
[daviddm-image]: https://david-dm.org//generator-teonet-wk.svg?theme=shields.io
[daviddm-url]: https://david-dm.org//generator-teonet-wk
[coveralls-image]: https://coveralls.io/repos//generator-teonet-wk/badge.svg
[coveralls-url]: https://coveralls.io/r//generator-teonet-wk
