include ../Makefile.mk

URL := "https://github.com/google/fonts/raw/main/ofl/notosansjp/NotoSansJP%5Bwght%5D.ttf"

.PHONY: variations

all: fetch variations

variations:
	@$(MAKE) variation NAME=Thin WEIGHT=100
	@$(MAKE) variation NAME=ExtraLight WEIGHT=200
	@$(MAKE) variation NAME=Light WEIGHT=300
	@$(MAKE) variation NAME=Regular WEIGHT=400
	@$(MAKE) variation NAME=Medium WEIGHT=500
	@$(MAKE) variation NAME=SemiBold WEIGHT=600
	@$(MAKE) variation NAME=Bold WEIGHT=700
	@$(MAKE) variation NAME=ExtraBold WEIGHT=800
	@$(MAKE) variation NAME=Black WEIGHT=900
