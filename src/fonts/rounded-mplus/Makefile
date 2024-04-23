all: unpack

rounded-mplus.7z:
	curl -L -o rounded-mplus.7z https://ftp.iij.ad.jp/pub/osdn.jp/users/8/8569/rounded-mplus-20150529.7z

rounded-x-mplus.7z:
	curl -L -o rounded-x-mplus.7z https://ftp.iij.ad.jp/pub/osdn.jp/users/8/8570/rounded-x-mplus-20150529.7z

rounded-l-mplus.7z:
	curl -L -o rounded-l-mplus.7z https://ftp.iij.ad.jp/pub/osdn.jp/users/8/8568/rounded-l-mplus-20150529.7z

unpack: rounded-mplus.7z rounded-x-mplus.7z rounded-l-mplus.7z
	echo A | 7z x rounded-mplus.7z
	echo A | 7z x rounded-x-mplus.7z
	echo A | 7z x rounded-l-mplus.7z
