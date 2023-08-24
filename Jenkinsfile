#!groovy

properties([disableConcurrentBuilds()])

pipeline {
    agent any
    stages {
        stage("Setup environment"){
            steps {
                script {
                    def gitBranch = "${GIT_BRANCH}".replace("/", "-")
                    if (gitBranch == "main") {
                        env.PROJECT_NAME = "time-manager-frontend"
                    } else {
                        env.PROJECT_NAME = "${gitBranch}-time-manager-frontend"
                    }
                }
            }
        }
        stage("Build and up") {
            steps {
                sh 'docker-compose -f docker-compose.prod.yml -p $PROJECT_NAME up -d --build --remove-orphans'
            }
        }
    }
}
