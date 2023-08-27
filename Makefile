update:
	git pull -f
	docker compose -f docker-compose-production.yml up -d --build

dev :
	docker compose up -d --build

prod:
	docker compose -f docker-compose-production.yml up -d --build