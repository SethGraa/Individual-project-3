
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
						var resp = await fetch('http://ddragon.leagueoflegends.com/cdn/10.23.1/data/en_US/championFull.json');
						var json = await resp.json()
						let thing =[13,5];
						names =[];
						for (var i=0; i< thing.length; i++){
							Object.values(json.data).forEach(value => {
								console.log(json.data[json.keys[thing[i]]].name);
								names.push(json.data[json.keys[thing[i]]].name);
							})
							document.getElementById("hehe").innerHTML=names;}
							}

					getFreeChamps();