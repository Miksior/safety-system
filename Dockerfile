FROM postgres

ENV POSTGRES_PASSWORD=master
ENV POSTGRES_DB=database

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432
