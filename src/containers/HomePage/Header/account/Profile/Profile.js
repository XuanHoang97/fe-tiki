import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import instance from './../../../../../axios';
import { editUser, fetchAllUser, fetchGender, getUser } from 'store/actions';

function Profile(props) {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const user = useSelector(state => state.auth.user);
    const gender = useSelector(state => state.admin.genders);

    const [userName, setUserName] = useState('')
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [genderUser, setGender] = useState('');
    const [avatar, setAvatar] = useState('');
    const [previewImg, setPreviewImg] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user) {
            setUserName(user ? user.username : '');
            setPhone(user ? user.phoneNumber : '');
            setAddress(user ? user.address : '');
            setGender(user ? user.gender : '');
            setAvatar(user ? user.image : '')
            setPreviewImg(user ? user.image : '')
        }
    }, [user])

    useEffect(() => {
        dispatch(fetchGender());
    }, [dispatch])

    // edit info user
    const updateUser = (e) => {
        e.preventDefault();
        setLoading(true)
        setTimeout(async() => {
            const data = new FormData();
            data.append('id', user.id);
            data.append('username', userName);
            data.append('phoneNumber', phone);
            data.append('address', address);
            data.append('gender', genderUser);
            avatar && data.append('image', avatar);
            dispatch(editUser(data))
            dispatch(fetchAllUser());
            setLoading(false)
        }, 2000);

        console.log(userName, phone, address, genderUser, avatar, previewImg, user.id)
    }

    // Refresh token
    useEffect(() => {
        if(token){
            instance.get(`/user`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => {
                dispatch(getUser(res))
            })
            .catch(err => {
                localStorage.removeItem('token');
                console.log(err);
            })
        }
    }, [dispatch, token]);

    //onChange image
    const changeImage = async(e) => {
        let file=e.target.files[0];
        if(file){
            let objectUrl=URL.createObjectURL(file)
            setPreviewImg(objectUrl);
            setAvatar(file);
        }
    }

    return (
        <div className=''>
            <h5>Hồ Sơ Của Tôi </h5>
            <span className='text-secondary'>Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
            <hr/>
            <form className='d-flex'
                onSubmit={updateUser}
                encType='multipart/form-data'
            >
                <div className='col-8 pl-0'>
                    <div className=''>
                        <label className='col-3'>Tên đăng nhập</label>
                        <span className='ml-2'>
                            {userName}
                        </span>
                    </div>

                    <div className='form-group d-flex'>
                        <label className='col-3'>Tên</label>
                        <input type="text" className="form-control" 
                            value={ userName }
                            onChange={ (e) => setUserName(e.target.value) }
                        />
                    </div>

                    <div className='form-group d-flex'>
                        <label className='col-3'>Số Điện Thoại</label>
                        <input type="text" className="form-control" 
                            value={ phone }
                            onChange={ (e) => setPhone(e.target.value) }
                        />
                    </div>

                    <div className='form-group d-flex'>
                        <label className='col-3'>Địa chỉ</label>
                        <input type="text" className="form-control" 
                            value={address}
                            onChange={ (e) => setAddress(e.target.value) }
                        />
                    </div>

                    <div className='form-group d-flex'>
                        <label className='col-3'>Giới Tính</label>
                        <div className="gender d-flex px-3">
                            {
                                gender && gender.length > 0 ?
                                gender.map((item, index)=>{
                                    return(
                                        <div className="radio" key={index}>
                                            <label>
                                                <input type="radio" name="gender" 
                                                    value={item.valueVi}
                                                    checked ={item.valueVi=== genderUser ? genderUser : ''}
                                                    onChange={ (e) => setGender(e.target.value) }
                                                />{item.valueVi}
                                            </label>
                                        </div>
                                    )
                                })
                                : 'null'
                            }
                        </div>
                    </div>

                    <div className='form-group d-flex'>
                        <label className='col-3'>Ngày sinh</label>
                        <input type="text" className="form-control" />
                    </div>

                    <button type="submit" className="btn btn-primary px-4 mx-3">
                        {
                            loading ? 'Đang cập nhật...' : 'Lưu'
                        }
                    </button>
                </div>

                <div className='col-4 py-4 bg-light text-center border-left'>
                    <div><img src={previewImg ? previewImg : `https://giaoducthuydien.vn/wp-content/themes/consultix/images/no-image-found-360x250.png`} className='rounded-circle' alt="" style={{width: '40%'}}/></div>
                
                    <div className='d-flex justify-content-center mt-3'>
                        <div className="form-group">
                            <input id="previewImg" type="file" hidden 
                                onChange={(e)=>changeImage(e)}
                                name='image'
                            />
                            <label htmlFor="previewImg" className="btn btn-success px-3"><i className="fas fa-upload"></i> Thay ảnh</label>  
                        </div>
                    </div>
                    <span className='text-secondary'>Dụng lượng file tối đa 1 MB Định dạng:.JPEG, .PNG</span>
                </div>
            </form>
        </div>
    );
}
export default Profile;