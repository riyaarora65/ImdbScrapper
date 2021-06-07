node{
    stage('SCM'){
        git 'https://github.com/riyaarora65/ImdbScrapper'
    }
    stage('SonarQube analysis'){
        def scannerHome = tool 'sonarqube' 
        withSonarQubeEnv('sonarqube'){
            sh "${scannerHome}/bin/sonar-scanner "
        }
    }
    stage("Quality Gate"){
          timeout(time: 1, unit: 'HOURS') {
            def qg = waitForQualityGate()
            if (qg.status != 'OK') {
              error "Pipeline aborted due to quality gate failure: ${qg.status}"
            }
    }
}
}