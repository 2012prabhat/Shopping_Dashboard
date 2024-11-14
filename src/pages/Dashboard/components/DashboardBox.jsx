const DashboardBox = ({color,icon,topIcon,text})=>{
    return <>
      <div className="dashboardBox" style={{
       background: `linear-gradient(62deg, ${color[0]} 0%, ${color[1]} 33%)`
      }}>

        <div className="icon"> {icon} </div>

        <div className="row d-flex top">
            <div className="title">{text[0]} <br /> {text[1]}</div>
            <div className="image" style={{color:color[0]}}>{topIcon}</div>
        </div>

        </div>

    </>
}






export default DashboardBox