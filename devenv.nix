{ pkgs, ... }: {
  packages = with pkgs; [ bun ];
  processes.serve.exec = ''
    bun run bin/serve.ts
  '';
}
