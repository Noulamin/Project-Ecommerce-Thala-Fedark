import { useEffect , useState } from 'react'
import axios from 'axios'

function ShowComments(props) {




  return (
    <>
    <div className="w-full flex flex-col text-start md:text-left md:flex-row shadow bg-white mt-3 mb-3 p-3">
  <img src="https://xsgames.co/randomusers/avatar.php?g=male" style={{width: 90, marginRight: 10}} className="rounded-full" alt="Pic For The person who comment " />
  <div className="flex-1 flex flex-col justify-center md:justify-start">
    <p className="text-sm mb-3">test</p>
    <p className="font-semibold text-2xl" style={{color: '#256D85'}}>test</p>
    <p className="pt-2">test</p>
  </div>
</div>

        </>
  )
}

export default ShowComments