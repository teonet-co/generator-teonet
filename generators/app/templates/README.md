# <%= description %> application

## 1. Description



## 2. Installation

### Install project with submodules

    git clone <%= repository %>
    cd <%= name %>
    git submodule update --init

### Install Dependences


#### Libteonet:

    See [4. Install Teonet library from repositories](#4-install-teonet-library-from-repositories)

#### OpenSSL

    \todo Add description

## 3. Generate your application sources (first time when got sources from repository)

    ./autogen.sh

## 4. Install Teonet library from repositories

DEB / RPM repository: http://repo.ksproject.org

### UBUNTU

http://repo.ksproject.org/ubuntu/

#### Add repository

    sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 8CC88F3BE7D6113C
    sudo apt-get install -y software-properties-common
    sudo add-apt-repository "deb http://repo.ksproject.org/ubuntu/ teonet main"
    sudo apt-get update

#### Install

    sudo apt-get install -y libteonet-dev


### CENTOS / RHEL / FEDORA

http://repo.ksproject.org/rhel/x86_64/

#### Add repository

    vi /etc/yum.repos.d/teonet.repo

    [teonet]
    name=Teonet library for RHEL / CentOS / Fedora
    baseurl=http://repo.ksproject.org/rhel/x86_64/
    enabled=1
    gpgcheck=0

#### Refresh

    # yum clean all

#### Install

    yum install libteonet
    ldconfig 

### SUSE

#### Add repository

    zypper ar -f http://repo.ksproject.org/opensuse/x86_64/ teonet

#### Install
    
    zypper in -y libteonet
    ldconfig


## 5. Make your application 

    make

## 5.1 Using autoscan to Create configure.ac

After make some global changes in sources code use ```autoscan``` to update projects 
configure.ac

## 6. Run 
    
    src/<%= name %> <%= name %>

## 7. Teonet documentation

See teonet documentation at: http://repo.ksproject.org/docs/teonet/
