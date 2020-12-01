
					async function getFreeChamps(){
						const ApiKey = 'c52c243f-c0f5-4ad8-b066-0066af969c18'

						const freeChamp = 'https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-' + ApiKey
						const proxyVar ='https://cors-anywhere.herokuapp.com/'
						
						fetch(proxyVar+  freeChamp)
							.then(blob => blob.json())
							.then(data => {
								console.log(data);
								const champS = data.freeChampionIds
								const champNew = data.freeChampionIdsForNewPlayers
								document.getElementById("old").innerHTML=champS
								document.getElementById("new").innerHTML=champNew
							})
							.catch(e => {
								console.log(e);
								return e;
		});

						var resp = await fetch('http://ddragon.leagueoflegends.com/cdn/10.23.1/data/en_US/champion.json');
						var json = await resp.json()
						var thing = 8
						Object.values(json.data).forEach(value => {
							console.log(value);
							var para = document.createElement("p")
							var node = document.createTextNode(value.name)
							para.appendChild(node);
							var element = document.getElementById("namess")
							element.appendChild(para);
							// Search thru json file using those values
						}
						)
	
const champData = 'http://ddragon.leagueoflegends.com/cdn/10.23.1/data/en_US/championFull.json'
const champion =  'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/'+ 12  +'?champData=name&api_key=' + ApiKey
fetch(champData)
  					.then(blob => blob.json())
					.then(data => {
						console.log(data);
						const thing ='2';
						names =['hi']

					

						document.getElementById("names").innerHTML= names
					})
					.catch(e => {
						console.log(e);
						return e;
					});
				};
				getFreeChamps();