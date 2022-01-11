import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style/slide.scss';
import * as actions from "./.../../../../../store/actions/index";

function Slide() {
    const dispatch = useDispatch()
    const slides = useSelector(state => state.admin.slides)

    useEffect(() => {
        dispatch(actions.fetchAllSlide())
    }, [dispatch])

    return (
        <div className="slide row">
            <div id="carousel-example-1z" className="carousel slide carousel-fade col-md-8 pr-0" data-ride="carousel">
                <ol className="carousel-indicators control">
                    <li style={{ width: '10px', height: '10px', borderRadius: '50%' }} data-target="#carousel-example-1z" data-slide-to={0} className="active" />
                    <li style={{ width: '10px', height: '10px', borderRadius: '50%' }} data-target="#carousel-example-1z" data-slide-to={1} />
                    <li style={{ width: '10px', height: '10px', borderRadius: '50%' }} data-target="#carousel-example-1z" data-slide-to={2} />
                    <li style={{ width: '10px', height: '10px', borderRadius: '50%' }} data-target="#carousel-example-1z" data-slide-to={3} />
                    <li style={{ width: '10px', height: '10px', borderRadius: '50%' }} data-target="#carousel-example-1z" data-slide-to={4} />
                    <li style={{ width: '10px', height: '10px', borderRadius: '50%' }} data-target="#carousel-example-1z" data-slide-to={5} />
                </ol>

                <div className="list_slide carousel-inner">
                    {   
                        slides && slides.length > 0 ?
                        slides.map((item, index) =>{
                            return (  
                                <div className={`carousel-item ${item.status}`} key={index}>   
                                    <img className="w-100" style={{ height: '240px' }} src={item.image} alt="img slide" />
                                </div>
                            )
                        })
                        : 'loading...'
                    }
                </div>

                {/*Controls*/}
                <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev" style={{ left: '15px', width: '4%', top: '100px', opacity: '0.2', height: '40px' }}>
                    <img src="https://salt.tikicdn.com/ts/upload/6b/59/c2/b61db5f1c32cfdc6d75e59d4fac2dbe8.png" alt="" style={{ transform: 'rotate(180deg)' }} />
                </a>
                <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next" style={{ right: '0px', width: '4%', top: '100px', opacity: '0.2', height: '40px' }}>
                    <img src="https://salt.tikicdn.com/ts/upload/6b/59/c2/b61db5f1c32cfdc6d75e59d4fac2dbe8.png" alt="" />
                </a>
            </div>

            <div className="col-md-4 pl-2 banner">
                <a href="http://">
                    <img src="https://salt.tikicdn.com/cache/w400/ts/banner/f8/58/e6/fd2aef5227b088be9677ddde42caf270.png.webp" alt="" style={{ height: '240px' }} />
                </a>
            </div>
        </div>
    );
}
export default Slide;
