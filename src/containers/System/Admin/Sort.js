import React, {Component} from 'react';

class Sort extends Component {
    onSearch = event => {
        const { onSearch } = this.props;
        onSearch(event.target.value);
    };

    render() {
        const { searchUser, sortUser, sorting} =this.props;
        return (
            <div className='justify-content-end d-flex col-9 p-0'>
                <div className="input-group col-5 p-0">
                    <label className="p-0">Tìm kiếm</label>
                    <input type="text" className="form-control ml-2" placeholder="Search..." 
                        onChange={this.onSearch}
                        value={searchUser} style={{height:'30px'}}
                    />
                </div>

                <div className="form-group d-flex col-2 p-0">
                    <select value={sortUser} onChange={sorting} className="form-control" name="" id=""  style={{height:'30px'}}>
                        <option value="role">Vai trò</option>
                        <option value="admin">Quản trị viên</option>
                        <option value="seller">Người bán hàng</option>
                        <option value="user">Người dùng</option>
                    </select>
                </div>

                <div className="form-group d-flex col-2 p-0">
                    <select className="form-control" name="" id=""  style={{height:'30px'}}>
                        <option>Chức danh</option>
                        <option>Quản trị viên</option>
                        <option>Người bán hàng</option>
                        <option>Người dùng</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Sort;