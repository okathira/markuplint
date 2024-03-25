FROM node:21.7

COPY . /markuplint

WORKDIR /markuplint
# node image have installed yarn on global already
# RUN npm install yarn
# yarn on global
RUN yarn install
# there is no npm script named `install`
# RUN yarn run install
RUN yarn run build
# the file has renamed
RUN cd /usr/bin && ln -s /markuplint/packages/markuplint/bin/markuplint.mjs

ENTRYPOINT ["markuplint.mjs"]
