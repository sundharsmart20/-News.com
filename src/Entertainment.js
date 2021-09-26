import React,{useState,useEffect} from 'react'
import Service from './Service';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css"

const Entertainment=(props)=>{

	const[science,setTech]=useState([])

	useEffect(()=>
		Service.getEntertainment().then((res)=>{
		setTech(res.data.articles)
	}),[])

	var [techi,setTech1]=useState([])

	const handleClick=(index)=>{
		science.map((indexing,index1)=>{
			if(index===index1)
			{
				setTech1(indexing)
				props.pageings({indexing})
			}
		})
	}
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
// mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
	return(
		<div class="position-relative">

		<div class="shadow p-3  mb-5 bg-body rounded ">
		<p class="card-text"><small class="text-muted">#Entertainment</small></p>
				{
				(science.length===0) ? <div class="spinner-border text-primary" role="status">
										  <span class="sr-only">Loading...</span>
										</div> :
				science.map((techies,index)=>{
					var t=new Date(techies.publishedAt);

    				var ldstr=t.toLocaleDateString();
    				 var ltstr=t.toLocaleTimeString();

					return(

					<div  key={techies.description} class=" card mb-3 shadow p-3 mb-5 bg-body rounded" style={{maxWidth: "540px;"}}>
					  <div class="row g-0">
					    <div class="col-md-4">
					    	 <img src={techies.urlToImage} class="img-fluid rounded-start" alt="..." />
    					</div>
						<div class="col-md-8">
						  <div class="card-body">
						    <p class="card-text">{techies.title}</p>
						    <p class="card-text"><small class="text-muted">{ldstr}</small></p>
						  </div>
						</div>

						<div class="d-flex justify-content-end"> 
						<a class="resp-sharing-button__link" href="https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsharingbuttons.io" target="_blank" rel="noopener" aria-label="Share on Facebook">
						  <div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
						    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
						    </div></div>
						</a>

						<a class="resp-sharing-button__link" href="whatsapp://send?text=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.%20http%3A%2F%2Fsharingbuttons.io" target="_blank" rel="noopener" aria-label="Share on WhatsApp">
						  <div class="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
						    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z"/></svg>
						    </div></div>
						</a>
					</div>

							<Link class="card-text"  className="newss" to="/News" onClick={()=>{handleClick(index)}}><small class="text-muted">View&#8594;</small></Link>
						</div>
					</div>	
					
					)
				})
					
				}
				
					<button
			        type="button"
			        class="btn btn-danger btn-floating btn-lg"
			        id="btn-back-to-top"
			        onClick={backToTop}
			        >
			  &#8593;	
			</button>
			
		</div>
		</div>
		)
}
export default Entertainment;
