import React from 'react'
import moment from 'moment'
var today = new Date()
var date = today
var fancy_date = moment().format('LLLL')

// Friday, July 5, 2019 5:37 PM
console.log(Date)
console.log(moment().format('LLLL'))

function Main() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12 mt-3">
               <h1 className="">{JSON.stringify(date)}</h1>
               <h2 className="">{fancy_date}</h2>
            </div>
         </div>
      </div>
   )
}

export default Main
