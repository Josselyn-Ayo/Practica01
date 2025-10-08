const obtenerMemes = async()=>{
    const memeContainers = document.getElementById('list-memes')

    const memeTemplate = document.getElementById('meme')

    const request = await fetch("https://api.imgflip.com/get_memes") //LLAMADO EN UNA APLI
    
    const respuesta = await request.json()
    
    
    respuesta.data.memes.slice(0,8).forEach(meme =>{   //SLICE= DIVIDIR 
        const newMemeCard = memeTemplate.cloneNode(true);
        const img = newMemeCard.querySelector('img');
        img.src = meme.url;
        memeContainers.appendChild(newMemeCard);
        
    });
    memeTemplate.remove();

}
obtenerMemes();