import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import useLocationForm from './useLocationForm';
import Select from 'react-select';
import React from 'react';

const ChangeAddress = (props) => {
    const {isOpen, toggle} = props;
    const {
      state,
      onCitySelect,
      onDistrictSelect,
      onWardSelect,
    } = useLocationForm(false);
  
    const {
      cityOptions,
      districtOptions,
      wardOptions,
      selectedCity,
      selectedDistrict,
      selectedWard
    } = state;

    const addAddress = () => {
      console.log('data city:', selectedCity.label, selectedDistrict.label, selectedWard.label);
    }

    return (
        <Modal isOpen={isOpen}>
          <form>
            <ModalHeader toggle={()=>toggle()}>Địa chỉ mới</ModalHeader>
            <ModalBody>
              <div className='infor-user'>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Họ và tên" />
                </div>

                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Số điện thoại" />
                </div>
              </div>

              <div className='addr-user'>
                <div>
                  <Select
                    name="cityId"
                    key={`cityId_${selectedCity?.value}`}
                    isDisabled={cityOptions.length === 0}
                    options={cityOptions}
                    onChange={(option) => onCitySelect(option)}
                    placeholder="Tỉnh/Thành"
                    defaultValue={selectedCity}
                  />
                </div>

                <div>
                  <Select
                    name="districtId"
                    key={`districtId_${selectedDistrict?.value}`}
                    isDisabled={districtOptions.length === 0}
                    options={districtOptions}
                    onChange={(option) => onDistrictSelect(option)}
                    placeholder="Quận/Huyện"
                    defaultValue={selectedDistrict}
                  />
                </div>

                <div>
                  <Select
                    name="wardId"
                    key={`wardId_${selectedWard?.value}`}
                    isDisabled={wardOptions.length === 0}
                    options={wardOptions}
                    placeholder="Phường/Xã"
                    onChange={(option) => onWardSelect(option)}
                    defaultValue={selectedWard}
                  />
                </div>
              </div>

                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Địa chỉ cụ thể" />
                </div>

                <div className="form-check">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" readOnly value="checkedValue" checked />
                    Đặt làm địa chỉ mặc định
                  </label>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button onClick={()=> addAddress()} color="primary" className="btn" type='button'>Hoàn thành</Button>
                <Button color="light" className="btn">Trở lại</Button>
            </ModalFooter>
          </form>
        </Modal>
    )
}
export default ChangeAddress;
