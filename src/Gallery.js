/*export const Profile = (props) =>
{
    const {name, imageUrl, alternate} = props;
    return (
        <>
            <img
                className="avatar"
                src = {imageUrl}
                alt = {alternate}
                style = {{
                    width: 90,
                    height: 90,
                }}
            />
        </>
    );
};


const imageData = [
    {
        name: 'Sphiwe Nyoni',
        imageUrl: 'job_profile.jpg',
        imageSize: 90,
        id: 1,
    },
    {
        name: 'react-logo',
        imageUrl: 'logo512.png',
        imageSize: 90,
        id: 2,
    },
];

const Gallery = () => 
{
    
    const imageList = imageData.map(image =>
        <img
            className="avatar"
            src={image.imageUrl}
            alt={`Avatar of ${image.name}`}
            style = {{
                width: image.imageSize,
                height: image.imageSize,
            }}
        />
    )

    return(
        <>
            <h1>Welcome to my app</h1>
            <p>List of profiles!</p>
            <div>{imageList}</div>
        </>
    );
}
import { useState } from 'react';
import Gallery from './Gallery';
import { Profile } from './Gallery';
import './App.css';

const MyButton = () =>
{
  const [count, updateCount] = useState(0);

  const handleClick = () =>
  {
    updateCount(count+1);
  }
  return(
    <button onClick={handleClick}>Clicked {count} times</button>
  );
}
const MySharedButton = ({count, onClick}) =>
{
  return(
    <button onClick = {onClick}>
      Clicked {count} times
    </button>
  );
}




const products = 
[
  {title: 'apple', isFruit: true, id: 1},
  {title: 'banana', isFruit: true, id: 2},
  {title: 'cabbage', isFruit: false, id: 3},
];
  
const App = () =>
{
  const listItems = products.map(product =>
      <li 
        key = {product.id}
        style = {{
          color: product.isFruit ? "magenta":"blue"
        }}
      
      >{product.title}</li>
    );
  
  const [count, setCount] = useState(0);
  const handleSharedButtons = () =>
  {
    setCount(count+1);
  }  
  return(
    <div className = "MyApp">
      <>
        <Gallery/>
        <Profile name = {'paper'} imageUrl = {'paper.png'} alternate = {'paper icon'}/>
        
        <ul>{listItems}</ul>  
      </>
      <>
        <MyButton/>
        <MySharedButton count = {count} onClick = {handleSharedButtons} />
        <MySharedButton count = {count} onClick = {handleSharedButtons} />
      </>
      
      
      
    </div>
  );
}

export default App;
export default Gallery;*/