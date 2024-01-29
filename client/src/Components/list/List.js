import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import "./list.scss";
import ListItems from '../listItems/ListItems';
import { useRef, useState } from 'react';

const List = ({list}) => {
    const listRef=useRef();
    const [slider, setslider] = useState(0);
    const [move, setmoved] = useState(false);
    // console.log(list.content);
    const handleClick=(direction)=>{
        setmoved(true);
        let distance=listRef.current.getBoundingClientRect().x-50;
        if(direction==="left"&&slider>0)
        {
            setslider(slider-1);
            listRef.current.style.transform=`translateX(${230+distance}px)`
        }
        else if(direction==="right"&&slider<5)
        {
            setslider(slider+1);
            listRef.current.style.transform=`translateX(${-230+distance}px)`
        }
        
    }
    return (
        <div className='list'>
            <span className='list-tile'>{list.title}</span>
            <div className="wrapper">
               {slider>0 && <ArrowBackIosOutlined  className='sliderwindow left' onClick={()=>{handleClick("left")}} style={{display:!move&&"none"}}/>}
                <div className="container" ref={listRef}>
                    {list.content.map((item,i)=>
                        (
                        <ListItems key={i} index={i} item={item}/>
                        )
                    )}
                                  
                </div>
                {slider<5 && <ArrowForwardIosOutlined className='sliderwindow right' onClick={()=>{handleClick("right")}}/>}
            </div>
        </div>
    )
}

export default List