import { formatDateNew } from 'components/Formatting/FormatDate';
import { useSelector, useDispatch } from 'react-redux';
import { EditUSer, fetchGender } from 'store/actions';
import React, { useEffect, useState } from 'react';

function Profile(props) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const gender = useSelector(state => state.admin.genders);

    const [userName, setUserName] = useState('')    
    const [phone, setPhone] = useState('');
    const [genderUser, setGender] = useState('');
    const [avatar, setAvatar] = useState('');
    const [previewImg, setPreviewImg] = useState('');
    const [loading, setLoading] = useState(false);
    
    const [date, setDateBirth] = useState(1);
    const [month, setMonthBirth] = useState(1);
    const [year, setYearBirth] = useState(1990);
    const birthday = `${month}/${date}/${year}`;
    const birthdayTimestamp = new Date(birthday).getTime();

    // convert timestamp to date
    const convertDateBirth = formatDateNew(user? user.age :'');
    const result = convertDateBirth.split('/');
    useEffect (() => {
        if(user){
            setDateBirth(result[0]);
            setMonthBirth(result[1]);
            setYearBirth(result[2]);
        }
    }, [user]);
    
    // fill info user
    useEffect(() => {
        if (user) {
            setUserName(user.username);
            setPhone(user.phoneNumber);
            setGender(user.gender);
            setAvatar(user.image);
            setPreviewImg(user.image);
        }
    }, [user]);

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
            data.append('age', birthdayTimestamp);
            data.append('phoneNumber', phone);
            data.append('gender', genderUser);
            avatar && data.append('image', avatar);
            dispatch(EditUSer(data))
            setLoading(false)
        }, 1500);
    }

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
        <>
            <h5>H??? S?? C???a T??i </h5>
            <span className='text-secondary'>Qu???n l?? th??ng tin h??? s?? ????? b???o m???t t??i kho???n</span>
            <hr/>
            <form className='d-flex'
                onSubmit={updateUser}
                encType='multipart/form-data'
            >
                <div className='col-8 pl-0'>
                    <div className='form-group d-flex'>
                        <label className='col-3'>T??n</label>
                        <input type="text" className="form-control" 
                            value={ userName }
                            onChange={ (e) => setUserName(e.target.value) }
                        />
                    </div>

                    <div className='form-group d-flex'>
                        <label className='col-3'>S??? ??i???n Tho???i</label>
                        <input type="text" className="form-control" 
                            value={ phone }
                            onChange={ (e) => setPhone(e.target.value) }
                        />
                    </div>

                    <div className='form-group d-flex'>
                        <label className='col-3'>Gi???i T??nh</label>
                        <div className="gender">
                            {
                                gender?.length > 0 ?
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
                        <label className='col-3'>Ng??y sinh</label>
                        <div className="form-group dateBirth col-9">
                        <select className="form-control"
                            value={date}
                            onChange={(e) => setDateBirth(e.target.value)}
                        >
                            {
                                [...Array(31)].map((item, index) => {
                                    return(
                                        <option key={index}>{index + 1}</option>
                                    )
                                })
                            }
                        </select>

                        <select className="form-control"
                            value={month}
                            onChange={ (e) => setMonthBirth(e.target.value) }
                        >
                            {
                                [...Array(12)].map((item, index) => {
                                    return(
                                        <option key={`${index}`} value={index+1}>
                                            Th??ng {index + 1}
                                        </option>
                                        
                                    )
                                }) 
                            }
                        </select>

                        <select className="form-control"
                            value={year}
                            onChange={ (e) => setYearBirth(e.target.value) }
                        >
                            {
                                [...Array(50)].map((item, index) => {
                                    return(
                                        <option key={index}>{2022 - index}</option>
                                    )
                                })
                            }
                        </select>   
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mx-3">
                        {
                            loading ? 
                            // spinner 
                            <div className="spinner-border spinner-border-sm text-white" role="status"></div>
                            : 'C???p nh???t'
                        }
                    </button>
                </div>

                <div className='col-4 py-4 bg-light text-center border-left'>
                    <div><img src={previewImg ? previewImg : `https://giaoducthuydien.vn/wp-content/themes/consultix/images/no-image-found-360x250.png`} className='rounded-circle' alt="" style={{width: '100px', height:'100px'}}/></div>
                    <div className='d-flex justify-content-center mt-3'>
                        <div className="form-group">
                            <input id="previewImg" type="file" hidden 
                                onChange={(e)=>changeImage(e)}
                                name='image'
                            />
                            <label htmlFor="previewImg" className="btn btn-success px-3"><i className="fas fa-upload"></i> ?????i ???nh</label>  
                        </div>
                    </div>
                    <span className='text-secondary'>D???ng l?????ng file t???i ??a 1 MB ?????nh d???ng:.JPEG, .PNG</span>
                </div>
            </form>
        </>
    );
}
export default Profile;