import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
const mdParser = new MarkdownIt();

const ModalArticle = (props) => {
    const {category, DetailCategory, changeCategory, categoryId, 
            productId, setProductId, toggleParent} = props;
    
    const [descriptionHTML, setDescHTML] = useState('');
    const [descriptionMarkdown, setDescMarkdown] = useState('');
    const [specificationHTML, setSpecHTML] = useState('');
    const [specificationMarkdown, setSpecMarkdown] = useState('');
    
    const toggle =()=>{
        toggleParent();
    }

    useEffect(()=>{
        setProductId(DetailCategory?.[0]?.id);
    },[DetailCategory, setProductId]);

    // add new product
    const addArticle=()=>{
        props.InfoProduct({
            descriptionHTML,
            descriptionMarkdown,
            specificationHTML,
            specificationMarkdown,
            productId,
            categoryId
        });
        toggle();
    }

    //onchange editor
    function editorDesc({html, text}){
        setDescHTML(html);
        setDescMarkdown(text);
    }

    function editorSpec({html, text}){
        setSpecHTML(html);
        setSpecMarkdown(text);
    }

    return (
        <Modal isOpen={props.isOpen} toggle={()=>toggle()} size="lg">
            <ModalHeader toggle={()=>toggle()}>Chi tiết sản phẩm</ModalHeader>
            <ModalBody style={{height: '80vh', overflowY: 'scroll'}}>
            
            <div className='d-flex col-12 p-0'>
                <label className='mr-3'>Danh mục</label>
                <div className="form-group d-flex p-0">
                    <select className="form-control"
                        value={categoryId}
                        onChange={(e)=>changeCategory(e)}
                    >     
                        {
                            category?.length > 0 &&
                            category.map((item, index) => {
                                return (
                                    <option key={index} value={item.id}>{item.name}</option>
                                )
                            }) 
                        }                
                    </select>
                </div>

                {
                    category?.length > 0 ?
                    <div className='form-group d-flex col-3 p-0'>
                        <select className="form-control"
                            value={productId}
                            onChange={(e)=>setProductId(e.target.value)}
                        >
                            {
                                DetailCategory?.length > 0 &&
                                DetailCategory.map((item, index) => {
                                    return (
                                        <option key={index} value={item.id}>{item.name}</option>
                                    )
                                }) 
                            }                                     
                        </select>
                    </div> :
                    <span>Không có sản phẩm nào ! </span>
                } 
            </div>

            <div className="input-group p-0">
                <div className="form-group col-12 p-0">
                    <label>Thông số kỹ thuật</label>
                    <MdEditor style={{ height: '200px' }} renderHTML={text => mdParser.render(text)}
                        onChange={editorSpec}
                        value={specificationMarkdown}
                    />
                </div>
            </div>

            <div className="input-group p-0">
                <div className="form-group col-12 p-0">
                    <label>Mô tả sản phẩm</label>
                    <MdEditor style={{ height: '200px' }} renderHTML={text => mdParser.render(text)}
                        onChange={editorDesc}
                        value={descriptionMarkdown}
                    />
                </div>
            </div>  
            </ModalBody>

            <ModalFooter>
                <Button color="primary" className="btn" onClick={()=> addArticle()}>Thêm mới</Button>
                <Button color="secondary" className="btn">Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}
export default ModalArticle;
