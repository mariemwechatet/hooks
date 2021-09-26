import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from '../MovieList/StarRating';
import "./Header.css";

const Add = ({add}) => {
    const [name, setName] = useState("")
    const [data, setData] = useState("")
    const [image, setImage] = useState("")
    const [rating, setRating] = useState(1)
    let handelRating=(x) =>{
      setRating(x);

    }
    //submit the add
    let handelSubmit=(e)=>{
        e.preventDefault()
        let newone={
            name,image,data,rating
        }
        add (newone)
        setData("")
        setImage("")
        setName("")
        setRating(1)
        closeModal()
    }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      Modal.setAppElement('#root');


  
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

 

  function closeModal() {
    setIsOpen(false);
  }
    return (
        <div>
             <button onClick={openModal} className="btn">Add</button>
      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

<form onSubmit={handelSubmit}>
                <label >Movie Name</label>
                <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
                <label >Image</label>
                <input type="url" value={image} onChange={e=>setImage(e.target.value)}/>

                <label >Date</label>
                <input type="date"  value={data} onChange={e=>setData(e.target.value)}/>
                <StarRating rating={rating} handelRating={handelRating}/>
                <button className="btn" type="submit">Save</button>
                <button className="btn" onClick={()=>closeModal()}>Cancel</button>

                
            </form>
      </Modal>
        </div>
    )
}

export default Add
