export const EXAMPLE_CODE_HTML =
`<!DOCTYPE html>
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

export const EXAMPLE_CODE_TYPESCRIPT =
`enum CompassDirection {
  North,
  East,
  South,
  West,
}

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

const endDirection = CompassDirection.None;

const startingDirection = CompassDirection.East;
const currentStatus = StatusCodes.OK;

const okNumber = StatusCodes.OK;
const okNumberIndex = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];

enum GamePadInput {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

const enum MouseAction {
  MouseDown,
  MouseUpOutside,
  MouseUpInside,
}

const handleMouseAction = (action: MouseAction) => {
  switch (action) {
    case MouseAction.MouseDown:
      console.log("Mouse Down");
      break;
  }
};
`
