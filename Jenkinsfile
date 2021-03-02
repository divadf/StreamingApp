pipeline {
    agent ant
    stages {
        stage('DEV') {
            steps {
                echo 'Testing DEV'
            }
        }
    }
    post { 
        always { 
            echo 'Include'
        }
    }
}
