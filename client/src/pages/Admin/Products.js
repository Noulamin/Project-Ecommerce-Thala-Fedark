import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import SideBar from '../../components/Admin/SideBar'

const DashAdmin = ({ className }) => {

  
  const [db, setDb] = useState([])
  const [showModal, setShowModal] =useState(false);
  const [title_produit, SetTitle_produit] = useState('')
  // const [update, SetUpdate] = useState('')
  const [image_produit, setImage_produit] = useState('')
  const [description_produit, setDescription_produit] = useState("")
  const [prix_produit, setPrix_produit] = useState("")
  const [stock_produit, setStock_produit] = useState("")
  const [pourcentage_produit, setPourcentage_produit] = useState("")



  function toggleModal() {
    setShowModal(!showModal);
  }
  const getAllProduct = () => {

    axios.get('http://localhost:8080/Product/getAllProduct')
      .then(response => {
        console.log(response.data);
        // setDb(response.data)
        let db = response.data
        // db.map(e => console.log(Object.values(e.image_produit)))
        db.forEach(e => {
          e.image_produit = e.image_produit.split(',').map(e => e.replace(/\W/g, '').replace('images', 'images/').replace('jpg', '.jpg'))
        });

        setDb(db)
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    getAllProduct()
    // SetUpdate('all data')
  }, [])
  // console.log(db)
  const createProduct = (e) => {
    axios.post('http://localhost:8080/Product/add', {

      title_produit: title_produit,
      image_produit: image_produit,
      description_produit: description_produit,
      prix_produit: prix_produit,
      stock_produit: stock_produit,
      pourcentage_produit: pourcentage_produit

    })
      .then(response => {
        console.log(response.data);
        setDb(response.data)
      })
      .catch(err => {
        console.log(err);
      })
  }
  // const deleteProduct = (id) => {
  //   // Simple DELETE request with axios
  //   axios.delete(`http://localhost:8080/Product/delete/${id}`)
  //     .then(result => {
  //       SetUpdate('delete data')
  //       console.log(result)
  //     })
  //     .catch(err => {
  //       console.log(err)

  //     })

  // }


  return (
    <>
      <SideBar />
      <main class={`main`}>
        <div class="Container p-4 ">
          <div class="d-flex justify-content-between border-bottom fw-bold fs-4">
            <p class="">Products</p>
            <button onClick={getAllProduct}>gett All</button>
          </div>
          <div class="d-flex justify-content-between">
            <div class="d-flex justify-content-between mt-3 fw-bold">
              <div class="d-flex">
                <p class="m-0">Show</p>
                <select class="select_style sort rounded mx-1">
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="75">75</option>
                  <option value="All">All</option>
                </select>
                <p class="m-0">Entities</p>
              </div>
            </div>
            <div class="d-flex justify-content-end my-2 px-5 fw-bold">

              <button class="btn bg-danger px-3 text-blod Button_ajoute" onClick={toggleModal} data-bs-toggle="modal" data-bs-target="#send_to">Ajouter</button>
            </div>
          </div>
          <div class="table-responsive card p-2">
            <table class="table table-striped Table_responsive">
              <thead>
                <tr class="rounded tr_table">
                  <td scope="col">Image_produit</td>
                  <td scope="col">title_produit</td>
                  <td scope="col">Description_produit</td>
                  <td scope="col">Prix_produit</td>
                  <td scope="col">Stock_produit</td>
                  <td scope="col"> Pourcentage_produit</td>
                  <td scope="col">update</td>
                  <td scope="col">delete</td>
                </tr>
              </thead>
              <tbody>
                {db.map((item) => (
                  
                  <tr class="rounded">
                    
                    <td scope="col">
                      {item.image_produit.map((img) => (
                        <img
                          src={`http://localhost:8080/${img}`}
                          className=''
                          alt=''
                        />
                      ))}
                    </td>
                    <td scope="col"> {item.title_produit} </td>
                    <td scope="col"> {item.description_produit}</td>
                    <td scope="col"> {item.prix_produit}</td>
                    <td scope="col"> {item.stock_produit}</td>
                    <td scope="col"> {item.pourcentage_produit}</td>

                    <td scope='cole'>
                    <button type="button" class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">updatte</button>

                    </td>
                    <td scope='cole'>
                    <button type="button" class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Delete</button>

                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
        <div class="modal fade" id="send_to" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Ajouter</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <p class="d-flex m-0 mt-3 justify-content-center" id="warning"></p>
              <div class="modal-body">

              </div>
            </div>
          </div>
        </div>


        <div>

          <div className='blour' >
            <div class="flex justify-center" >
              <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                {showModal && (

                  <div className="modal-content">
                    <form enctype="multipart/form-data" method=" post" onSubmit={createProduct} >
                      <div class="mb-3">
                        <label for="amount" class="form-label">title_produit</label>
                        <input type="text" class="form-control" name="title_produit" value={title_produit} onChange={(e) => SetTitle_produit(e.target.value)} />
                      </div>
                      <div class="mb-3">
                        <label for="amount" class="form-label">Description_produit</label>
                        <input type="text" class="form-control" name="description_produit" value={description_produit} onChange={(e) => setDescription_produit(e.target.value)} />
                      </div>

                      <div class="mb-3">
                        <label for="amount" class="form-label">Prix_produit</label>
                        <input type="text" class="form-control" name="prix_produit" value={prix_produit} onChange={(e) => setPrix_produit(e.target.value)} />
                      </div>
                      <div class="mb-3">
                        <label for="amount" class="form-label">Stock_produit</label>
                        <input type="text" class="form-control" name="stock_produit" value={stock_produit} onChange={(e) => setStock_produit(e.target.value)} />
                      </div>
                      <div class="mb-3">
                        <label for="amount" class="form-label">Pourcentage_produit</label>
                        <input type="text" class="form-control" name="pourcentage_produit" value={pourcentage_produit} onChange={(e) => setPourcentage_produit(e.target.value)} />
                      </div>
                      <div className="image-upload">

                        <input id="file-input" type="file" accept=".png, .jpg, .jpeg" name="image" value={image_produit} onChange={(e) => setImage_produit(e.target.value)} />
                      </div>

                      <button type="submit" onClick={createProduct} class="btn btn-primary">Ajouter</button>
                      <button onClick={toggleModal}>Close Modal</button>
                    </form>

                  </div>

                )}
              </div>
            </div>
          </div>
        </div>










      </main>
    </>
  )
}






export default DashAdmin
