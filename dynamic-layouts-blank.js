const cardData =[
    {
        heading:'Farm 1',
        body:'Press show to see the zones of your farm'
    }
]

const postContainer = document.querySelector('.card');

const postMethods = ()=>{
    cardData.map((postData)=>{
        const postElement = document.createElement('div');
        postElement.classList.add('col-12 col-sm-6 col-lg-4 mb-4');
        postElement.innerHTML =`
        <h5>${postData.heading}</h5>

        <p>${postData.body}</p>

        <button
            type="button"
            
            class="btn btn-primary"
            
            data-bs-toggle="modal"
            data-bs-target="#pricingModal"
          >
          
            ${postData.button}
          </button>
        `
        postContainer.appendChild(postElement)
    })
}

postMethods();



            