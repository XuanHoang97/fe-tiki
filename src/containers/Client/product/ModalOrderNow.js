import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { numberFormat, totalMoney } from 'components/Formatting/FormatNumber';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import {createOrder} from 'services/clientService';
import LoadingOverlay from 'react-loading-overlay';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import * as actions from 'store/actions';
import { toast } from 'react-toastify';

const ModalOrderNow = (props) => {
    const saleOff = 25000;
    const [qty, setQty] = useState(1);
    const [loadingOrder, setLoadingOrder] = useState(false);
    const history = useHistory();
    const { register, formState: { errors }, handleSubmit } = useForm()

    const toggle =()=>{
        props.toggle();
    }

    const handleCountDown = (e) => {
        setQty(e)
    }

    const handleCountUp = (e) => {
        setQty(e)
    }

    //order
    const dispatch = useDispatch();
    const delivery = useSelector(state => state.client.delivery);
    const payment = useSelector(state => state.client.payment);
    const carts = useSelector(state => state.client.carts);

    useEffect(() => {
        dispatch(actions.getAllDelivery());
        dispatch(actions.getAllPayment());
    }, [dispatch]);

    // create order
    const order=async(data)=>{         
        setLoadingOrder(true);
        let newCart = carts.map(cart => {
            return {
                productId: cart.id,
                qty: cart.qty,
                price: cart.price,
                name: cart.name,
                image: cart.image,
                sale_off: saleOff,
                total: cart.price-saleOff,
            }
        })
        let res = await createOrder({
            arrOrder: newCart, 
            total : totalMoney(newCart)-saleOff,
            username: data.username,
            phone: data.phone,
            address: data.address,
            email: data.email,

            note: data.note,
            delivery: data.delivery,
            payment: data.payment,
        });
        
        setLoadingOrder(false);
        if(res.status === 200 && res.data.errCode === 0){
            dispatch(actions.deleteAllItemCart());
            toast.success('?????t h??ng th??nh c??ng');
            toggle();
            history.push('/my-order');
        }else{
            toast.error('?????t h??ng th???t b???i');
        } 
    }
    
    return (    
        <Modal isOpen={props.show}  toggle={()=>toggle()}  size="lg" >
            <form onSubmit={handleSubmit(order)}>
            <ModalHeader toggle={()=>toggle()}>B???n c?? {carts.length} s???n ph???m trong gi??? h??ng</ModalHeader>
                <LoadingOverlay active={loadingOrder} spinner text='??ang x??? l??, vui l??ng ?????i trong gi??y l??t .....' >
                    <ModalBody>
                    <div>
                        <div className="OrderNow">
                            {
                                carts?.length > 0 &&
                                carts.map((item, index) => {
                                    return (
                                        <div className="product_info" key={index}>
                                            <div className="product_image col-6">
                                                <img src={item.image} alt="" />
                                                <h6 className='font-weight-bold ml-3'>{item.name}</h6>
                                            </div>

                                            <div className="product_price col-3">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <button onClick={(e) => (item.qty > 1 && --item.qty, handleCountDown(item.qty))} className="btn btn-light btn-sm px-2" style={{height: '27px'}}>
                                                            <i className="fas fa-minus small" style={{fontSize: '10px'}} />
                                                        </button>
                                                    </div>

                                                    <input type="text" className="form-control text-center" style={{ height: '27px', border: '1px solid #ebebeb' }}
                                                        value={item.qty}
                                                        onChange={(e) => setQty(e.target.value)}
                                                    />

                                                    <div className="input-group-append">
                                                        <button onClick={(e) => (++item.qty, handleCountUp(item.qty))}  className="btn btn-light btn-sm px-2" style={{height: '27px'}}>
                                                            <i className="fas fa-plus small" style={{fontSize: '10px'}} />
                                                        </button>
                                                    </div>
                                                </div>   

                                                <span className='text-danger small ml-4' style={{cursor: 'pointer'}} title='xo?? s???n ph???m kh???i gi??? h??ng' >
                                                    <i className="fas fa-trash-alt"></i>    
                                                </span>    
                                            </div>

                                            <div className='col-3 text-right'>
                                                <div className='text-danger'>{numberFormat(item.price)}</div>
                                                <del className='text-secondary small'>{numberFormat(item.sale)}</del>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            <div className="totalPay">
                                <div className='calcOrder col-6'>
                                    <div className='item-pay'>
                                        <span>T???ng ti???n:</span>
                                        <span>{numberFormat(totalMoney(carts))}</span>
                                    </div>

                                    <div className='item-pay'>
                                        <span>Gi???m:</span>
                                        <small className="text-secondary">-{numberFormat(saleOff)}</small>
                                    </div>

                                    <div className='item-pay'>
                                        <span>C???n thanh to??n:</span>
                                        <span className="text-danger font-weight-bold">
                                            {numberFormat(totalMoney(carts) - saleOff)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order_info mt-3">
                            HO??N T???T TH??NG TIN
                            <div className='infoOrder d-flex'>
                                <form className="form-group col-md-6 p-0">
                                    <input type="text" className="form-control" placeholder="Nh???p h??? t??n..." 
                                        {...register('username', { 
                                            required: true,
                                        })}
                                    />
                                    <div className='text-danger'>{errors.username?.type === 'required' && "Vui l??ng nh???p h??? t??n"}</div>

                                    <input type="text" className="form-control my-2" placeholder="Nh???p s??? ??i???n tho???i..." 
                                        {...register('phone', {
                                            required: true,
                                            pattern: /^[0-9]{10,11}$/
                                        })}
                                    />
                                    <div className='text-danger'>{errors.phone?.type === 'required' && "Vui l??ng nh???p s??? ??i???n tho???i"}</div>
                                    <div className='text-danger'>{errors.phone?.type === 'pattern' && "S??? ??i???n tho???i kh??ng h???p l???"}</div>

                                    <input type="text" className="form-control my-2" placeholder="Nh???p ch??nh x??c email..."
                                        {...register('email', {
                                            required: true,
                                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                                        })}
                                    />
                                    <div className='text-danger'>{errors.email?.type === 'required' && "Vui l??ng nh???p email"}</div>
                                    <div className='text-danger'>{errors.email?.type === 'pattern' && "Email kh??ng h???p l???"}</div>
            
                                    <input type="text" className="form-control mt-2" placeholder="Nh???p ?????a ch???..." 
                                        {...register('address', {
                                            required: true,
                                        })}
                                    />
                                    <div className='text-danger'>{errors.address?.type === 'required' && "Vui l??ng nh???p ?????a ch???"}</div>
                                </form>

                                <div className="form-group col-md-6">
                                    <label className='font-weight-bold'>H??nh th???c nh???n h??ng</label>
                                    <div className="delivery d-flex mb-3">
                                        {
                                            delivery?.length >0 &&
                                            delivery.map((item, index) => {
                                                return (
                                                    <div className="radio mr-4" key={index}>
                                                        <label>
                                                            <input type="radio" 
                                                                name="delivery" 
                                                                value={item.valueVi}
                                                                {...register('delivery', { required: true, })}
                                                            />
                                                            <span>{item.valueVi}</span>
                                                        </label>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='text-danger'>
                                        {errors.delivery?.type === 'required' && "Vui l??ng ch???n h??nh th???c nh???n h??ng"}
                                    </div>

                                    <label className='font-weight-bold'>H??nh th???c thanh to??n</label>
                                    <div className="payment d-flex">
                                        {
                                            payment?.length >0 &&
                                            payment.map((item, index) => {
                                                return (
                                                    <div className="radio mr-4" key={index}>
                                                        <label>
                                                            <input type="radio" 
                                                                name='payment'
                                                                value={item.valueVi}
                                                                {...register('payment', { required: true,})}
                                                            />
                                                            <span>{item.valueVi}</span>
                                                        </label>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='text-danger'>
                                        {errors.payment?.type === 'required' && "Vui l??ng ch???n h??nh th???c thanh to??n"}
                                    </div>

                                    <input type="text" className="form-control" placeholder="Ghi ch??..." 
                                        {...register('note', {
                                            required: true,
                                        })}
                                    />
                                    <div className='text-danger'>{errors.note?.type === 'required' && "Vui l??ng nh???p ghi ch??"}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" className="font-weight-normal" type='submit'>HO??N T???T ?????T H??NG</Button>
                        <Button color="secondary" className="font-weight-normal">HU??? ????N</Button>
                    </ModalFooter>
                </LoadingOverlay>
            </form>
        </Modal>
    )
}
export default ModalOrderNow;
