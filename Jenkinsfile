pipeline {
  agent any
   stages {
    stage('Install dependencies'){
      steps{
          sh 'node --version'
          sh 'npm install'
      }
    }
    stage('SonarQube analysis') {
        steps {
            scannerHome = tool 'sonarqube'
            withSonarQubeEnv('sonarqube') { // If you have configured more than one global server connection, you can specify its name
                sh "${scannerHome}/bin/sonar-scanner"
            }
        }
    }
    stage('Quality Gate'){
      steps {
                timeout(time: 1, unit: 'HOURS') {
                    // Parameter indicates whether to set pipeline to UNSTABLE if Quality Gate fails
                    // true = set pipeline to UNSTABLE, false = don't
                    waitForQualityGate abortPipeline: true
                }
            }  
        }
   }
}