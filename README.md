# Air frontend

# Installation instructions

1) Clone the repository from github (https://github.com/Ierofantis/mobitair_frontend.git) using your client or git command line (git clone https://github.com/Ierofantis/mobitair_frontend.git)
2) Open your terminal and type  `git clone https://github.com/Ierofantis/mobitair_frontend.git `

# Important things to check before you continue

  a) Open the project with your code/text editor and rename the .env.example file to .env
  b) Check the renamed .env file if It contains the correct host.For example in the docker toolbox for windows the published ip host is the internal ip of your machine like: 
  `http://192.xxx.xx.xxx:3000/` but in linux/mac is like: `http://127.0.0.1:3000/`. So change it according to your machines exported docker host

3) When the clone process ends navigate to mobitar_backend `cd mobitair_frontend/dashboard`
4) Now type `docker-compose up` to start the containers

5) When the process ends(It will take a while) open your browser and navigate to `my_host:3000`
