# Astro / Wordpress Docker-Compose setup
This is an Astro-based headless WordPress setup. It takes advantage of [WPGraphQL](https://www.wpgraphql.com/) and Astro's server-side frontmatter to dynamically build the content before sending the response. Easy setup and easy developing. See an online demo [here](https://astro-wordpress.changeprogramming.com).

The idea is to make the website easier for the dev, yet provide the familiarity of WordPress for whomever manages the content.

## Why I Think It's Awesome
I love Astro, given it's quirkiness! The SSR performance gains made me think of my [WordPress Docker repo](https://github.com/RyanHarrigan/generic_webapp_docker) from ages ago and how I could make a more performant and production-worthy setup. Since the site is SSR'd the frontend doesn't have any reference to the WordPress backend.

## Installation
1) Copy the `.env.sample` in the root and populate the appropriate values
2) Install Docker Compose 2.22.0+, usually through [Docker Desktop](https://www.docker.com/products/docker-desktop/)
2) Clone this repo
3) Run `docker-compose up -d`

Upon build, the WordPress site will need to be initialized. Go to [http://localhost:8080](http://localhost:8080). The current GraphQL setup uses categories as links and posts under those categories for lists.

## Developing with Astro
This development setup uses Docker Compose's [File Watch](https://docs.docker.com/compose/file-watch/), so make sure you have Docker-Compose version 2.22.0 and up. Uncommenting the `entrypoint` tells Astro to work in dev mode. Note that Astro watches files only in [its project structure](https://docs.astro.build/en/basics/project-structure), and you may have to rebuild the container if you need Astro to pick up another file.  

1) Uncomment the `entrypoint` line in `docker-compose.yaml`'s `astro` service
2) Run `docker-compose stop` if the cluster is already running (see `docker ps`). Run `docker-compose up --watch --build`. (`ctrl+c` to stop)
3) Note that all SSR'd console logs will show up in the docker logs
