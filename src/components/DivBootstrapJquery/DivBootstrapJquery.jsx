import React, { useRef } from 'react'
import $ from 'jquery'
// import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const DivBootstrapJquery = () => {
  const tableJQ = useRef(null)
  const onClickJQ = (e) => {
    console.log(tableJQ.current)
    const w = $(tableJQ.current).width()
    const h = $(tableJQ.current).height()
    console.log(`width: ${w} x heigth: ${h}`)
  }

  return (
    <div>
      <table className="table" ref={tableJQ} onClick={onClickJQ}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DivBootstrapJquery