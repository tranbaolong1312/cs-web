const animation_elements = document.querySelectorAll(".animation-top");

const observer = new IntersectionObserver(entries =>{
  entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add("fade-animation-top");
      }
      else entry.target.classList.remove("fade-animation-top");
  })
},{
    threshold: 0.5
});

for(let i = 0; i< animation_elements.length; i++){
    const el = animation_elements[i];
    observer.observe(el);

}