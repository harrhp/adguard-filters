FROM node:19.5.0-bullseye

RUN npm install -g @adguard/hostlist-compiler && npm cache clean --force

ENTRYPOINT [ "hostlist-compiler" ]