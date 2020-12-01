async function showChamp(){

    var store = localStorage.getItem('nameofchamp')
    var resp = await fetch('http://ddragon.leagueoflegends.com/cdn/10.23.1/data/en_US/champion/'+store +'.json');
    var json = await resp.json()
    Object.values(json.data).forEach(value => {
        console.log(value);
        var para = document.createElement("p")
        var img = document.createElement('img')
        var imgP = document.createElement('imgP')
        var imgQ = document.createElement('imgQ')
        var imgW = document.createElement('imgW')
        var imgE = document.createElement('imgE')
        var imgR = document.createElement('imgR')
        img.src =('http://ddragon.leagueoflegends.com/cdn/10.24.1/img/champion/'+ value.id + '.png')
        imgP.src =('http://ddragon.leagueoflegends.com/cdn/10.24.1/img/passive/'+ value.id + '.png')
        imgQ.src =('http://ddragon.leagueoflegends.com/cdn/10.24.1/img/spell/'+ value.spells[1].image.full)
        imgW.src =('http://ddragon.leagueoflegends.com/cdn/10.24.1/img/spell/'+ value.id + '.png')
        imgE.src =('http://ddragon.leagueoflegends.com/cdn/10.24.1/img/spell/'+ value.id + '.png')
        imgR.src =('http://ddragon.leagueoflegends.com/cdn/10.24.1/img/spell/'+ value.id + '.png')
        var node = document.createTextNode(value.name+ " ")
        var title = document.createTextNode(value.title)
        var mana = document.createTextNode("Mana type: "+ value.partype+" ")
        var passiveN = document.createTextNode("Passive: "+ value.passive.name +" \n")
        var passiveD = document.createTextNode("Passive Description: "+ value.passive.description)
        para.appendChild(node);
        para.appendChild(title);
        var element = document.getElementById("champion")
        element.appendChild(img)
        element.appendChild(para);
        element.appendChild(mana);
        element.appendChild(passiveN);
        element.appendChild(passiveD);
        element.appendChild(imgQ);

    }
    )}
    showChamp();