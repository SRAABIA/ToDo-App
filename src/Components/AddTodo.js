import React, { useState } from 'react';
//rafc
const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const sumbit = (e) => {
        e.preventDefault(); // Prevents the default form submit action and prevents page from reloading
        if (!title || !desc) {
            alert("Title / Desc Can't be blank!")
        }
        else {
            props.addTodo(title, desc);
            setTitle('');
            setDesc('');
        }
    }
    return (

        <div  id='add-todo' className='padding-wrapper' style={{ paddingTop: '100px' }}>

            <div className='container'>
                <h2 className='text-center' style={{
                    paddingTop: '20px',
                    fontWeight: 'bold',
                    color: '#000000',
                    fontSize: '36px'
                }}>
                    What's on your mind?
                </h2>
                <form onSubmit={sumbit}>
                    <div className="card border-dark mb-3" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        marginTop: '5px',
                        overflowY: 'hidden',
                        maxHeight: 'calc(100vh - 120px)'
                    }}>
                        <div className="card-header ">
                            New TODO
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">
                                <input className="form-control" type="text" placeholder="Topic" aria-label="default input example" value={title} onChange={(e) => { setTitle(e.target.value) }} />

                            </h4>
                            <h5 className="card-text">
                                <input className="form-control form-control-sm" type="text" placeholder="Description" aria-label=".form-control-sm example" value={desc} onChange={(e) => { setDesc(e.target.value) }} />
                            </h5>
                            <button className='btn btn-sm btn-secondary' type='submit' style={{ transition: "background-color 0.1s ease", padding: '5px 8px', fontSize: '15px' }}>
                                Add
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>


    )
}

export default AddTodo
