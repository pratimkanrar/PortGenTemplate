import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Main} from './Main';
import {Works} from './Works';
import {Qualification} from './Qualification';
import {Achievements} from './Achievements';
import {Skills} from './Skills';
import 'semantic-ui-css/semantic.min.css';

class App extends Component{
  userdata = {
    'email': 'kanrar.pratim@gmail.com',
    'github': 'https://github.com/pratimkanrar',
    'linkedin': 'https://www.linkedin.com/in/pratim-kanrar-ba99381a4/',
    'mobile': '+91 8609401561',
    'metas': {
      'name': 'Pratim Kanrar',
      'about': 'Passionate, eager to learn new things and willing to work on challenging projects.',
      'achievements': [{
        'description': 'KVPY Fellowship (SA)',
        'date': '2016'
      },
      {
        'description': 'JBNSTS (Junior Talent Search) Encouragement Award',
        'date': '2016'
      }
    ],
      'qualifications': [{
        'name': 'B. Tech.',
        'institution': 'IIEST, Shibpur',
        'grade': 'CGPA - 8.26 (Upto 4th semester)',
        'startdate': '28/07/2018',
        'enddate': 'Pursuing',
        'field': 'Computer Science & Technology'
      },
    {
        'name': 'Higher Secondary',
        'institution': 'Bagnan High School',
        'grade': 'Percentage - 92.20',
        'startdate': '2016',
        'enddate': '2018',
        'field': 'Science'
      },
      {
          'name': 'Secondary',
          'institution': 'Bagnan High School',
          'grade': 'Percentage - 91.86',
          'startdate': '2015',
          'enddate': '2016',
          'field': 'General'
        }
    ],
      'works': [{
        'name': 'Covid-19 Tracker',
        'description': 'It is a Client side app that provides details about current cases of COVID-19 worldwide made using React js. The app has been deployed at heroku using Express js as the backend framework.',
        'technology': 'React js, Node js',
        'code': 'https://github.com/pratimkanrar/covid19_tracker/',
        'link': 'https://covid19records.herokuapp.com/'
      },
      {
        'name': 'Penetration Testing Tools using Python',
        'description': 'It is a bunch of penetration testing tools made using python. The more I learn about penetration testing and cyber security, I’ll go on continuing this project.',
        'technology': 'Python 2, Python 3',
        'code': 'https://github.com/pratimkanrar/Hacking_tools/',
        'link': ' - '
      },
      {
        'name': 'A Fully Rigged Blender Character',
        'description': 'An animated character with a full bone system made with Blender 2.8.',
        'technology': 'Blender 2.8',
        'code': 'https://github.com/pratimkanrar/blender_character/',
        'link': ' - '
      }
    ],
    'skills': ['C++ - Advanced', 'Ethical Hacking - Intermediate', 'Web Application Security - Intermediate', 'React js - Intermediate', 'HTML - Intermediate', 'CSS - Intermediate', 'Javascript - Intermediate', 'Synfony - Beginner', 'Laravel - Intermediate', 'C - Intermediate', 'Python - Beginner', 'Blender - Intermediate', 'PHP - Intermediate', 'Vue js - Beginner'],
    'photoURI': 'pratim.jpg'
    }
  };
  render(){
    return (
        <Router>
          <Switch>
            <Route path="/" exact>
              <Main userdata={this.userdata}/>
            </Route>
            <Route path="/education">
              <Qualification userdata={this.userdata}/>
            </Route>
            <Route path="/work">
              <Works userdata={this.userdata}/>
            </Route>
            <Route path="/achievement">
              <Achievements userdata={this.userdata}/>
            </Route>
            <Route path="/skill">
              <Skills userdata={this.userdata}/>
            </Route>
          </Switch>
        </Router>
    );
  }
}

export default App;
