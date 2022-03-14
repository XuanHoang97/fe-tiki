import React, {useState, useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formatDate } from 'components/Formatting/FormatDate';
import { GetAllNotify, GetNotify, MarkAllNotify, UpdateStatusNotify } from 'store/actions';
import './style.scss';
import useOutsideClick from '../../OutSideClick';

const Notify = () => {
    const dispatch = useDispatch();
    const ref = useRef();
    const [showNotify, setShowNotify] = useState(false);
    const [styleUnread, setStyleUnread] = useState('list my-2');
    const user = useSelector(state => state.auth.user);
    const notify = useSelector(state => state.auth.notify);
    const notifyUnread = useSelector(state => state.auth.notifyUnread);

    // fetch notify
    let userId = user ? user.id : '';
    useEffect(() => {
        dispatch(GetNotify(userId, 'N1'));
        dispatch(GetAllNotify(userId));
    }, [dispatch, userId]);
    
    // view detail notify
    const viewDetail = (notify) => {
        dispatch(UpdateStatusNotify({
            id: notify,
            status: 'N2',
        }));
        setStyleUnread('notify-read');
        dispatch(GetNotify(userId, 'N1'));
        setShowNotify(false);
    }

    // mark all notify as read
    const markAll = () => {
        dispatch(MarkAllNotify({
            userId: userId,
        }));
        setStyleUnread('notify-read');
        dispatch(GetNotify(userId, 'N1'));
    }
    
    // view notify
    const viewNotify = () => {
        setShowNotify(!showNotify);
    }
    useOutsideClick(ref, () => {
        if (showNotify) setShowNotify(false);
    });
    
    return (
        <>
            <div className='px-4 notify' onClick={() => viewNotify()}>
                <i className="far fa-bell text-white position-relative">
                    <span className="badge badge-pill badge-danger">
                        {
                            user && notifyUnread && notifyUnread.length > 0 ? notifyUnread.length : ''
                        }
                    </span>
                </i>
            </div>

            {
                showNotify &&
                <div className='detailNotify' ref={ref}>
                    <div className='d-flex justify-content-between'>
                        <h5 className='font-weight-bold'>Thông báo</h5>
                        <div>
                            <span className='text-secondary mr-3'>Chưa đọc {user && notifyUnread && notifyUnread.length > 0 ? notifyUnread.length : 0} </span>
                            <span className='text-primary'>Tất cả {user && notify && notify.length > 0 ? notify.length : 0}</span>
                        </div>
                    </div>

                    <div className='list-notify'>
                        {
                            user && notify && notify.length > 0 ?
                            notify.map((item, index) => {
                                return (
                                    <div className={`${ item.status === 'N1' ? styleUnread : 'notify-read' }`} 
                                    key={index}
                                    onClick={() => viewDetail(item.id)}
                                    >
                                        <img src={item.image} alt="" />
                                        <div className='item-list'>
                                            <div className='font-weight-bold text-primary'>{item.title}</div>
                                            <span className='content'>{item.content}</span>
                                            <div className='text-secondary small'>
                                                {formatDate(item.date)}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <div className='text-center'>Không có thông báo nào</div>
                        }
                    </div>
                    <div onClick={()=> markAll()} className='text-right text-dark border markAll btn-outline-light my-2'>Đánh dấu đã đọc tất cả</div>
                </div>
            }
        </>
    );
}
export default Notify;