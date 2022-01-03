import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as actions from '../../../store/actions';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
const mdParser = new MarkdownIt();

const ModalArticle = (props) => {
    //fetch product
    const dispatch = useDispatch();
    const someProduct = useSelector(state => state.admin.someProduct);
    
    useEffect(() => {
        dispatch(actions.GetSomeProduct());
    }, [dispatch]);
    
    //save to markdouwn to table
    const [productId, setProductId] = useState('');
    const [characterHTML, setCharacterHTML] = useState('');
    const [characterMarkdown, setCharacterMarkdown] = useState('');
    const [accessoryHTML, setAccessoryHTML] = useState('');
    const [accessoryMarkdown, setAccessoryMarkdown] = useState('');
    const [descriptionHTML, setDescriptionHTML] = useState('');
    const [descriptionMarkdown, setDescriptionMarkdown] = useState('');
    const [specificationHTML, setSpecificationHTML] = useState('');
    const [specificationMarkdown, setSpecificationMarkdown] = useState('');
    
    const toggle =()=>{
        props.toggleParent();
    }

    // add new product
    const handleAddNewArticle=()=>{
        props.SaveInfoProduct({
            characterHTML: characterHTML,
            characterMarkdown: characterMarkdown,
            accessoryHTML: accessoryHTML,
            accessoryMarkdown: accessoryMarkdown,
            descriptionHTML: descriptionHTML,   
            descriptionMarkdown: descriptionMarkdown,
            specificationHTML: specificationHTML,
            specificationMarkdown: specificationMarkdown,
            productId: productId,
        });
        toggle();
    }

    //onchange editor
    function editorCharacter({ html, text }) {
        setCharacterHTML(html);
        setCharacterMarkdown(text);
    }

    function editorAccessory({html, text}){
        setAccessoryHTML(html);
        setAccessoryMarkdown(text);
    }

    function editorDescription({html, text}){
        setDescriptionHTML(html);
        setDescriptionMarkdown(text);
    }

    function editorSpecification({html, text}){
        setSpecificationHTML(html);
        setSpecificationMarkdown(text);
    }

    return (
        <Modal 
            isOpen={props.isOpen} 
            toggle={()=>toggle()} 
            size="lg"
        >
            <ModalHeader toggle={()=>toggle()}>Thêm mới bài viết - chi tiết sản phẩm</ModalHeader>
            <ModalBody style={{height: '80vh', overflowY: 'scroll'}}>
            
            <div className='d-flex col-12 p-0'>
                <label className='mr-3'>Chọn sản phẩm</label>

                <div className="form-group d-flex col-4 p-0">
                    <select className="form-control" style={{height:'30px'}}
                        value={productId}
                        onChange={(e)=>setProductId(e.target.value)}
                    >
                        {   
                            someProduct && someProduct.length >0 &&
                            someProduct.map((item, index) => {
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
                    <label>Đặc điểm nổi bật</label>
                    <MdEditor style={{ height: '200px' }} renderHTML={text => mdParser.render(text)}
                        onChange={editorCharacter}
                        value={characterMarkdown}
                    />
                </div>
            </div>

            <div className="input-group p-0">
                <div className="form-group col-12 p-0">
                    <label>Phụ kiện</label>
                    <MdEditor style={{ height: '200px' }} renderHTML={text => mdParser.render(text)}
                        onChange={editorAccessory}
                        value={accessoryMarkdown}
                    />
                </div>
            </div>

            <div className="input-group p-0">
                <div className="form-group col-12 p-0">
                    <label>Thông số kỹ thuật</label>
                    <MdEditor style={{ height: '200px' }} renderHTML={text => mdParser.render(text)}
                        onChange={editorSpecification}
                        value={specificationMarkdown}
                    />
                </div>
            </div>

            <div className="input-group p-0">
                <div className="form-group col-12 p-0">
                    <label>Mô tả sản phẩm</label>
                    <MdEditor style={{ height: '200px' }} renderHTML={text => mdParser.render(text)}
                        onChange={editorDescription}
                        value={descriptionMarkdown}
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
export default ModalArticle;
