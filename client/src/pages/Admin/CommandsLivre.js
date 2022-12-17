import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'

function CommandsLivre() {

    const [CommandInfo,SetCommandInfos] = useState([])

    const API_URL = "http://localhost:8080/api/admin/commandslivrer"
    function getCommandsInfos() {
        return axios.get(API_URL)
    }
  
    useEffect(() => {
      getCommandsInfos().then(response => {
      SetCommandInfos(response.data) 
      })
    }, [])


    const style = {
        color: "brown"
    }
  

  return (
    <>
    <div class="d-flex justify-content-between border-bottom fw-bold mt-5 fs-4">
            <p class="">Commands Livré</p>
          </div>            
          <div class="table-responsive card p-2">
            <table class="table table-striped Table_responsive">
              <thead>
              <tr class="rounded tr_table">
                  <th scope="col">Numéro du Commande</th>
                  <th scope="col">Quantité</th>
                  <th scope="col">Montant</th>
                  <th scope="col">Status</th>
                  <th scope="col">date De livraison</th>
                </tr>
              </thead>
              <tbody>
            {CommandInfo.map(command => (
          <tr>
            <td>{command.id_command}</td>
            <td>{command.quantity}</td>
            <td>{command.montant}</td>
            <td style={style}>{command.status}</td>
            <td>{command.date_livraison}</td>
          </tr>
        ))}
      </tbody>
            </table>
          </div>
          </>
  )
}

export default CommandsLivre