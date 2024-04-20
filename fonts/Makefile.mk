.PHONY: fetch variation

fetch:
	which curl 2>&1 1>/dev/null || (echo 'This task requires "curl" command' >&2 ; exit 1)
	curl -L -o font.ttf $(URL)

variation:
	which fonttools 2>&1 1>/dev/null || (echo 'This task requires "fonttools" command' >&2; exit 1)
	fonttools varLib.mutator font.ttf wght=$(WEIGHT)
	mv font-instance.ttf font-$(NAME).ttf
