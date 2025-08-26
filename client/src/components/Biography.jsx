import React from 'react'

const biography = ({Image_Url}) => {
  return (
    <div className='container biography'>
      <div className="banner" style={{"width": "100%"}}>
        <img src={Image_Url} alt="image" />
      </div>
      <div className="banner" style={{"width": "100%"}}>
       <h3 style={{textAlign:"center", fontSize:"bold",background:"1px solid gray"}}  >Biography</h3>
       <h6 style={{textAlign:"center"}}>Who We Are</h6>
      <p>ZeeCare Hospital, located in the heart of Tharparkar, is dedicated to providing quality healthcare facilities to the people of the region. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo facere quae itaque illo cupiditate commodi, vitae provident accusantium blanditiis accusamus, magnam quia! Ab, alias laudantium? Ducimus doloremque eius hic.</p>
     <p>With modern facilities and a team of professional doctors, ZeeCare Hospital ensures timely treatment and care for patients in rural areas of Thar. Lorem ipsum dolor sit amet, modi quaerat, harum vitae deserunt velit expedita necessitatibus consequatur!</p>
     <p>The hospital focuses on emergency services, maternal health, and child care to serve the needs of the local community. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, tempore quisquam ab, obcaecati placeat nemo, molestias perspiciatis sed voluptatum cum neque ipsam?</p>
     <p>Located in Tharparkar, ZeeCare Hospital also works on awareness programs for common diseases, ensuring healthier communities. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum sequi quod nihil voluptatum iure libero deserunt blanditiis soluta, officiis.</p>
     
      </div>
      </div>
  )
}

export default biography