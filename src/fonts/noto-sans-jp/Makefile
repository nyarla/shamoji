Thin := 100
ExtraLight := 200
Light := 300
Regular := 400
Medium := 500
SemiBold := 600
Bold := 700
ExtraBold := 800
Black := 900

all: \
	font-Thin.ttf \
    font-ExtraLight.ttf \
    font-Light.ttf \
    font-Regular.ttf \
    font-Medium.ttf \
    font-SemiBold.ttf \
    font-Bold.ttf \
    font-ExtraBold.ttf \
    font-Black.ttf

clean:
	rm *.ttf

font.ttf:
	@which curl 2>&1 1>/dev/null || (echo 'curl is not found.' >&2 ; exit 1)
	@curl -L -o $(@) "https://github.com/google/fonts/raw/main/ofl/notosansjp/NotoSansJP%5Bwght%5D.ttf"

font-%.ttf: font.ttf
	@which fonttools 2>&1 1>/dev/null || (echo 'fonttools is not found' >&2 ; exit 1)
	@fonttools varLib.mutator font.ttf wght=$($*)
	@mv font-instance.ttf font-$(*).ttf
