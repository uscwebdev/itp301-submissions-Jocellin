import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';


const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
<div className="nav-wrapper">
<div className="nav">
  <button className="navbutton">HOME</button>
	<button className="navbutton">FORUM</button>
	<button className="navbutton">INSPIRATION</button>
</div>
</div>

<div className="Header">
<p>Discover, Create, Engage</p>
<button className="headerbutton">Join us</button>
</div>

<div className="Main">
<div className="Welcome">  
<h2>Welcome to CreativeHub! Where Artists are encouraged to come together to collaborate on projects, give critiques, share art, the possibilites are endless. Through shared workspaces, and discussion forums, users can brainstorm ideas, exchange feedback, and bring their visions to life.</h2>
</div>
</div>  

<div className="Explore">

<div className="Explore-wrapper">

<h1>Explore Artist</h1>

<div className="Post">
<h3>Painter Poet</h3> 
<img className="thumbnailimg" src="https://i.pinimg.com/736x/de/7b/7c/de7b7c0926d7ee85786d83aadbcaafc0.jpg" alt="drawing of flower"/>
<button className="Postbutton">check their work</button>
</div>  

<div className="Post">
<h3>ImaginationInk</h3> 
<img className="thumbnailimg" src="https://i.pinimg.com/474x/cb/0c/95/cb0c95852aa88545408b9584d2b2969a.jpg" alt="drawing of flower"/>
<button className="Postbutton">check their work</button>
</div> 

<div className="Post">
<h3>GalleryGlimpse</h3> 
<img className="thumbnailimg" src="https://i.pinimg.com/474x/ae/e6/43/aee643c0f9977850defd7a57b1755da3.jpg" alt="drawing of flower"/>
<button className="Postbutton">check their work</button>
</div> 

<div className="clearfloat"></div>
</div>

<div className="Forum">

<div className="Forum-wrapper">

<h1>Forum</h1>

<div className="critque">
<h3>Are the proportions off?</h3>
</div>
<div className="clearfloat"></div>
</div>

</div>   

<div className="clearfloat"></div>

</div>   

<div className="Footer">

contact our offices to
xxx-xxx-xx

 </div> 

  </React.StrictMode>  
);