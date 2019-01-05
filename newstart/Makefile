CFLAGS = \
	-O3 \
	--bind \
	-Wall \
	-Werror \
	-Wall \
	-Wno-deprecated \
	-Wno-parentheses \
	-Wno-format

WASM_OPTIONS = \
	-O3 \
	--bind \
	--memory-init-file 0 \
	--llvm-lto 3 \
	--llvm-opts 3 \
	--js-opts 1 \
	--closure 1 \
	-s MODULARIZE=1 \
	-s ALLOW_MEMORY_GROWTH=1 \
	-s AGGRESSIVE_VARIABLE_ELIMINATION=1 \
	-s ABORTING_MALLOC=1 \
	-s NO_EXIT_RUNTIME=1 \
	-s NO_FILESYSTEM=1 \
	-s DISABLE_EXCEPTION_CATCHING=2 \
	-s BINARYEN=1 \
	-s EXPORTED_RUNTIME_METHODS=[\'UTF8ToString\'] \
	-s BINARYEN_TRAP_MODE=\'allow\'

WASM_OPTIONS2 = \
	-O3 \
	--bind \
	--memory-init-file 0 \
	--llvm-lto 3 \
	--llvm-opts 3 \
	--js-opts 1 \
	--closure 1 \
	-s MODULARIZE=1 \
	-s ALLOW_MEMORY_GROWTH=1 \
	-s AGGRESSIVE_VARIABLE_ELIMINATION=1 \
	-s ABORTING_MALLOC=1 \
	-s NO_EXIT_RUNTIME=1 \
	-s NO_FILESYSTEM=1 \
	-s DISABLE_EXCEPTION_CATCHING=2 \
	-s BINARYEN=1 \
	-s EXPORTED_RUNTIME_METHODS=[\'UTF8ToString\'] \
	-s BINARYEN_TRAP_MODE=\'allow\' \
	-s EXPORTED_FUNCTIONS=[\'_showPtr\'] \
	-s EXTRA_EXPORTED_RUNTIME_METHODS=[\'cwrap\']

compiled/tt.bc: tt.cpp
	emcc \
		$(CFLAGS) \
		tt.cpp \
		-o $@

all: compiled/tt.bc
	emcc \
		$(WASM_OPTIONS2) \
		compiled/tt.bc \
		-o tt.js

bind: compiled/bind.bc
	emcc \
		$(WASM_OPTIONS) \
		compiled/bind.bc \
		-o bind.js

compiled/bind.bc: 
	emcc \
		$(CFLAGS) \
		bind.cpp \
		-o $@

clean: 
	rm -rf ./compiled/
