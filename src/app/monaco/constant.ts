export const EXAMPLE_CODE_HTML = `
<!DOCTYPE html>
<html>
<head>
  <title>Monarch Workbench</title>

  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <!-- a comment
  -->
  <style>
    body { font-family: Consolas; } /* nice */
  </style>
</head>
<body>
  <div class="test">
    <script>
      function() {
        alert("hi </script>"); // javascript
      };
    </script>
    <script type="text/x-dafny">
      class Foo {
        x : int;
        invariant x > 0;
      };
    </script>
  </div>
</body>
</html>
`
