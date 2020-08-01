.PHONY: build
build:
	docker-compose build
	docker-compose run --rm --no-deps app yarn

.PHONY: compile
compile:
	docker-compose run --rm --no-deps app yarn compile

.PHONY: lint
lint:
	docker-compose run --rm --no-deps app yarn lint

.PHONY: start
start:
	docker-compose up -d

.PHONY: stop
stop:
	docker-compose down
