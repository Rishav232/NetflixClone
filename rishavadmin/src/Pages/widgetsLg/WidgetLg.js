
import React from 'react'
import "./widgetlg.css"
const WidgetLg = () => {

  const Button = ({ type }) => {
    return <button className={"widgetButton " + type}>{type}</button>
  }
  return (
    <div className='widgetlg'>
      <span className="widgetLgTitle">
        Latest Transaction
      </span>

      <table className='widgetLgWrapper'>
        <tbody>
          <tr className='widgetLgTr'>
            <th className='widgetLgth'>Customer</th>
            <th className='widgetLgth'>Date</th>
            <th className='widgetLgth'>Amount</th>
            <th className='widgetLgth'>Status</th>
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <div className="widgetLgUserusername">
                <img src="https://images4.alphacoders.com/667/667463.jpg" alt="" className="widgetLgUserPic" />
                <span className='widgetLgName'>Rishav</span>
              </div>
            </td>
            <td className='widgetLgDate'>23 May 2021</td>
            <td className='widgetLgAmt'>$5000</td>
            <td className='widgetLgStatus'><Button type="Approved" /></td>
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <div className="widgetLgUserusername">
                <img src="https://images4.alphacoders.com/667/667463.jpg" alt="" className="widgetLgUserPic" />
                <span className='widgetLgName'>Rishav</span>
              </div>
            </td>
            <td className='widgetLgDate'>23 May 2021</td>
            <td className='widgetLgAmt'>$5000</td>
            <td className='widgetLgStatus'><Button type="Pending" /></td>
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <div className="widgetLgUserusername">
                <img src="https://images4.alphacoders.com/667/667463.jpg" alt="" className="widgetLgUserPic" />
                <span className='widgetLgName'>Rishav</span>
              </div>
            </td>
            <td className='widgetLgDate'>23 May 2021</td>
            <td className='widgetLgAmt'>$5000</td>
            <td className='widgetLgStatus'><Button type="Approved" /></td>
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <div className="widgetLgUserusername">
                <img src="https://images4.alphacoders.com/667/667463.jpg" alt="" className="widgetLgUserPic" />
                <span className='widgetLgName'>Rishav</span>
              </div>
            </td>
            <td className='widgetLgDate'>23 May 2021</td>
            <td className='widgetLgAmt'>$5000</td>
            <td className='widgetLgStatus'><Button type="Declined" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default WidgetLg