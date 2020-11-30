/*const ApiKey = 'be9f3108-ac44-4515-a9de-12d4614391c2'
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
  });*/
const champData = 'http://ddragon.leagueoflegends.com/cdn/10.23.1/data/en_US/championFull.json'
fetch(champData)
  					.then(blob => blob.json())
					.then(data => {
						console.log(data);
						const thing ='2';
						names =['hi']
						for( i=0;i<1000; i++){
							if(data.keys[i]= 1){
							names.push(data.keys[i])
						}
					}

						document.getElementById("names").innerHTML= names
					})
					.catch(e => {
						console.log(e);
						return e;
					});
