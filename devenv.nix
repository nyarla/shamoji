{
  ...
}:
{
  languages.typescript.enable = true;
  languages.javascript.enable = true;
  languages.javascript.bun.enable = true;

  enterTest = ''
    bun test
  '';
}
