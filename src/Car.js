//import logo from './logo.svg';
import './Car.css';

const Inventory = (props) => {
  return (
    <div className="Container">
      {props.cars.map((obj) => (
        <div className="Car">
          <div>
            <p>Make: {obj.make}</p>
            <p>Model: {obj.model}</p>
          </div>
          <div className="image">
            <img src={`./images/${obj.src}`} alt={`${obj.make} ${obj.model}`}/>
          </div>
        </div>
      ))}
    </div>
  );
}

const Car = () => {
  return (
    <Inventory cars={[
      {model:"Altima", make:"Nissan", src:"Altima.png",}, 
      {model:"Rav4", make:"Toyota ", src:"RAV4.png"}, 
      {model:"Silverado", make:"Chevrolet", src:"Silverado.png"},
      {model:"Altima", make:"Nissan", src:"Altima.png"},
      {model:"CRV", make:"Honda", src:"CRV.png"},
      {model:"Corolla", make:"Toyota", src:"Corolla.png"},
      {model:"F150", make:"Ford", src:"F150.png"},
      {model:"Malibu", make:"Chevrolet", src:"Malibu.png"}
    ]}/>
  );
}

export default Car;
