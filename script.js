function showModal(direction){
    const modal = document.getElementById('modal')
    const modalContent = document.querySelector('.modal-content')

    modal.classList.remove('top', 'bottom', 'left', 'right')

    modal.classList.add(direction)
        modal.style.display = 'flex'

        setTimeout(() => {modal.classList.add('show')

        }, 10)

        modal.addEventListener('click', ()=> {
            hideModal()
        })

        modalContent.addEventListener('click', (e) => {
            e.stopPropagation()
        })
    
    }

    function hideModal(){
        const modal =document.getElementById('modal')
        modal.classList.remove('show')
        setTimeout(() => {
            modal.style.display = 'none'
            modal.classList.remove ('top', 'bottom', 'left', 'right')
        }, 500)

    }

