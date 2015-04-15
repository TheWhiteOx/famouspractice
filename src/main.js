/*global famous*/
// import dependencies
var Engine = famous.core.Engine;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;
var ImageSurface = famous.surfaces.ImageSurface;
var surface = famous.core.Surface;

var Draggable = famous.modifiers.Draggable;

// create the main context
var mainContext = Engine.createContext();

var testSurface = new surface({
  size: [200,400],
  content: 'lollerskates!',
  properties: {
    color: 'orange',
    textAlign: 'center',
    backgroundColor: '#292E37  '

  }
});

// your app here
var logo = new ImageSurface({
    size: [300, 300 ],
    content: 'http://www.firebirdsql.org/file/about/firebird-logo-300.png',
    classes: ['double-sided']
});

// var modifierTransform = new Modifier({
//   size: [200, 200],
//   opacity: 0.8,
//   align: [0.5, 0.5],
//   origin: [0.5, 0.5]
// });

// var counter = 0;
// modifier.transformFrom(function() {
//   var scaleX = Math.sin(counter++ / 20);
//   var scaleY = Math.cos(counter / 40)
//   return Transform.scale(scaleX, scaleY);
// });

var initialTime = Date.now();
var centerSpinModifier = new Modifier({
    origin: [0.5, 0.5],
    align: [0.5, 0.5],
    transform : function () {
        return Transform.rotateY(.003 * (Date.now() - initialTime));
    }
});

// surface.pipe(draggable);
mainContext.add(Draggable).add(centerSpinModifier).add(logo).add(testSurface);
mainContext.add(testSurface).add(Draggable);
