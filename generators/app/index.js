/*
 * The Apache-v2.0 License (Apache-v2.0)
 * 
 * Copyright 2016 Kirill Scherba <kirill@scherba.ru>
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


'use strict';

var generators = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

module.exports = generators.Base.extend({
    
  prompting: function () {
      
    // Have Yeoman greet the user.
    this.log(yosay(
        'This is the awesome and amazing ' + chalk.red('TEONET-SERVER-NATIVE-C') + ' generator!'
    ));
    
    //Get array of inputs from the user
    var prompts = [
    {
        type: 'input',
        name: 'name',
        message: 'What would you love to name this project (lowercase name of application executable file)?',
        default: 'teoapp' //this.appname
    },
    {
        type: 'input',
        name: 'version',
        message: 'This project version',
        default: "0.0.1",
        store: true
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe the project',
        default: "Teonet server native C"
    },
    {
        type: 'input',
        name: 'repository',
        message: 'What is the project\'s repository?',
        default: "No repository yet"
    },
    {
        type: 'input',
        name: 'author',
        message: 'Author name',
        default: "Application Author",
        store: true
    },
    {
        type: 'input',
        name: 'email',
        message: 'Author email',
        default: "email@example.com",
        store: true
    },
    {
        type: 'input',
        name: 'license',
        message: 'How would you love to license the project?',
        default: "MIT",
        store: true
    }];

    return this.prompt(prompts).then(function (props) {
        
        function capitalize(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        };

        this.props = props; // To access props later use this.props.name;
        this.props.name_capitalize = capitalize(this.props.name);
        this.props.name_upper = this.props.name.toUpperCase();        

    }.bind(this));
    
  },
  
  writing: {  
      
    // Copy the confuguration files
    config: function () {
        
        // Copy config files here
        
    },

    // Copy the application files
    app: function () {
      
      this.fs.copyTpl(
          this.templatePath('./'),
          this.destinationPath('./'), {
            name: this.props.name,
            name_upper: this.props.name_upper,
            name_capitalize: this.props.name_capitalize,
            description: this.props.description,
            version: this.props.version,
            repository: this.props.repository,
            author: this.props.author,
            email: this.props.email,
            license: this.props.license
          }
      );
    }
  },

  // Install dependencies
  install: function () {
      
    console.log(
        "\n\nThe new teonet Application was created. Add this project to" +
        " your git repository.\n" +
        "Then run " + chalk.yellow("./autogen.sh") + " to prepare configure, " +
        "then execute " + chalk.yellow("make") + " files,\n" + 
        "and execute your application with " + chalk.yellow("src/" + this.props.name + " teo-app") + " command\n" + 
        "\n");
  }

});
