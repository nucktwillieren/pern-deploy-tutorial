OWNER := nucktwillieren
RELEASE_TAG := pern-tutorial-backend/1.0.0
APP_NAME := $(shell echo $(RELEASE_TAG) | cut -d'/' -f1)
VERSION := $(shell echo $(RELEASE_TAG) | cut -d'/' -f2)
PACKAGE_NAME := $(OWNER)/$(APP_NAME)

.PHONY: build-and-push-all

build-version:
	docker build --build-arg app_name=$(APP_NAME) -t wuretks.azurecr.io/$(PACKAGE_NAME):$(VERSION)  .

tag-latest:
	docker tag wuretks.azurecr.io/$(PACKAGE_NAME):$(VERSION) wuretks.azurecr.io/$(PACKAGE_NAME):latest

build-and-tag: build-version tag-latest

start:
	docker run -it --rm $(PACKAGE_NAME):$(VERSION) /bin/bash

push-version:
	docker push wuretks.azurecr.io/$(PACKAGE_NAME):$(VERSION)

push-latest:
	docker push wuretks.azurecr.io/$(PACKAGE_NAME):latest

push-all: push-version push-latest

build-and-push-all: build-version tag-latest push-all
