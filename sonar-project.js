const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://13.126.62.92:9000/',
       options : {
       'sonar.sources': '.',
       'sonar.inclusions' : 'src/**' 
       },
}, () => {});
