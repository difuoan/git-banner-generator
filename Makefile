init: # initialise the env
	cp -n .env.example .env

up: # start the container
	docker compose up -d

start: up # start the container

down: # end the container
	docker compose down --remove-orphans

stop: down # end the container

tail: # echo logs
	docker compose logs -f

build: # build image
	docker compose build --no-cache

restart: down up # restart container

clear: # destroy environment
	rm .env

ps: # print all docker containers
	docker compose ps

login: # open bash in container
	docker compose exec --user node bannergen bash