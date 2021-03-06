import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import * as actions from '../../../store/actions';

const ModalUser = (props) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [roleId, setRoleId] = useState('');
    const [positionId, setPositionId] = useState('');
    const [image, setImage] = useState('');
    const [previewImg, setPreviewImg] = useState('');

    const dispatch = useDispatch();
    const genders = useSelector(state => state.admin.genders);
    const roles = useSelector(state => state.admin.roles);
    const positions = useSelector(state => state.admin.positions);

    useEffect(() => {
        dispatch(actions.fetchGender());
        dispatch(actions.fetchRole());
        dispatch(actions.fetchPosition());
    }, [dispatch]);

    const toggle =()=>{
        props.toggleModal();
    }

    // add new user
    const AddUser=(e)=>{
        e.preventDefault();
        const data = {
            email: email,
            username: username,
            address: address,
            phoneNumber: phoneNumber,
            gender: gender,
            roleId: roleId,
            positionId: positionId,
            image: image    
        };
        props.AddNewUser(data);
        toggle();
    }

    //upload file
    const changeImage=(e)=>{
        let file=e.target.files[0];
        if(file){
            let objectUrl=URL.createObjectURL(file)
            setPreviewImg(objectUrl);
            setImage(file);                        
        }
    }

    //remove image
    const removeImg=()=>{
        setPreviewImg('');
        setImage('');
    }

    return (
        <Modal isOpen={props.isOpen}  toggle={()=>toggle()}  size="lg">
            <form
                onSubmit={AddUser}
                encType='multipart/form-data'
            >
            <ModalHeader toggle={()=>toggle()}>Th??m th??nh vi??n</ModalHeader>
            <ModalBody>
                <div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label>Email</label>
                            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className="form-control" />
                        </div>

                        <div className="form-group col-md-3">
                            <label>???nh ?????i di???n</label>
                            <input id="previewImg" type="file" hidden 
                                onChange={(e)=>changeImage(e)} 
                                name='image'
                            />
                            <label htmlFor="previewImg" className="btn btn-success w-100"><i className="fas fa-upload"></i> T???i ???nh</label>       
                        </div>

                        <div className="preview-image col-md-2 border" 
                            style={{backgroundImage: `url(${previewImg})`, backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}
                        >
                            {
                            previewImg ?
                                <div onClick={() => removeImg()} className="col-md-12" style={{textAlign: 'end', position: 'absolute', right: '-1.5rem', top: '-1rem'}}>
                                    <i className="far fa-times-circle text-danger"></i>
                                </div> 
                                : <img src="https://giaoducthuydien.vn/wp-content/themes/consultix/images/no-image-found-360x250.png" className="w-100" alt="..." />
                            }
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-md-6">
                            <label>H??? t??n </label>
                            <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" className="form-control" />
                        </div>
                    </div>
                    
                    .<div className="row">    
                        <div className="form-group col-6">
                            <label>?????a ch???</label>
                            <input onChange={(e)=>setAddress(e.target.value)} value={address} type="text" className="form-control" />
                        </div>

                        <div className="form-group col-6">
                            <label>S??? ??i???n tho???i</label>
                            <input onChange={(e)=>setPhoneNumber(e.target.value)} value={phoneNumber} type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-md-6">
                            <label>Gi???i t??nh</label>
                            <select className="form-control"
                                onChange={(e) => setGender(e.target.value)}
                                value={gender}
                            >
                                {
                                    genders?.length >0 &&
                                    genders.map((item, index) => {
                                        return (
                                            <option key={index} value={item.ValueVi}>{item.valueVi}</option>
                                        )
                                    })
                                }           
                            </select>
                        </div>

                        <div className="form-group col-md-6">
                            <label>Vai tr??</label>
                            <select className="form-control"
                                onChange={(e) => setRoleId(e.target.value)}
                                value={roleId}
                            >
                                {
                                    roles?.length >0 &&
                                    roles.map((item, index) => {
                                        return (
                                            <option key={index} value={item.valueVi}>{item.valueVi}</option>
                                        )
                                    })
                                }           
                            </select>
                        </div>

                        <div className="form-group col-md-6">
                            <label>Ch???c danh</label>
                            <select className="form-control"
                                onChange={(e) => setPositionId(e.target.value)}
                                value={positionId}
                            >
                                {
                                    positions?.length >0 &&
                                    positions.map((item, index) => {
                                        return (
                                            <option key={index} value={item.valueVi}>{item.valueVi}</option>
                                        )
                                    })
                                }           
                            </select>
                        </div>
                    </div>
                </div>
            </ModalBody>

            <ModalFooter>
                <Button type='submit' color="primary" className="btn"> T???o th??nh vi??n </Button>
                <Button color="secondary" className="btn" onClick={()=>toggle()}>Hu???</Button>
            </ModalFooter>
            </form>
        </Modal>
    )
}
export default ModalUser;
