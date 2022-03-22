import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import useLocationForm from './useLocationForm';
import Select from 'react-select';

const ChangeAddress = (props) => {
    const {isOpen, toggle} = props;
    const {
      state,
      onCitySelect,
      onDistrictSelect,
      onWardSelect,
      onSubmit
    } = useLocationForm(false);
  
    const {
      cityOptions,
      districtOptions,
      wardOptions,
      selectedCity,
      selectedDistrict,
      selectedWard
    } = state;

    return (
        <Modal isOpen={isOpen}>
          <form onSubmit={onSubmit}>
            <ModalHeader toggle={()=>toggle()}>Địa chỉ mới</ModalHeader>
            <ModalBody>
              <div className='d-flex'>
                <div className="form-group col-6 p-0">
                  <input type="text" className="form-control" placeholder="Họ và tên" />
                </div>

                <div className="form-group col-6 p-0">
                  <input type="text" className="form-control" placeholder="Số điện thoại" />
                </div>
              </div>

              <Select
                name="cityId"
                key={`cityId_${selectedCity?.value}`}
                isDisabled={cityOptions.length === 0}
                options={cityOptions}
                onChange={(option) => onCitySelect(option)}
                placeholder="Tỉnh/Thành"
                defaultValue={selectedCity}
              />

              <Select
                name="districtId"
                key={`districtId_${selectedDistrict?.value}`}
                isDisabled={districtOptions.length === 0}
                options={districtOptions}
                onChange={(option) => onDistrictSelect(option)}
                placeholder="Quận/Huyện"
                defaultValue={selectedDistrict}
              />

              <Select
                name="wardId"
                key={`wardId_${selectedWard?.value}`}
                isDisabled={wardOptions.length === 0}
                options={wardOptions}
                placeholder="Phường/Xã"
                onChange={(option) => onWardSelect(option)}
                defaultValue={selectedWard}
              />

                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Địa chỉ cụ thể" />
                </div>

                <div className="form-check">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" value="checkedValue" checked />
                    Đặt làm địa chỉ mặc định
                  </label>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" className="btn" type='submit'>Hoàn thành</Button>
                <Button color="light" className="btn">Trở lại</Button>
            </ModalFooter>
          </form>
        </Modal>
    )
}
export default ChangeAddress;
