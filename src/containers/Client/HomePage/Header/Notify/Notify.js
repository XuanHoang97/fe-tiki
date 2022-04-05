import { GetAllNotify, GetNotify, MarkAllNotify, UpdateStatusNotify } from 'store/actions';
import { formatDate } from 'components/Formatting/FormatDate';
import React, {useState, useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useOutsideClick from '../../OutSideClick';
import { path } from 'utils';
import './style.scss';

const Notify = () => {
    const dispatch = useDispatch();
    const ref = useRef();
    const user = useSelector(state => state.auth.user);
    const notify = useSelector(state => state.auth.notify);

    const [showNotify, setShowNotify] = useState(false);
    const [styleUnread, setStyleUnread] = useState('listNotify my-2');
    const notifyUnread = useSelector(state => state.auth.notifyUnread);

    // fetch notify
    const userId = user ? user.id : '';
    useEffect(() => {
        dispatch(GetNotify(userId, 'N1'));
        dispatch(GetAllNotify(userId));
    }, [dispatch, userId]);
    
    // detail notify
    const viewDetail = (notify) => {
        dispatch(UpdateStatusNotify({
            id: notify.id,
            status: 'N2',
        }));
        setStyleUnread('notify-read');
        dispatch(GetNotify(userId, 'N1'));

        // redirect notify
        switch(true) {
            case notify.link.includes(path.ORDER):
                window.location.href = `${path.ORDER}`;
                break;
            case notify.link.includes(path.TIKI_XU):
                window.location.href = `${path.TIKI_XU}`;
                break;
            case notify.link.includes(path.CHECK_MAIL):
                window.open(`${path.CHECK_MAIL}`, '_blank');
                break;
            default:
                window.location.href = notify.link;
                break;
        }
    }

    // mark all notify
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
            <div className='pl-4 notify' onClick={() => viewNotify()}>
                <i className="far fa-bell text-white position-relative">
                    {
                        user && notifyUnread?.length > 0 &&
                        <span className="badge badge-pill badge-danger">
                                { notifyUnread.length}
                        </span>
                    }
                </i>
            </div>

            {
                showNotify &&
                <div className='detailNotify' ref={ref}>
                    <div className='d-flex justify-content-between'>
                        <h5 className='font-weight-bold'>Thông báo</h5>
                        <div>
                            <span className='text-secondary mr-3'>Chưa đọc {user && notifyUnread?.length > 0 ? notifyUnread.length : 0} </span>
                            <span className='text-primary'>Tất cả {user && notify?.length > 0 ? notify.length : 0}</span>
                        </div>
                    </div>

                    <div className='list-notify'>
                        {
                            user && notify?.length > 0 ?
                            notify.map((item, index) => {
                                return (
                                    <div className={`${ item.status === 'N1' ? styleUnread : 'notify-read' }`} 
                                        key={index}
                                        onClick={() => viewDetail(item)}
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
                            : <div className='text-center'>Chưa có thông báo nào</div>
                        }
                    </div>
                    <div onClick={()=> markAll()} className='markAll'>Đánh dấu đã đọc tất cả</div>
                </div>
            }
        </>
    );
}
export default Notify;