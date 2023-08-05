#!groovy

properties([disableConcurrentBuilds()])

pipeline {
    agent any

    stages {
        stage("Build and run") {
            steps {
                sh 'docker-compose -f ./docker-compose.prod.yml up -d --build --remove-orphans'
            }
        }
    }
}
