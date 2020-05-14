var postbtn = document.getElementById('post');
var getbtn = document.getElementById('get');

postbtn.addEventListener('click',()=>{
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;

    fetch('http://localhost:3000/feeds/post',{
        methods: 'POST',
        body: JSON.stringify({
            title: title,
            content: content
        }),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(res=>res.json())
    .then(resData=>console.log(resData))
    .catch(err=>console.log(err));
})

getbtn.addEventListener('click',()=>{
    fetch('http://localhost:3000/feeds/posts')
    .then(res=>res.json())
    .then(resData=>console.log(resData))
    .catch(err=>console.log(err));
})
