import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {CommonUtils} from "../../../utils"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as actions from '../../../store/actions';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
const mdParser = new MarkdownIt();

const ModalArticle = (props) => {
    const [productId, setProductId] = useState('');
    const [productArr, setProductArr] = useState([]);

    //save to markdouwn to table
    const [contentMarkdown, setContentMarkdown] = useState('');
    const [contentHTML, setContentHTML] = useState('');

    //fetch product
    useEffect(() => {
        props.fetchSomeProduct();
        setProductArr(props.someProduct);
        setProductId(props.someProduct[0]);
    }, [productArr]);

    const toggle =()=>{
        props.toggleParent();
    }

    // add new product
    const handleAddNewArticle=()=>{
        props.SaveInfoProduct({
            contentHTML: contentHTML,
            contentMarkdown: contentMarkdown,
            productId: productId,
        });

        toggle();
    }

    function handleEditorChange({ html, text }) {
        setContentHTML(html);
        setContentMarkdown(text);
    }
    
    return (
            <Modal 
                isOpen={props.isOpen} 
                toggle={()=>toggle()} 
                size="lg"
            >
                
                <ModalHeader toggle={()=>toggle()}>Thêm mới bài viết - chi tiết sản phẩm, tin tức</ModalHeader>
                <ModalBody>
                
                <div className='d-flex col-9 p-0'>
                    <label className='mr-3'>Chọn sản phẩm</label>

                    <div className="form-group d-flex col-4 p-0">
                        <select className="form-control" style={{height:'30px'}}
                            defaultValue={productId}
                            onChange={(e)=>setProductId(e.target.value)}
                        >
                            {   
                                props.someProduct && props.someProduct.length >0 &&
                                props.someProduct.map((item, index) => {
                                    return(
                                        <option key={index} value={item.id}> {item.name} </option>
                                    ) 
                                })
                            }
                        </select>
                    </div>
                </div>

                <div className="input-group p-0">
                    <div className="form-group col-12 p-0">
                        <label>Mô tả</label>
                        <MdEditor style={{ height: '200px' }} renderHTML={text => mdParser.render(text)}
                            onChange={handleEditorChange}
                            value={contentMarkdown}
                        />
                    </div>
                </div>

                
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" className="px-3" onClick={() => {handleAddNewArticle()}}>
                        Thêm mới
                    </Button>
                    <Button color="secondary" className="px-3">Cancel</Button>
                </ModalFooter>
            </Modal>
        )
}

const mapStateToProps = state => {
    return {
        someProduct: state.admin.someProduct,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSomeProduct: () => dispatch(actions.GetSomeProduct()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalArticle);
