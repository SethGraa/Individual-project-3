
async function showData(){
var resp = await fetch('http://ddragon.leagueoflegends.com/cdn/10.23.1/data/en_US/champion.json');
var json = await resp.json()
Object.values(json.data).forEach(value => {
    console.log(value);
    var para = document.createElement("p")
    var img = document.createElement('img')
    img.src =('http://ddragon.leagueoflegends.com/cdn/10.24.1/img/champion/'+ value.id + '.png')
    img.onclick = function(){
            localStorage.setItem('nameofchamp',value.name)
            window.document.location = './Anystats.html';
    }
    var node = document.createTextNode(value.name)
    para.appendChild(node);
    var element = document.getElementById("namu")
    element.appendChild(img)
    element.appendChild(para);
})};
showData();
//    img.href=('http://ddragon.leagueoflegends.com/cdn/10.24.1/data/en_US/champion/'+value.name+'.json')