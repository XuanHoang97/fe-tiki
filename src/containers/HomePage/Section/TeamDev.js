import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { path } from '../../../utils';
import * as actions from '../../../store/actions';

function TeamDev(props) {
    const dispatch = useDispatch();
    const listUsers = useSelector(state => state.admin.users);

    useEffect(() => {
        dispatch(actions.fetchAllUser());
    }, [dispatch]);

    return (
        <div className='container bg-white pb-4'>
            <h5 className='pt-3'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREjoC_fu-_d_VmxAnKT0OgZ2TOr7VnSsdxYbljp3AP_bodev4MY1fWhyZZGGlKFBNDCmQ&usqp=CAU" style={{width: '3%'}} className='mr-2'  alt="" />
                <span>Nhóm Phát Triển</span>
                <small className="text-danger ml-3">(Start 21.06.2021)</small>
            </h5>

            
            <div className="d-flex" style={{gap: '10px'}}>
                {   
                    listUsers && listUsers.length > 0 ?
                    listUsers.slice(0,2).map((item, index) => {
                        let imgBase64 = "";
                        if (item.image) {
                            imgBase64=new Buffer(item.image, 'base64').toString('binary');
                        }

                        return(
                            <div className="card bg-light px-2 py-3 text-center" key={index} style={{width: '16.67%'}} >
                                <div className='py-2' style={{backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx74u9u54E8ce4LKjTiMAE28Gru4ht-FH66XvuUbU1eOvhQTYoY0L6cdUY1dPawz0P2D0&usqp=CAU')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                                    <img className="card-img-top rounded-circle" src={imgBase64} alt="" style={{margin: '0 auto', width: '70px', height:' 70px'}} />
                                </div>

                                <div className="card-body p-0">
                                    <h6 className="card-title mt-2 text-success font-weight-bold">{item.firstName} {item.lastName}</h6>
                                    <p className="card-text text-secondary">Thông minh, đẳng cấp.</p>
                                    <Link to={path.HOMEPAGE} className="border border-primary btn btn-outline-primary px-3 btn-sm">Profile</Link>
                                </div>
                            </div>
                        )
                    })
                    : 'loading...'
                }
            </div>
        </div>
    );
}

export default TeamDev;