import React from 'react'
const Navbar = () => {
  return (
  <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
       <img src="https://scontent.fpnh5-4.fna.fbcdn.net/v/t39.30808-6/506186823_669878552542285_5385111773655949558_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE2AvALK_pH6mWAz_cM6m_QUN60OgqdpdVQ3rQ6Cp2l1aEeOZoYBDrRehwXU71BPGkMNcdKXPSe54JBlys3WvMC&_nc_ohc=4ifTr0PdhIEQ7kNvwEsnLTX&_nc_oc=Adm1vY4WeLcG1YUA6Z3jgzfK7yFRqkOyYRPxWa0QObqPeZMdCDqDZd2J94p4aknIoJo&_nc_zt=23&_nc_ht=scontent.fpnh5-4.fna&_nc_gid=hF7HIyX3MY77YzAOdMReEg&oh=00_Afg4mo8_VEqnAuF8Wcbm_8tHcdBjcG5hAYC8Tg_zKckieA&oe=6917B874" alt="" />
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href="">Home</a></li>
        <li>
          <a>Parent</a>
          
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-14 rounded-full ">
    <a href="https://www.facebook.com/profile.php?id=100085604379815"><img src="https://scontent.fpnh5-4.fna.fbcdn.net/v/t39.30808-6/506186823_669878552542285_5385111773655949558_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE2AvALK_pH6mWAz_cM6m_QUN60OgqdpdVQ3rQ6Cp2l1aEeOZoYBDrRehwXU71BPGkMNcdKXPSe54JBlys3WvMC&_nc_ohc=4ifTr0PdhIEQ7kNvwEsnLTX&_nc_oc=Adm1vY4WeLcG1YUA6Z3jgzfK7yFRqkOyYRPxWa0QObqPeZMdCDqDZd2J94p4aknIoJo&_nc_zt=23&_nc_ht=scontent.fpnh5-4.fna&_nc_gid=hF7HIyX3MY77YzAOdMReEg&oh=00_Afg4mo8_VEqnAuF8Wcbm_8tHcdBjcG5hAYC8Tg_zKckieA&oe=6917B874" /></a>
  </div>
</div>

  </div>

  <div className="navbar-center hidden lg:flex">
    
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <a>Parent</a>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
  )
}

export default Navbar