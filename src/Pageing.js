import React,{useState,useEffect} from 'react';

const Pageing=(props)=>{
	// console.log("the props are ",props.general)

	const[p,setP]=useState([props.indexing])
	
	localStorage.setItem("news",JSON.stringify(p))
	console.log("the sote",localStorage.getItem("news"))
	console.log("the sdf",p)
	
	// var [p1,setP1]=useState([])

	// useEffect(()=>{setP1(JSON.parse(localStorage.getItem("news")))},[])

	// console.log("the p1",p1.indexing.url)

	// var t=new Date(p[0].indexing.publishedAt);
    				// var ldstr=t.toLocaleDateString();
    				//  var ltstr=t.toLocaleTimeString();
    // console.log("the page",p[0].indexing.urlToImage)

	return(
		<div >
			{
				(p[0].length===0) ?  <div class="spinner-border text-primary" role="status">
								  <span class="sr-only">go back...</span>
								</div> :
			
					<div key={p[0].indexing.description} class="card mb-3 shadow p-3 mb-5 bg-body rounded text-center" style={{maxWidth: "540px;"}}>
					  <div class="row g-0"> 
					    <div class="col-md-4">
					    	 <img src={p[0].indexing.urlToImage} class="img-fluid rounded-start " alt="..." />
    					</div>
						<div class="col-md-8">
						  <div class="card-body">
						   <b> <p style={{fontSize:'21px'}} class="card-text">{p[0].indexing.title}</p> </b> <br/>
						   
						  </div>
						   <p  style={{fontSize:'21px'}}  class="card-text">{(p[0].indexing.content===null) ? null :  p[0].indexing.content.split("[")[0]}</p>

						    <p style={{fontSize:'21px'}} class="card-text">{p[0].indexing.description}</p>
						   <a target="_blank" href={p[0].indexing.url}>read More</a>
						</div>


						</div>
					</div>	
					
				
					
			}
			<a class="card-text"  className="newss" href="/" ><b class="text-muted">Back&#8592;</b></a>
		</div>
		)

}
export default Pageing;
