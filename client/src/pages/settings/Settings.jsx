import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src="https://images.unsplash.com/photo-1612875295877-ff60dff48e71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjcxfHx0b2t5b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <label htmlFor="fileinput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="filr" id='fileInput' style={{display: "none"}}/>
          </div>
            <label>Username</label>
            <input type="text" placeholder='Wen'/>
            <label>Email</label>
            <input type="email" placeholder='Wen@gmail.com'/>
            <label>Password</label>
            <input type="password"/> 
            <button className="settingsSubmit">Update</button>
          </form>
      </div>
        <Sidebar/>
    </div>
  )
}
