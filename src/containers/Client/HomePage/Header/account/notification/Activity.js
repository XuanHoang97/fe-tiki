import { formatDate } from 'components/Formatting/FormatDate';
import { useSelector, useDispatch } from 'react-redux';
import { FilterNotify} from 'store/actions';
import React, { useEffect } from 'react';
import './style.scss';

const Activity = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const notify = useSelector(state => state.auth.notify);

    // fetch notify
    useEffect(() => {
        let userId = user ? user.id : '';
        dispatch(FilterNotify(userId, 'ACTIVITY'));
    }, [dispatch, user]);

    return (
        <div className=''>
            <div className='notify-head'>Đánh dấu đã đọc tất cả</div>
            {
                notify?.length > 0 ?
                notify.map((item, index) => {
                    return (
                        <div className='notify-item' key={index}>
                            <div className='item-left'>
                                <img src={item.image} alt="" />
                                <div className='item-list ml-3'>
                                    <div className='font-weight-bold text-primary'>{item.title}</div>
                                    <span className='content'>{item.content}</span>
                                    <div className='text-secondary small'>{formatDate(item.date)}</div>
                                </div>
                            </div>
                            <button type='button' className="btn btn-outline-secondary">Xem chi tiết</button>
                        </div>
                    )
                })
                :
                <div className='text-center'>Không có thông báo nào</div>
            }
        </div>
    );
}
export default Activity;