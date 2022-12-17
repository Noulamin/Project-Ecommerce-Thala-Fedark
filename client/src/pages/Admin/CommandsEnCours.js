import axios from 'axios'
import { useState , useEffect } from 'react'
import {Link} from 'react-router-dom'


function CommandsEnCours() {

  const [CommandInfo,SetCommandInfos] = useState([])
  const [Status, SetStatus] = useState([])

  const API_URL = "http://localhost:8080/api/admin/commands"


  function getCommandsInfos() {
      return axios.get(API_URL)
  }

  useEffect(() => {
    getCommandsInfos().then(response => {
    SetCommandInfos(response.data)
    })
  }, [])


  const style = {
        color: "green"
  }
  const button = {
      backgroundColor: "green",
      color: "white",
      padding: 6,
      borderRadius: 7,
  }
  return (
    <>
    <div class="d-flex justify-content-between border-bottom fw-bold fs-4">
            <p class="">Commands en cours</p>
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
            <td><button   style={button}>Update Status Command</button></td>
          </tr>
        ))}
      </tbody>
            </table>
          </div>
          </>
  )
}

export default CommandsEnCours