window.onload=function(){
const item=document.getElementById('btn').addEventListener('click',loaddata);
function loaddata(e){
    const xhr=new XMLHttpRequest();
    xhr.open('GET','data.txt',true);
    xhr.onload=function(){
        if(this.status===200){
            const data=this.responseText;
            console.log(data)
            document.getElementById('output').innerHTML=`<h1>${data}</h1>`;
        }
       
    }
    xhr.send();


}
}
