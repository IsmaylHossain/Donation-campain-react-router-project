 

const Card = ({card}) => {

  const {image, color, components, title}= card || {}

  return (
      <div>
         <div className="card w-70 bg-base-100 shadow-xl">
<figure><img src={image} alt="Shoes" /></figure>
<div className="card-body">
<p className="w-14 h-7 text-center">{components}</p>
  <h2 className="card-title">{title}</h2>
</div>
</div>


{/* next */}
{/* 

<div className="card w-60 bg-base-100 shadow-xl">
<figure><img src={image} alt="Shoes" /></figure>
<div className="card-body">
<p className="w-14 h-7 text-center">{components}</p>
  <h2 className="card-title">{title}</h2>
</div>
</div>



<div className="card w-60 bg-base-100 shadow-xl">
<figure><img src={image} alt="Shoes" /></figure>
<div className="card-body">
<p className="w-14 h-7 text-center">{components}</p>
  <h2 className="card-title">{title}</h2>
</div>
</div> */}
      </div>
  );
};

export default Card;