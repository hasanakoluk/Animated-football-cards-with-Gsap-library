
    //card yapımı
    
    const cards = document.querySelectorAll(".card")
    gsap.set(".icerik", { yPercent: 100 });

    gsap.utils.toArray(".card").forEach(card=>{
      
      const yazi = card.querySelector(".card-yazi")
      const icerik = card.querySelector(".icerik")
      let  tl = gsap.timeline({ paused: true });

      let animationYazi = tl.to(yazi,{
        y:-300,
        opacity:0,
        rotate:100,
        duration:0.5,
       })
       
   
       let animationContent = gsap.to(icerik,{
         top:-400,
         duration:0.5,
         paused: true,
         opacity:100
       })
   
         card.addEventListener("mouseover",()=>{
               animationYazi.play()
               animationContent.play()
         })
    

         card.addEventListener("mouseout",()=>{
               animationYazi.reverse()
               animationContent.reverse()
         })

    })

 
    
   
  

   