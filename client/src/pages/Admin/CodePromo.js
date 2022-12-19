import React from 'react'
import SideBar from '../../components/Admin/SideBar'

const CodePromo = () => {

  return (
    <>
      <SideBar />
      <main class="main">
        <div class="Container p-4 ">
          <div class="d-flex justify-content-between border-bottom fw-bold fs-4">
            <p class="">Code promos</p>
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
            </div>
          </div>
          <div class="table-responsive card p-2">
            <table class="table table-striped Table_responsive">
              <thead>
                <tr class="rounded tr_table">
                  <th scope="col">Code Promo</th>
                  <th scope="col">Discount rate</th>
                  <th scope="col">Expiry Date</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr class="rounded">
                  <td scope="col"> Ahmed</td>
                  <td scope="col"> fewwv</td>
                  <td scope="col"> vwdvwrwv</td>
                  <td scope="col"> cdscc</td>
                  <td scope="col"> cdcwdcwc</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  )
}

export default CodePromo
