# canvas.js
Simple boilerplate for HTML5 canvas projects. 🖼

## Example
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
    
    <script src="https://raw.githack.com/famiclone/canvas.js/master/index.js"></script>
    
    <script>
      const myCanvas = new Canvas('#root', { width: 500, height: 500 })
      const { canvas, ctx } = myCanvas

      let counter = 0
      let count = 0

      const func = (deltaTime) => {
        ctx.fillStyle = '#000'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        ctx.fillStyle = '#fff'
        ctx.font = '100px serif'

        counter += deltaTime

        if (counter > 1000) {
          count += 1
          counter = 0
          console.log(count)
        }
        ctx.fillText(count, 30, 100)
      }

      myCanvas.run(func)
    </script>
  </body>
</html>
```
