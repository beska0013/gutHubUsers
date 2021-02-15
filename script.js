
function gitHubUsers(){
    for(let i=0;i<30;i++){
        const input=document.getElementById('search')
        const image=document.createElement('img')
        const div=document.createElement('div')
        const p=document.createElement('p')
        const users=document.getElementById('users')
        const a=document.createElement('a')
  fetch('https://api.github.com/users',{
    headers:{
    Accept:'application/json'
}}
    )
  .then((res) =>res.json ())
    .then(j => {
             users.appendChild(div)
        div.appendChild(image)
              image.src=j[i].avatar_url
              div.appendChild(p)
              p.innerText=j[i].login
              div.appendChild(a)
              a.innerText='See Portfolio'
              a.href=j[i].html_url

    })


    }}
gitHubUsers()
