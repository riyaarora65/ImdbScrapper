pipeline {
  agent {
    dockerfile {
      label "us-east-1 && env-dev"
      filename 'Dockerfile.agent'
    }
  }
   stages {
    stage('SCM') {
      steps {
        git 'https://github.com/riyaarora65/ImdbScrapper.git'
      }
    }
    stage('Build Docker image'){
      steps{
          milestone(10)
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