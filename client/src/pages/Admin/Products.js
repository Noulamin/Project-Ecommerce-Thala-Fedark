import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import SideBar from '../../components/Admin/SideBar'





const DashAdmin = ({ className }) => {

  const style = {
    position: 'absolute',
    top: '12px',
    left: '68px',
  }

  const [Product, setProduct] = useState([])
  const [showModal, setShowModal] = React.useState(false);
  const [title_produit, SetTitle_produit] = useState('')
  const [update, SetUpdate] = useState('')
  const [Image_produit, setImage_produit] = useState('')
  const [Description_produit, setDescription_produit] = useState("")
  const [Prix_produit, setPrix_produit] = useState("")
  const [Stock_produit, setStock_produit] = useState("")
  const [Pourcentage_produit, setPourcentage_produit] = useState("")



  function toggleModal() {
    setShowModal(!showModal);
  }
  const getAllProduct = async () => {

    const res = await axios.get('http://localhost:8080/Product/getAllProduct')
    setProduct(res.data)
  }

  useEffect(() => {
    getAllProduct()
    SetUpdate('all data')
  }, [update])
  console.log(Product)


  const getProduct = (e) => {

    axios.post('http://localhost:8080/Product/add', {

      title_produit: title_produit,
      Image_produit: Image_produit,
      Description_produit: Description_produit,
      Prix_produit: Prix_produit,
      Stock_produit: Stock_produit,
      Pourcentage_produit: Pourcentage_produit
    })
      .then(result => {
        SetUpdate('add data')
        console.log(result)

      })
      .catch(err => {
        console.log(err)

      })
  }
  const deleteProduct = (id) => {
    // Simple DELETE request with axios
    axios.delete(`http://localhost:8080/api/Product/delete/${id}`)
      .then(result => {
        SetUpdate('delete data')
        console.log(result)
      })
      .catch(err => {
        console.log(err)

      })

  }


  return (
    <>
      <SideBar />
      <main class={`main ${className}`}>
        <div class="Container p-4 ">
          <div class="d-flex justify-content-between border-bottom fw-bold fs-4">
            <p class="">Products</p>
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
                  <th scope="col">title_produit</th>
                  <th scope="col"> Description_produit</th>
                  <th scope="col">Prix_produit</th>
                  <th scope="col">Stock_produit</th>
                  <th scope="col"> Pourcentage_produit</th>
                  <th scope="col">Image_produit</th>
                  <th scope="col">delete</th>
                  <th scope="col">update</th>
                </tr>
              </thead>
              <tbody>
                {Product.map((item) => (
                  <tr key={item.id} class="rounded">
                    <td scope="col"> {item.title_produit} </td>
                    <td scope="col">  {item.Description_produit}</td>
                    <td scope="col">  {item.Prix_produit}</td>
                    <td scope="col"> {item.Stock_produit}</td>
                    <td scope="col"> {item.Pourcentage_produit}</td>
                    <td scope="col"> {item.Image_produit}</td>
                    <td scope="col"> vwdvwrwv</td>  <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                      >
                        <svg path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                      </a>
                      <a
                        href='#'
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                      >
                        <svg path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                      </a>
                      <a href='#' onClick={() => deleteProduct(item.id)} className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm' >
                        <svg path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                      </a>
                    </td>
                    <td scope="col"> cdcwdcwc</td>
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

          <div className='blour' style={{}}>
            <div class="flex justify-center" style={style}>
              <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                {showModal && (

                  <div className="modal-content">
                    <form action="" method="post" style={{ width: '35rem' }}>
                      <div class="mb-3">
                        <label for="amount" class="form-label">title_produit</label>
                        <input type="text" class="form-control" name="title_produit" value={title_produit} onChange={(e) => SetTitle_produit(e.target.value)} />
                      </div>
                      <div class="mb-3">
                        <label for="amount" class="form-label">Description_produit</label>
                        <input type="text" class="form-control" name="Description_produit" value={Description_produit} onChange={(e) => setDescription_produit(e.target.value)} />
                      </div>

                      <div class="mb-3">
                        <label for="amount" class="form-label">Prix_produit</label>
                        <input type="text" class="form-control" name="Prix_produit" value={Prix_produit} onChange={(e) => setPrix_produit(e.target.value)} />
                      </div>
                      <div class="mb-3">
                        <label for="amount" class="form-label">Stock_produit</label>
                        <input type="text" class="form-control" name="Stock_produit" value={Stock_produit} onChange={(e) => setStock_produit(e.target.value)} />
                      </div>
                      <div class="mb-3">
                        <label for="amount" class="form-label">Pourcentage_produit</label>
                        <input type="text" class="form-control" name="Pourcentage_produit" value={Pourcentage_produit} onChange={(e) => setPourcentage_produit(e.target.value)} />
                      </div>
                      <div class="mb-3">
                        <label for="amount" class="form-label">Image_produit</label>
                        <input type="file" class="form-control" name="Image_produit" value={Image_produit} onChange={(e) => setImage_produit(e.target.value)} />
                      </div>

                      <button type="submit" onClick={getProduct} class="btn btn-primary">Ajouter</button>
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
