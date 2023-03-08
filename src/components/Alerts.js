import React from 'react'

function Alerts(probs ) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
        probs.alert &&  <div className={`alert alert-${probs.alert.type.toLowerCase()} alert-dismissible fade show `}role="alert">
            <strong>{capitalize(probs.alert.type)}</strong> : {probs.alert.msg}
            {/* <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button> */}
        </div>
  )
}

export default Alerts
