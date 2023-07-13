
# Top8er autocolor

Work on https://www.top8er.com

Automating color settings using javascript

Use it through a browser extension



## Schema

Define a gameSettings object like this

```javascript
const gameSettings = {
	smash: {
		layout: {
			color: '#1FBB1A',
			highlight: '#1A1A1A'
		},
		font: {
			player: {
				color: '#FFFFFF',
				shadow: '#000000'
			},
			extra: {
				color: '#000000',
				shadow: '#000000'
			}
		}
	}
};
```

To select your game's settings:

```javascript
applyColorSettings(gameSettings.<yourgame>); → applyColorSettings(gameSettings.smash);
```

