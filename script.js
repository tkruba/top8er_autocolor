// You can define your own game settings
// Replace HEX color codes

const gameSettings = {
	smash: {
		layout: {
			color: '#000000',
			highlight: '#FFFFFF'
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
	},
	sf: {
		layout: {
			color: '#FFFFFF',
			highlight: '#000000'
		},
		font: {
			player: {
				color: '#FFFFFF',
				shadow: '#000000'
			},
			extra: {
				color: '#FFFFFF',
				shadow: '#000000'
			}
		}
	}
};

function applyColorSettings(gs) {
	
	// Layout
	const mainLayout = document.getElementById('id_lcolor1');
	mainLayout.value = gs.layout.color;
	const highlightLayout = document.getElementById('id_lcolor2');
	highlightLayout.value = gs.layout.highlight;
	
	// Font Player
	const textPlayer = document.getElementById('id_fcolor1');
	textPlayer.value = gs.font.player.color;
	const shadowPlayer = document.getElementById('id_fscolor1');
	shadowPlayer.value = gs.font.player.shadow;
	
	// Font Extra
	const textExtra = document.getElementById('id_fcolor2');
	textExtra.value = gs.font.extra.color;
	const shadowExtra = document.getElementById('id_fscolor2');
	shadowExtra.value = gs.font.extra.shadow;
}

// use gameSettings.<yourgame>

applyColorSettings(gameSettings.<yourgame>);