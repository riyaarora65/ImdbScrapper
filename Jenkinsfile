pipeline {
  agent any
   stages {
    stage('Install dependencies'){
      steps{
          sh 'node --version'
          sh 'npm install'
      }
    }
    stage('SonarQube analysis'){
      steps {
        sh 'npm run sonar'
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
  post {
    always{
      deleteDir()
    }
  }
}