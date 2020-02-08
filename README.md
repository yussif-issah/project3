# project3
the main building blocks are the udacity-frontend,udacity-c3-restapi-feed and udacity-c3-restapi-user,
inside the docker folder ,all the docker images of these services can be built and turned to microservices.also from the dockerhub repo,all the 
images can be pulled and built .After which it can be deployed on kubernetes cluster.
Navigate to the deployment folder ,then into docker folder and run : docker-compose up .This should be done after all the images pulled from the dockerhub
repo has been built.
Now navigate back to k8s and run : kubectl apply -f backend-feed-services.yaml ,do this for all file with the service name attached.
now you can deploy the app on kubernetes cluster by running :kubectl apply -f reverseproxy-deployment.yaml , do this with all files with deployment
attached to the file name.

docker images url:
hayatu88/reverseproxy:latest
hayatu88/udacity-c3-frontend:latest,
hayatu88/udacity-c3-restapi-feed:latest,
hayatu88/udacity-c3-restapi-user:latest
