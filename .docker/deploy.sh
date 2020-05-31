#!/usr/bin/env bash
docker-compose -f /drone/src/docker-compose.yml config > /drone/src/docker-compose.processed.yml
docker stack deploy -c /drone/src/docker-compose.processed.yml personal-site
